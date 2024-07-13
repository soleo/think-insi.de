/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        typedRoutes: true,
    },
      logging: {
        fetches: {
          fullUrl: true,
        },
      },
      poweredByHeader: false,
      productionBrowserSourceMaps: true,
      reactStrictMode: true,
};

export default nextConfig;
