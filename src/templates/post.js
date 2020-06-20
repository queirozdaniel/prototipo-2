import React from 'react'
import { graphql } from 'gatsby'
import LayoutPost from '../components/LayoutPost'
import { DiscussionEmbed } from 'disqus-react'


import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <b>{text}</b>,
        [MARKS.ITALIC]: text => <i>{text}</i>
    },
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    }
}


const Post = ({ data, ...props }) => {

    return (
        <LayoutPost>

            <div class="text-center pt-16 md:pt-32">
                <p class="text-sm md:text-base text-teal-500 font-bold">{data.contentfulPost.published} <span class="text-gray-900">/</span> {data.contentfulPost.category.nome}</p>
                <h1 class="font-bold break-normal text-3xl md:text-5xl">{data.contentfulPost.title}</h1>
            </div>


            <div class="absolute w-full mx-auto my-6 max-w-1/2 bg-cover rounded" style={{ backgroundColor: String(data.contentfulPost.category.color), height: '75vh', left: '0' }}>
            </div>


            <div class="container relative  max-w-5xl mx-auto pt-24 py-12">
                <div class="mx-0 sm:mx-6 shadow-md rounded-md">
                    <div class="bg-white w-full px-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal post_layout" >
                        {documentToReactComponents(data.contentfulPost.contentRich.json, options)}
                    </div>
                </div>
            </div>

            <div class="container max-w-5xl mx-auto -mt-32">
                <DiscussionEmbed shortname='aprendiz-que-faz' config={{ identifier: data.contentfulPost.slug, title: data.contentfulPost.title }} />
            </div>

        </LayoutPost>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulPost(visible: {eq: true}, slug: {eq: $slug}) {
            title
            slug
            category {
                nome
                color
            }
            published(formatString: "DD [de] MMMM YYYY", locale: "pt-BR")
            contentRich {
                json
            }
        }
    }
`

export default Post