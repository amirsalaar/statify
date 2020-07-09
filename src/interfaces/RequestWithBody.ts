import { Request } from 'express';

/**
 * Overrides Request object to account fro undefined data type
 * on objects deconstructions
 */
export interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}
