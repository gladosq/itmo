const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
}

module.exports = withNextIntl({
  ...nextConfig
});
