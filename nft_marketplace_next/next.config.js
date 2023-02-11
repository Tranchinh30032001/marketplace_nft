/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["chinh-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;
