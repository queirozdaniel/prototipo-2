require('dotenv').config()

module.exports = {

    siteMetadata: {
        title: 'Juliana Queiroz',
        description: "Conheça os melhores conteudos e metódos para mudar a sua vida",
        keywords: "empreendedorismo, negocios, habitos, desenvolvimento pessoal",
        image: '/static/gasby.jpg',
        url: 'http://google.com'
    },


    plugins: [
        'gatsby-remark-embedder',
        'gatsby-plugin-postcss',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-image',
        '@horacioh/gatsby-theme-instagram',
        'gatsby-plugin-transition-link',
        {
            resolve: `gatsby-source-instagram`,
            options: {
                type: `account`,
                username: "juqueiroz__",
                gridLimit: 6
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/assets/images',
                name: 'images'
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true
            }
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT,
            },
        },
        'gatsby-plugin-react-helmet'
    ]
}