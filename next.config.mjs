/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.lb.wbmdstatic.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
