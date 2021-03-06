const RSS = require('rss')
const articleFeed = new RSS({
  title: 'Analog.Cafe',
  description:
    'A film photography magazine. Weekly photo essays, guides, editorials, reviews, and stories.',
  feed_url: process.env.API_DOMAIN_PROD + '/rss',
  site_url: 'https://www.analog.cafe',
  favicon: 'https://www.analog.cafe/favicon.ico',
  image_url: 'https://www.analog.cafe/apple-touch-icon-180x180.png',
  managingEditor: 'Dmitri',
  copyright: 'Analog.Cafe',
  language: 'en',
  pubDate: new Date().toString(),
  generator: 'Roast CMS feed generator'
})

module.exports = articleFeed
