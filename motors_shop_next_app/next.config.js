/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: '',
    //path: `${basePath}/_next/image`,
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
