import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import imgCover from '../../assets/images/cover.jpg'


const LayoutBlog = ({ children }) => {

    const data = useStaticQuery(graphql`
        query {
            categorias: allContentfulCategory {
                edges {
                node {
                    nome
                    color
                }
                }
            }
        }
    `)

    return (
        <div>
            <div class="w-full m-0 opacity-75 pb-16 lg:py-8" style={{ background: `url(${imgCover}) no-repeat`, backgroundSize: "cover", maxHeight: "460px" }}>
                <div class="container max-w-4xl mx-auto pt-16 md:py-32 text-center break-normal">
                    <Link to="/blog">
                        <p class="text-white font-bold text-3xl md:text-5xl opacity-100">
                            Aprendriz que Faz
                        </p>
                        <p class="text-xl md:text-2xl text-white opacity-100">Por Juliana Queiroz</p>
                    </Link>
                </div>
            </div>

            <nav class="mt-0 w-full">
                <div class="container mx-auto flex items-center">

                    <div class="flex w-1/2 pl-4 text-sm">
                        <ul class="list-reset flex justify-between flex-1 flex-wrap sm:text-sm md:flex-none items-center">
                            {data.categorias.edges.map(categoria => {
                                return (
                                    <li class="mr-2 border-b-4" style={{ borderColor: categoria.node.color }}>
                                        <Link to={`/blog/${categoria.node.nome}`} class="inline-block py-2 px-2 text-lg text-contrast-dark no-underline hover:underline">{categoria.node.nome}</Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>


                    <div class="flex w-1/2 justify-end content-center">
                        <a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">
                            <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
                        </a>
                        <a class="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
                            <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                        </a>
                    </div>

                </div>
            </nav>



            {children}



            <div class="bg-gray-800">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-contrast-dark text-sm text-center sm:text-left"> Aprendriz que faz © 2020 —  criado por
                <a href="https://twitter.com/asd" rel="noopener noreferrer" class="text-contrast-dark ml-1" target="_blank">@knyttneve</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a href="www.google.com" class="text-contrast-dark">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href="www.google.com" class="ml-3 text-contrast-dark">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href="www.google.com" class="ml-3 text-contrast-dark">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a href="www.google.com" class="ml-3 text-contrast-dark">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>

        </div>
    )

}

export default LayoutBlog

