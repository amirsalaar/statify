import crypto from 'crypto';

export const randomHashGenerator = () => {
	const codeVerifier = crypto
		.randomBytes(generateRandom43To128Long())
		.toString('base64');

	const codeChallenge = crypto.createHmac('sha256', codeVerifier).digest('hex');

	return codeChallenge;
};

const generateRandom43To128Long = (): number => {
	return 43 + Math.floor(Math.random() * (128 - 43 + 1));
};
