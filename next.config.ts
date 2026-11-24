import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /sites não tem página própria; os nichos ficam em /sites/<nicho>
  async redirects() {
    return [{ source: "/sites", destination: "/servicos", permanent: false }];
  },
};

export default nextConfig;
