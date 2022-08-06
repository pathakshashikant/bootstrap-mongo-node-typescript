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
		const errors: any = [];
		for (const i of e.errors) {
			errors.push(i.message);
		}
		return res.status(400).send(errors);
	}
};

export default validate;
