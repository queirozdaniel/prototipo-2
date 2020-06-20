import React from 'react'

import facebookIcon from '../../assets/images/facebook.png'
import instagramIcon from '../../assets/images/instagram.png'
import pinterestIcon from '../../assets/images/pinterest.png'
import youtubeIcon from '../../assets/images/youtube.png'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer class="bg-primary-normal">
            <div class="container py-8 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <div class="justify-start mx-2">
                    <h3 class="text-2xl border-b-2 mb-2 border-contrast-ligth text-contrast-dark">Contato</h3>
                    <p>contato@juliana-queiroz.com</p>
                </div>

                <div class="justify-start mx-2">
                    <h3 class="text-2xl border-b-2 mb-2 border-contrast-ligth text-contrast-dark">Encontrar</h3>
                    <ul>
                        <li>
                            <Link to="/#ebook" class="hover:text-white">Ebook</Link>
                        </li>
                        <li>
                            <Link to="/consultoria" class="hover:text-white">Consultoria</Link>
                        </li>
                        <li>
                            <Link to="/mentoria" class="hover:text-white">Mentoria</Link>
                        </li>
                        <li>
                            <Link to="/blog" class="hover:text-white">Blog</Link>
                        </li>
                    </ul>
                </div>

                <div class="justify-start mx-2">
                    <h3 class="text-2xl border-b-2 mb-2 border-contrast-ligth text-contrast-dark">Redes Sociais</h3>
                    <ul class="flex flex-col">
                        <li class="text-center flex flex-col hover:text-white">
                            <a class="flex flow-row pb-2" href="https://www.instagram.com/juqueiroz__/">
                                <img src={facebookIcon} alt="Facebook" width="24px" />
                                <span>Facebook</span>
                            </a>

                        </li>
                        <li class="text-center flex flex-col hover:text-white">
                            <a href="https://www.instagram.com/juqueiroz__/" class="flex flow-row pb-2">
                                <img src={youtubeIcon} alt="Youtube" width="24px" />
                                <p>Youtube</p>
                            </a>
                        </li>
                        <li class="text-center flex flex-col hover:text-white">
                            <a class="flex flow-row pb-2" href="https://www.instagram.com/juqueiroz__/">
                                <img src={instagramIcon} alt="Instagram" width="24px" />
                                <p>Instagram</p>
                            </a>
                        </li>
                        <li class="text-center flex flex-col hover:text-white">
                            <a class="flex flow-row " href="https://www.instagram.com/juqueiroz__/">
                                <img src={pinterestIcon} alt="Pinterest" width="24px" />
                                <p>Pinterest</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class=" border-black">
                <p class="text-center py-2">Todos direitos reservados</p>
            </div>
        </footer>
    )
}


export default Footer