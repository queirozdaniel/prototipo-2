import React from 'react'
import { Link } from 'gatsby'

const pontaVoltarSVG = <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>

const LayoutPost = ({ children }) => {

    return (
        <div>
            <nav class="bg-contrast-ligth p-4 mt-0 w-full">
                <div class="container mx-auto flex items-center">
                    <div class="flex text-white font-extrabold ">
                        <Link class="flex items-center py-2 text-white text-base hover:text-blue  hover:underline" to="/blog">
                            {pontaVoltarSVG}
                            <span>Voltar para o blog</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {children}

            <footer class="py-2 mt-2 bg-contrast-ligth">
                <div class="container flex flex-row justify-center p-4 mt-0 w-full">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )

}

export default LayoutPost