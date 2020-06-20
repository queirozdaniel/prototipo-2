const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const posts = await graphql(`
        query{
            posts: allContentfulPost(filter: {visible: {eq: true}}) {
                edges {
                  node {
                    title
                    slug
                    category {
                        nome
                    }
                  }
                }
            }
        }  
    `)

    const postTemplate = path.resolve('src/templates/post.js')
    posts.data.posts.edges.forEach(post => {
        createPage({
            path: post.node.slug,
            component: postTemplate,
            context: {
                slug: post.node.slug
            },
        })
    });

    const blogTemplate = path.resolve('src/templates/blog.js')
    posts.data.posts.edges.forEach((post, index) => {

        const totalPages = posts.data.posts.edges.length
        const postPerPage = 2
        const currentPage = index + 1
        const isFirstPage = index === 0
        const isLastPage = currentPage === totalPages

        console.log(totalPages, currentPage, index);

        createPage({
            path: isFirstPage ? '/blog' : `/blog/${currentPage}`,
            component: blogTemplate,
            context: {
                limit: postPerPage,
                skip: index * postPerPage,
                isFirstPage,
                isLastPage,
                totalPages,
                currentPage
            },
        })
    });


    const categories = await graphql(`
        query {
            categories: allContentfulCategory {
                edges {
                    node {
                        id
                        nome
                    }
                }
            }
        }
    `)

    const categoryTemplate = path.resolve('src/templates/categories.js')
    categories.data.categories.edges.forEach(category => {

        createPage({
            path: `/blog/${category.node.nome}`,
            component: categoryTemplate,
            context: {
                category: category.node.nome,

            },
        })
    });


}