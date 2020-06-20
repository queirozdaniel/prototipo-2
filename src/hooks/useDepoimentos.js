import { useStaticQuery, graphql } from "gatsby"


export default function useDepoimentos() {
    return useStaticQuery(graphql`
    query {
        allContentfulDepoimentos {
            edges {
              node {
                    nome
                    texto
                    foto {
                        localFile {
                            childImageSharp{
                                fluid(maxWidth: 300, maxHeight: 300) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  `)
}
