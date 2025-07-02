/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  experimental: {
    // ⚠️ 아무것도 넣지 말고 비워두거나 완전히 제거해도 됩니다.
    // optimizePackageImports도 제거하세요.
  },
};

export default nextConfig;
