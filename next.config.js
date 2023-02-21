/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //assetPrefix: process.env.CF_PAGES ? 'https://quacksire.dev' : undefined,
  async rewrites() {
    return [
      {
        source: '/.well-known/webfinger',
        destination: 'https://webfinger.io/.well-known/webfinger'
      }
    ];
  }

}

module.exports = nextConfig
