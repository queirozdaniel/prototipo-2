import { useStaticQuery, graphql } from "gatsby"

export default function useGridInstagramImages() {
  return useStaticQuery(graphql`
    query {
      allInstaNode(filter: {username: {eq: "juqueiroz__"}}, limit: 12) {
        edges {
          node {
            id
            username
            likes
            comments
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

      allContentfulPost(filter: {visible: {eq: true}}, limit: 2, sort: {order: DESC, fields: id}) {
        edges {
          node {
            title
            slug
            description
            category {
              nome
              color
            }
            published(formatString: "DD [de] MMMM YYYY", locale: "pt-BR")
          }
        }
      }

    }
  `)
}
