import { Request, Response, NextFunction } from 'express';

import { AnyZodObject } from 'zod';

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
	try {
		schema.parse({
			body: req.body,
			query: req.query,
			params: req.params,
		});

		next();
	} catch (e: any) {
		const errorList: Array<Object> = [];
		for (const err of e.issues) {
			const errorObject = {
				field: err.validation || err.path[1] || 'input',
				message: err.message,
				code: err.code,
			};
			errorList.push(errorObject);
		}

		return res.status(400).send({ success: false, errors: errorList });
	}
};

export const validateRequestInput = () => (req: Request, res: Response, next: NextFunction) => {
	try {
		next();
	} catch (e: any) {
		return res.status(400).send(e.errors);
	}
};

export default validate;
