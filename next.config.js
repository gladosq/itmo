const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  sassOptions: {
    prependData: '@use "src/styles/mixins-variables" as *;'
  },
  images: {
    domains: ['news.itmo.ru']
  }
}

module.exports = withNextIntl({
  ...nextConfig
});
