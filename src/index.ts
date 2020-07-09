import app from './app';

const setupEnvironment = (
	NODE_ENV: string = 'development',
	PORT: number = 8000
): void => {
	process.env.NODE_ENV = process.env.NODE_ENV || NODE_ENV;
	process.env.PORT = process.env.PORT || PORT.toString();
};

setupEnvironment('development', 8000);

app.listen(process.env.PORT, () =>
	console.log(`Server is up on ${process.env.PORT}`)
);
