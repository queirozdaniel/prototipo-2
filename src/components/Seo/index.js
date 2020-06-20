import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, keywords }) => {
    return (<StaticQuery
        query={querySeo}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    defaultDescription,
                    defaultImage,
                    defaultKeywords,
                    defaultUrl
                }
            }
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: defaultImage,
                url: defaultUrl,
                keywords: keywords || defaultKeywords
            }
            return (
                <Helmet>
                    <title>{seo.title}</title>
                    <meta name="description" content={seo.description} ></meta>
                    <meta name="keywords" content={seo.keywords}></meta>
                    <meta name="robots" content="index, follow"></meta>
                </Helmet>
            )
        }}
    />)
}

const querySeo = graphql`
    {
        site{
            siteMetadata {
              defaultTitle: title
              defaultDescription: description
              defaultImage: image
              defaultKeywords: keywords
              defaultUrl: url
            }
        }
    }

`

export default SEO

