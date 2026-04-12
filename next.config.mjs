/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hospital_landing',
  assetPrefix: '/hospital_landing',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
