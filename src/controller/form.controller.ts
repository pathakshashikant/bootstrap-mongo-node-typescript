import { Request, Response, NextFunction } from 'express';
import { FormInput } from '../schema/form.schema';

import logger from '../logger_module/winston-logger';
import { submitFormService } from '../service/form.service';

export async function createFormHandler(req: Request<{}, {}, FormInput['body']>, res: Response, next: NextFunction) {
	try {
		const data = await submitFormService(req.body);

		return res.send(data);
	} catch (e: any) {
		logger.error(e);
		next(e);
	}
}
