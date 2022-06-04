/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['lastfm.freetls.fastly.net','s4.anilist.co'],
	},
	env: {
		LASTFM_CLIENT_ID: process.env.LASTFM_CLIENT_ID,
		LASTFM_CLIENT_TOKEN: process.env.LASTFM_CLIENT_TOKEN,
	},
};

module.exports = nextConfig;
