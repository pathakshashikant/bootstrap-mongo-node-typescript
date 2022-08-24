import { RequestHandler, Request, Response, NextFunction } from 'express';
import { PersonalUserInput } from '../../schema/user_schema/user.schema';
import { createPersonalUserAccount, listAllUsers } from '../../service/user_service/user.service';

import logger from '../../features/logger_module/winston-logger';

export const listAllUsersHandler: RequestHandler = async (req, res, next) => {
	try {
		const user = await listAllUsers();
		return res.status(200).json(user);
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
};

export async function createPersonalUserHandler(
	req: Request<{}, {}, PersonalUserInput['body']>,
	res: Response,
	next: NextFunction,
) {
	try {
		const user = await createPersonalUserAccount(req.body);

		return res.send(user);
	} catch (e: any) {
		logger.error(e);
		next(e);
	}
}
