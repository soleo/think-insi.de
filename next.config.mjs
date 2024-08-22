/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    instrumentationHook: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  output: "standalone",
};

export default nextConfig;
