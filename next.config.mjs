/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
     {
        protocol: 'https',
        hostname: 'cdn1.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn3.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn4.iconfinder.com',
      },
      
    ],
  },
};

export default nextConfig;
