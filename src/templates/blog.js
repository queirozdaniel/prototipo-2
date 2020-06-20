import React from 'react'
import { graphql, Link } from 'gatsby'
import LayoutBlog from '../components/LayoutBlog'

const Blog = ({ data, pageContext }) => {

    const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
    const nextPage = `/blog/${String(currentPage + 1)}`
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`

    return (

        <LayoutBlog>
            <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

                {data.posts.edges.map(post => {
                    return (
                        <div class="">
                            <div class="py-8 flex flex-wrap md:flex-no-wrap  border-b-2 border-double shadow-md px-2 my-4 shadow-xl">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="tracking-widest font-medium title-font text-gray-900">{post.node.category.nome}</span>
                                    <span class="mt-1 text-gray-500 text-sm">{post.node.published}</span>
                                </div>

                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium title-font mb-2">{post.node.title}</h2>
                                    <p class="py-4 leading-relaxed">
                                        {post.node.description}
                                        ...
                                    </p>

                                    <div class="flex justify-between items-center">
                                        <Link class="text-indigo-500 inline-flex items-center mt-4" to={post.node.slug}>Continuar lendo
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                        <span class="mt-4">2 minutos</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    )
                })}


            </div>

            <div class="flex flex-col items-center my-12">
                <div class="flex text-contrast-dark ">

                    {!isFirstPage && (
                        <Link to={prevPage} rel="prev">
                            <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </div>
                        </Link>
                    )}

                    {
                        Array.from({ length: totalPages }, (_, index) => (
                            <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
                                <div class="flex h-12 font-medium rounded-full bg-contrast-ligth">
                                    <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">{index + 1}</div>
                                </div>
                            </Link>
                        ))
                    }

                    {!isLastPage && (
                        <Link to={nextPage} rel="next">
                            <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </Link>
                    )}
                </div>
            </div>


        </LayoutBlog>

    )
}

export const query = graphql`
    query (
        $skip: Int!, $limit: Int!
    ){
        posts: allContentfulPost(filter: {visible: {eq: true}}, limit: $limit, skip: $skip) {
            edges {
                node {
                    title
                    slug
                    description
                    published(formatString: "DD [de] MMMM YYYY", locale: "pt-BR")
                    category {
                        nome
                    }
                }
            }
        }
        categorias: allContentfulCategory {
            edges {
              node {
                nome
                color
              }
            }
          }
    }
`

export default Blog

