module.exports = {
  reactStrictMode: true,
  transpilePackages: ["bash-ui", "bash-design"],
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['placehold.co']
  },
  experimental: {
    serverActions: true
  }
};
