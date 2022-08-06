import logger from '../utils/winston-logger';
import constant from '../constants/default';
import { firebaseFunctions } from '../database_connection/firebase-functions';
import { PersonalUserInput } from '../interfaces/user.interface';

export const listAllUsers = async () => {
	try {
		const usersRef = firebaseFunctions().db.collection(constant.collectionName.users);
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

export async function createUser(input: PersonalUserInput) {
	try {
		// const user = String(input);
		const newSquare = { gender: 'Male', typeOfUser: 'o' };

		// const defaults: Pick<PersonalUserInput, 'gender'> = {
		// 	gender: 'Male',
		// };
		if (input.gender) {
			newSquare.gender = input.gender;
		}
		if (input.typeOfUser) {
			newSquare.typeOfUser = input.typeOfUser;
		}
		const response = { ...newSquare, ...input };
		logger.info('Personal user account is created');
		return response;

		// return omit(user.toJSON(), 'password');
	} catch (e: any) {
		throw new Error(e);
	}
}
