// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any custom webpack configs that mess with CSS
  webpack: (config) => {
    // ❌ Don't add MiniCssExtractPlugin manually here
    return config
  },
}

module.exports = nextConfig
