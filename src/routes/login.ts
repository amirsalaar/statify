import { Router } from 'express';
import axios from 'axios';
import { SPOTIFY_WEB_API_URL } from '../configs/constants';

const loginRouter = Router();

loginRouter.get('/login', (req, res) => {
	const scopes = 'user-read-private user-read-email';

	res.redirect(SPOTIFY_WEB_API_URL + 'authorize');
});

export default loginRouter;
