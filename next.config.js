/* eslint-env node */
const isProd = process.env.NODE_ENV === 'production'
const createNextPluginPreval = require('next-plugin-preval/config');

const withNextPluginPreval = createNextPluginPreval();


// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  webpack: config => {

    // config.resolve.fallback = {fs: false};

    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'|'bib'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // svgo: {
  //   multipass: true,
  //   plugins: ['removeDimensions'],
  // },
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  // strictMode: true,
  // assetPrefix: isProd ? '.' : undefined,
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: [
      'https://webcv-bibtex-nick-fournier.vercel.app/'
    ],
  },
};

// module.exports = nextConfig;
module.exports = withNextPluginPreval(nextConfig);
