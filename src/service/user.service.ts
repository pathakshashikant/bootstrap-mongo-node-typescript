import User from '../model/user.model';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { UserInput, LoginInput } from '../schema/user.schema';

export async function createUserAccount<T extends UserInput['body']>(input: T) {
	try {
		// const user: any = await User.findOne({
		// 	email: input.email,
		// });

		// if (!user) {
		// 	return {
		// 		success: false,
		// 		statusCode: 400,
		// 		message: 'User already exist',
		// 	};
		// }
		return await User.create(input);
	} catch (e: any) {
		throw new Error(e);
	}
}

export async function loginUserService<T extends LoginInput['body']>(input: T) {
	const user: any = await User.findOne({
		email: input.email,
	});

	if (!user) {
		return {
			success: false,
			statusCode: 404,
			message: 'User does not exist',
		};
	}

	const validPassword = await bcrypt.compare(input.password, user.password);

	if (!validPassword) {
		return {
			success: false,
			statusCode: 401,
			message: 'Please check your password',
		};
	}

	const accessToken = jwt.sign({ userId: user._id }, 'securekey', {
		expiresIn: '1d',
	});
	await User.findByIdAndUpdate(user._id, { accessToken });

	const { password, ...userData } = user._doc;
	return {
		success: true,
		statusCode: 201,
		accessToken: `${accessToken}`,
		data: userData,
	};
}
