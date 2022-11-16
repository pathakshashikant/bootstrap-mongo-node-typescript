import { Request, Response, NextFunction } from 'express';
import { UserInput, LoginInput } from '../schema/user.schema';
import { createUserAccount, loginUserService } from '../service/user.service';

import logger from '../logger_module/winston-logger';

export async function createPersonalUserHandler(
	req: Request<{}, {}, UserInput['body']>,
	res: Response,
	next: NextFunction,
) {
	try {
		const user = await createUserAccount(req.body);

		// logger.info(user);

		return res.send(user);
	} catch (e: any) {
		logger.error(e);
		next(e);
	}
}

export async function loginUser(req: Request<{}, {}, LoginInput['body']>, res: Response, next: NextFunction) {
	try {
		const userLoginStatus = await loginUserService(req.body);

		if (!userLoginStatus.success) {
			return res.status(userLoginStatus.statusCode).send({ message: userLoginStatus.message });
		}

		return res.status(userLoginStatus.statusCode).send({
			...userLoginStatus.data,
			accessToken: userLoginStatus.accessToken,
		});
	} catch (error) {
		next(error);
	}
}
