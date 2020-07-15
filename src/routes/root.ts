import { Router } from 'express';

const rootRouter = Router();

rootRouter.get('/', (req, res) => {
	res.send('Index');
});

export default rootRouter;
