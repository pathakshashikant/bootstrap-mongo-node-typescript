import express, { Request, Response } from 'express';
import cors from 'cors';

import serviceRouter from './routers/users_service/service.routes';
import { errorHandler, notAvailableRouteErrorHandler } from './errorhandler/handler.error';

const app = express();

app.use(cors());

app.use(
	express.json({
		verify: (req: Request, res: Response, buffer) => (req.body = buffer),
		limit: '3000mb',
	}),
);
app.use(express.urlencoded({ limit: '3000mb', extended: true }));

app.use('/api/v1/', serviceRouter);

app.use(errorHandler);
app.use(notAvailableRouteErrorHandler);

export default app;
