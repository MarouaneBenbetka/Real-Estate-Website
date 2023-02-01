/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"images.unsplash.com",
			"www.annonce-algerie.com",
			"ncrypted-tbn0.gstatic.com",
		],
	},
};

module.exports = nextConfig;
