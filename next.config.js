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

module.exports = withImages();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: false
});

module.exports = withBundleAnalyzer({});
