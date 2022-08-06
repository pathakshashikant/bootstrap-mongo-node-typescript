import { RequestHandler, Request, Response } from 'express';
import { PersonalUserInput } from '../schema/user.schema';
import { createUser, listAllUsers } from '../service/user.service';

import logger from '../utils/winston-logger';

export const listAllUsersHandler: RequestHandler = async (req, res, next) => {
	try {
		const user = await listAllUsers();
		return res.status(200).json(user);
	} catch (e: any) {
		logger.error(e);
		return res.status(400).send(e.message);
	}
};

export async function createPersonalUserHandler(req: Request<{}, {}, PersonalUserInput['body']>, res: Response) {
	try {
		const user = await createUser(req.body);
		return res.send(user);
	} catch (e: any) {
		logger.error(e);
		return res.status(409).send(e.message);
	}
}
