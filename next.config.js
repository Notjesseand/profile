// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // ← Add this line
  },
};

module.exports = nextConfig;