import React from 'react'
import Image from 'gatsby-image'
import useDepoimentos from '../../hooks/useDepoimentos'

const Depoimentos = () => {
    const data = useDepoimentos()
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 lg:mb-0 mb-6 p-4">
            {data.allContentfulDepoimentos.edges.map((post) => {
                return (
                    <div class="h-full text-center">
                        <Image className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-contrast-ligth" alt={post.node.nome} fluid={post.node.foto.localFile.childImageSharp.fluid}></Image>
                        <p class="leading-relaxed">{post.node.texto}</p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                        <h2 class="text-contrast-dark font-normal title-font tracking-wider text-sm">{post.node.nome}</h2>
                        <p class="text-contrast-ligth">Senior Product Designer</p>
                    </div>
                )
            })}
        </div>
    )
}


export default Depoimentos
