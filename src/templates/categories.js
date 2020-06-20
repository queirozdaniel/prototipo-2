import React from 'react'
import { graphql, Link } from 'gatsby'
import LayoutBlog from '../components/LayoutBlog'


const Categories = ({ data }) => {

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

        </LayoutBlog>
    )

}


export const POSTS_QUERY = graphql`
query($category: String!){
    posts: allContentfulPost(filter: {category: {nome: {eq:$category}}, visible: {eq: true}}) {
        edges {
            node {
                title
                slug
                description
                category {
                    nome
                }
                published(formatString: "DD [de] MMMM YYYY", locale: "pt-BR")
            }
        }
    }
}
`



/*
{data.posts.edges.map(post => {
                    return (
                        <div>
                            <h2><Link to={post.node.slug}>{post.node.title}</Link></h2>
                            <p>{post.node.category.nome}</p>
                        </div>
                    )
                })} 

 */

export default Categories