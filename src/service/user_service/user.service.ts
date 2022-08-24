import logger from '../../features/logger_module/winston-logger';
import constant from '../../constants/default';
import { firebaseFunctions } from '../../database_connection/firebase-functions';
import { UserInput } from 'src/schema/user_schema/user.schema';
import _ from 'lodash';
import { emailVerification } from '../../features/email_modules/emailVerification';

export const listAllUsers = async () => {
	try {
		const usersRef = firebaseFunctions().db.collection(constant.collectionName.userRecords);
		const snapshot = await usersRef.get();
		const list: any[] = [];
		snapshot.forEach((doc: { id: any; data: () => any }) => {
			list.push({
				[doc.id]: doc.data(),
			});
		});
		logger.info('All user data is fecthed');
		return list;
	} catch (e: any) {
		throw new Error(e);
	}
};

export async function createUserAccount<T extends UserInput['body']>(input: T) {
	try {
		const defaultValues = {
			isZPClient: input.typeOfUser === 'client',
			isZPEmployee: !!input.email.endsWith('@zimmerpeacock.com'),
			isWhiteListedUser: input.isWhiteListedUser ? input.isWhiteListedUser : false,
			isOptedForNewsLetters: input.isOptedForNewsLetters ? input.isOptedForNewsLetters : false,
			gender: input.gender ? input.gender : 'Not specified',
			typeOfUser: input.typeOfUser ? input.typeOfUser : 'individual',
			role: input.role ? input.role : 'basic',
			jobDesignation: input.jobDesignation ? input.jobDesignation : 'Not specified',
			universityName: input.universityName ? input.universityName : 'Not specified',
			studentId: input.studentId ? input.studentId : 'Not specified',
		};

		const queryResponse = await firebaseFunctions().firebase.createUser(input);
		logger.info('Individual user account is created');

		await firebaseFunctions().firebase.setCustomUserClaims(queryResponse.uid, {
			role: defaultValues.role,
			typeOfUser: defaultValues.typeOfUser,
		});
		logger.info('Custom role of "basic" is assigned to user');

		const welcomeMessage = 'Welcome to Djuli, please verify your email address';
		await emailVerification(queryResponse.email!, welcomeMessage);

		logger.info('Verification Email Sent');
		const accountCreatedResponseData = {
			createdAt: queryResponse.metadata.creationTime,
			lastSignInTime: queryResponse.metadata.lastSignInTime,
			phoneNumber: queryResponse.phoneNumber || null,
			customClaims: queryResponse.customClaims || null,
			photoURL: queryResponse.photoURL || null,
			accountDisabled: queryResponse.disabled,
			uid: queryResponse.uid,
			typeOfUser: defaultValues.typeOfUser,
			role: defaultValues.role,
		};
		const userData = { ...accountCreatedResponseData, ...defaultValues, ...input };

		const refactoredUserData = _.omit(userData, ['password']);

		await firebaseFunctions()
			.db.doc(`/${constant.collectionName.userRecords}/${queryResponse.uid}`)
			.set(refactoredUserData);

		logger.info('User data instance in the database created');

		return refactoredUserData;
	} catch (e: any) {
		throw new Error(e);
	}
}
