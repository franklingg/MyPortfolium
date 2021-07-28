module.exports = {
  reactStrictMode: true,
}

module.exports = {
	useFileSystemPublicRoutes: false,
	async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true
			}
		];
	}
};

const withImages = require('next-images');

module.exports = withImages({
	esModule: true
});
