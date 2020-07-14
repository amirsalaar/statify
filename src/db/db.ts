import Knex from 'knex';
import knexConfig from './knexfile';

const knexConnector: Knex = Knex(knexConfig);

export default knexConnector;
