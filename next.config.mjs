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
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
