const isProd = process.env.NODE_ENV === 'production'
const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = ''

if (isGithubActions) {
  // Replace with your repository name if it's different
  basePath = '/hospital_landing'
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
