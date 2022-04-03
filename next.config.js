/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['i.scdn.co', 'cdn.discordapp.com'],
	},
};

module.exports = nextConfig;
