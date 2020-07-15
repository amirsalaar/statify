import { Router } from 'express';
import rootRouter from './root';
import loginRouter from './login';

const router = Router();

router.use(rootRouter);
router.use(loginRouter);

export default router;
