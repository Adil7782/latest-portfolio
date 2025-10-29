/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://adil-saaly.vercel.app/',
  generateRobotsTxt: true, // automatically create robots.txt
  changefreq: 'daily', // optional
  priority: 0.7, // optional
  sitemapSize: 5000, // optional
  exclude: ['/admin/*'], // pages you don't want in sitemap
}
