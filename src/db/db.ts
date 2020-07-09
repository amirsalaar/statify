import Knex from 'knex';
import * as knexConfig from './knexfile';

const knexConnector: Knex = Knex(knexConfig);

export default knexConnector;
