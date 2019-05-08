const siteAddress = new URL(process.env.SITE_HOSTNAME);
module.exports = {
    siteMetadata: {
        title: `Gatsby Hack Oregon Starter`,
        description: `Kick off your next, great Hack Oregon Gatsby project with this default starter configured to use TravisCI to deploy to S3.`,
        author: `@vmannello`,
    },
    plugins: [{
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: process.env.AWS_DEPLOY_BUCKET || '',
                protocol: siteAddress.protocol.slice(0, -1),
                hostname: siteAddress.hostname,
                acl: null,
            },
        }, {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: siteAddress.href.slice(0, -1),
            }
        },
        `gatsby-plugin-react-helmet`, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}