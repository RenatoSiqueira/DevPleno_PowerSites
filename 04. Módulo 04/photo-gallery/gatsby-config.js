module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/images',
                name: 'images'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
    ]
}