var siteMetadata = {
  title: 'Maintainers Anonymous',
  author: 'Henry Zhu',
  description: 'A podcast about sharing our lives as people, as maintainers.',
  gitOrg: 'hzoo',
  siteUrl: 'maintainersanonymous.com',
  social: {
    twitter: '@left_pad',
    github: 'hzoo'
  },
  feed: {
    rss: 'https://feeds.transistor.fm/maintainers-anonymous',
    google: 'https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy50cmFuc2lzdG9yLmZtL21haW50YWluZXJzLWFub255bW91cw%3D%3D',
    apple: 'https://itunes.apple.com/us/podcast/maintainers-anonymous/id1459347058',
    spotify: 'https://open.spotify.com/show/1rvrUipEYmYOt2EZoL0uWm',
  },
  sponsorUrl: 'https://github.com/users/hzoo/sponsorship',
};

module.exports = {
  siteMetadata,
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-127078332-1`,
    //   },
    // },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icon.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-twitter`
  ],
}
