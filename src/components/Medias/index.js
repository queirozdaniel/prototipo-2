import React from 'react'
import useGridInstaramImages from '../../hooks/useGridInstagramImages'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const Medias = () => {
    const data = useGridInstaramImages()

    return (
        <section id="sobre" class="pt-8 bg-torange">
            <h1 class="text-center my-12 text-3xl section__title">Me acompanhe nas redes sociais</h1>

            <div class="grid grid-cols-1 ">


                <div class="py-6 flex flex-col justify-center items-center">
                    <h2 class="text-center text-xl">Youtube</h2>
                    <p class="text-center text-lg mb-8">Dicas sobre como mudar de vida</p>
                    <div class="shadow ">
                        <iframe title="Minha historia" width="600px" height="400px" src="https://www.youtube.com/embed/wJNlL9vgZoI" frameborder="0"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>


                <div class="grid grid-cols-1 py-6 bg-torange">
                    <div className="container">
                        <h1 class="text-center text-xl">Blog</h1>
                        <p class="text-center text-lg mb-8">Artigos diarios sobre economia, negócios, mudança de vida</p>

                        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">

                            {data.allContentfulPost.edges.map((post) => {
                                return (
                                    <div class="flex flex-col justify-between m-6 shadow-md bg-white rounded-md p-6">
                                        <span class="inline-block py-1 px-3 rounded text-contrast-dark text-sm font-medium tracking-widest" style={{ backgroundColor: String(post.node.category.color) }}>
                                            {post.node.category.nome}
                                        </span>
                                        <h3 class="text-center text-xl py-4 border-b-2" style={{ borderBottomColor: String(post.node.category.color) }}>{post.node.title}</h3>

                                        <p class="p-6">
                                            {post.node.description}
                                        </p>
                                        <div className="p-6 flex flex-row justify-between">
                                            <Link className="flex flex-row items-center underline text-contrast-ligth" to={post.node.slug}>
                                                Ler Artigo
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                            <Link className="flex flex-row items-center underline text-contrast-dark" to='/blog'>
                                                Ir para Blog
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                )

                            })}

                        </div>
                    </div>
                </div>





                <div class="p-4 min-v-screen bg-torange pb-8">
                    <h2 class="text-center text-xl">Instagram</h2>
                    <p class="text-center text-lg mb-8">Dicas sobre empreendedorismo</p>
                    <div class="shadow grid grid-cols-6">
                        {data.allInstaNode.edges.map((post) => {
                            return (
                                <div className="hover:opacity-50 duration-300  rounded p-1">
                                    <a href={`https://www.instagram.com/p/${post.node.id}/`}>
                                        <Image fluid={post.node.localFile.childImageSharp.fluid} />
                                    </a>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </section>
    )

}

export default Medias