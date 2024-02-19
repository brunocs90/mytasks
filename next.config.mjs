/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com', // if your website has no www, drop it
      },
    ],
  },
};

export default nextConfig;
