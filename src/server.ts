import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

enum EnvironmentTypes {
	development = 'development',
	production = 'production',
}

export class App {
	protected app: express.Application;

	constructor(NODE_ENV: string = 'development', PORT: number = 8000) {
		process.env.NODE_ENV = process.env.NODE_ENV || NODE_ENV;
		process.env.PORT = process.env.PORT || PORT.toString();
		this.app = express();

		if (NODE_ENV === EnvironmentTypes.development) {
			this.app.use(morgan('dev'));
		}
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(methodOverride());
	}
}
