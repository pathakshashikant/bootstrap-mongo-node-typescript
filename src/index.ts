import express from 'express';
import cors from 'cors';

import serviceRouter from './routers/service.routes';
import { errorHandler, notAvailableRouteErrorHandler } from './errorhandler/handler.error';

const app = express();

app.use(cors());

app.use(
	express.json({
		limit: '50mb',
	}),
);
app.use(express.urlencoded({ limit: '3000mb', extended: true }));

app.use('/api/v0/', serviceRouter);

app.use(errorHandler);
app.use(notAvailableRouteErrorHandler);

export default app;
