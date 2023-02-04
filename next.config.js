/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"images.unsplash.com",
			"www.annonce-algerie.com",
			"ncrypted-tbn0.gstatic.com",
			"images.pexels.com",
			"www.beytic.com",
			"res.cloudinary.com",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
