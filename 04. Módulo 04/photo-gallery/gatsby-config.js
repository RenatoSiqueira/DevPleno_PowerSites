module.exports = {
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/images',
                name: 'images'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                printRejected: true,
                tailwind: true
            }
        }
    ]
}