module.exports = {
    siteMetadata: {
        title: `colinknebl.com`,
        description: `Colin's Personal Web Playground.`,
        author: `Colin Knebl`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `colinknebl.com`,
                short_name: `ColinK`,
                start_url: `/`,
                background_color: `#333`,
                theme_color: `#yellow`,
                display: `minimal-ui`,
                icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        `gatsby-plugin-mdx`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
