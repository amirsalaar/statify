import dotenv from 'dotenv';
import Knex from 'knex';

dotenv.config();

const knexConfig: Knex.Config = {
	client: 'pg',
	connection: {
		database: process.env.POSTGRES_DB,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
	},
	migrations: {
		directory: './migrations',
		extension: 'ts',
	},
};

export default knexConfig;
