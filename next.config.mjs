/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       hostname: 'unsplash.com'
  //     }
  //   ]
  // }
  images: {
    protocol: 'https',
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
