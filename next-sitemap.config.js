/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://www.classicengineeringcorp.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about-us'),
    await config.transform(config, '/products'),
    await config.transform(config, '/products/gearboxes'),
    await config.transform(config, '/products/motors'),
    await config.transform(config, '/products/pumps'),
    await config.transform(config, '/products/custom-solutions'),
    await config.transform(config, '/services'),
    await config.transform(config, '/services/maintenance'),
    await config.transform(config, '/services/repair'),
    await config.transform(config, '/services/installation'),
    await config.transform(config, '/industries'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/privacy'),
    await config.transform(config, '/terms'),
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: getPriority(path),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}

function getPriority(path) {
  if (path === '/') return 1.0
  if (path.includes('/products') || path.includes('/services') || path === '/about-us' || path === '/contact') return 0.8
  return 0.6
} 