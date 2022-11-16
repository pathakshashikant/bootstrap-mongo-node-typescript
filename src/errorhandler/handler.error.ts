import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
	if (res.headersSent) {
		next(error);
	} else {
		res.status(500).json({
			message: error.message,
			...(process.env.NODE_ENV?.trim() === 'production' ? null : { err: error.stack }),
		});
	}
};

export const notAvailableRouteErrorHandler = (req: Request, res: Response) => {
	res.status(404);
	res.json({
		success: true,
		message: 'Welcome to Skyfri API Services',
	});
};
