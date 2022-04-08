/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // whitelisted image domains
  // whitelisted means trusted
  images: {
    // no https://
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
