import { useStaticQuery, graphql } from "gatsby"

export default function useSourceImages() {
    return useStaticQuery(graphql`
    query  {
        allFile (filter: {relativeDirectory: {eq: ""}}){
          edges {
            node {
              name
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  `)
}
