module.exports = {
    siteMetadata: {

        title: 'MyData Korea',
        author: 'Chris Lee',
        description: 'A MyData Global Local Hub Initiative.',
        siteUrl: `https://mydatakorea.io`,
        social: {
            twitter: `MyDataKorea`,
        },
    },
  
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: 'MyData Korea',
          short_name: 'MyData Korea',
          start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/mydata/mydatakorea-colour-down.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'YOUR MAILCHIMP FORM ENDPOINT', // add your MC list endpoint here; see instructions below
      },
    }

  ],
}