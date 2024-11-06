/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bakehouse78',
  images: {
    unoptimized: true, // Disables the `next/image` optimization for static export
  },
};

export default nextConfig;