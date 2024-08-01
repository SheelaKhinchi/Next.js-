// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'doccure.dreamstechnologies.com',
          pathname: '/react/template/**', // Adjust the pathname pattern if needed
        },
      ],
    },
  };
  
  export default nextConfig;
  