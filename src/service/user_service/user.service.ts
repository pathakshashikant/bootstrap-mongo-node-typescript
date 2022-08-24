import logger from '../../features/logger_module/winston-logger';
import constant from '../../constants/default';
import { firebaseFunctions } from '../../database_connection/firebase-functions';
import { PersonalUserInput } from 'src/schema/user_schema/user.schema';
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

export async function createPersonalUserAccount<T extends PersonalUserInput['body']>(input: T) {
	try {
		const defaultValues = {
			isZPClient: false,
			isZPEmployee: false,
			isWhiteListedUser: false,
			isOptedForNewsLetters: false,
			gender: 'Not specified',
			typeOfUser: 'Individual',
		};

		const queryResponse = await firebaseFunctions().firebase.createUser(input);
		logger.info('Individual user account is created');

		await firebaseFunctions().firebase.setCustomUserClaims(queryResponse.uid, {
			role: 'basic',
			typeOfUser: 'Individual',
		});
		logger.info('Custom role of "basic" is assigned to user');

		const welcomeMessage = 'Welcome to Djuli, please verify your email address';
		await emailVerification(queryResponse.email!, welcomeMessage);

		logger.info('Verification Email Sent');
		const accountCreatedResponseData = {
			createdAt: queryResponse.metadata.creationTime,
			lastSignInTime: queryResponse.metadata.lastSignInTime,
			emailVerified: queryResponse.emailVerified,
			phoneNumber: queryResponse.phoneNumber || null,
			customClaims: queryResponse.customClaims || null,
			photoURL: queryResponse.photoURL || null,
			accountStatus: queryResponse.disabled,
			uid: queryResponse.uid,
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
