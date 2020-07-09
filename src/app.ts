import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import methodOverride from 'method-override';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import { EnvironmentTypes } from './types';
import { AppRouter } from './routes/AppRouter';

const app: Express = express();

if (process.env.NODE_ENV === EnvironmentTypes.development)
	app.use(morgan('dev'));

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	methodOverride((request: Request, response: Response) => {
		if (request.body && request.body._method) {
			const method = request.body._method;
			return method;
		}
	})
);
app.use('/', routes);
app.use(AppRouter.getInstance());

export default app;
