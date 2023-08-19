const withNextIntl = require('next-intl/plugin')('./i18n.ts');

// const nextTranslate = require('next-translate-plugin');

// module.exports = nextTranslate();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  cleanDistDir: true,
  sassOptions: {
    prependData: '@use "src/styles/mixins" as *;'
  },
  images: {
    domains: ['news.itmo.ru']
  },
  compiler: {
    styledComponents: false
  },

}

module.exports = withNextIntl({
  ...nextConfig
});
