module.exports = {
  pathPrefix: '/api-docs-smoke-test',
  siteMetadata: {
    title: 'API Docs Smoke Test',
    description: 'Documentation website for API smoke tests',
    betaLink: '',
  },
  plugins: [
    {
      resolve: '@commercetools-docs/gatsby-theme-api-docs',
      options: {
        websiteKey: 'api-docs-smoke-test',
        excludeFromSearchIndex: true,
      },
    },
  ],
};
