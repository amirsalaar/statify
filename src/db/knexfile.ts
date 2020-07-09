import dotenv from 'dotenv';

dotenv.config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
			database: process.env.POSTGRES_DB,
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
		},
		migrations: {
			directory: './db/migrations',
		},
	},

	staging: {
		client: 'pg',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'pg',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};
