// next.config.js
const path = require('path')

module.exports = {
    images: {
      domains: ['images.ctfassets.net', 'd3t3ozftmdmh3i.cloudfront.net'],
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    node: {
      fs: "empty"
  }
  }