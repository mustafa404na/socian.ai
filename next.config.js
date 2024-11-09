/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["socianaistorageaccount.blob.core.windows.net"],
  },
  env: {
    DEBUG: process.env.NODE_ENV !== "production",
    NEXT_APP_URL: "http://auth.socian.ai:3100",
  },
};

module.exports = nextConfig;
