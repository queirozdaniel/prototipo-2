import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './menu-mobile.css'

import facebookIcon from '../../assets/images/facebook.png'
import instagramIcon from '../../assets/images/instagram.png'
import pinterestIcon from '../../assets/images/pinterest.png'
import youtubeIcon from '../../assets/images/youtube.png'

const openMenu = () => {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    menuList.classList.toggle('ativo')
    menuButton.classList.toggle('ativo')
}

const pontaSVG = <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>

const Header = () => {

    return (
        <header class="bg-primary-normal">
            <div class="container">
                <nav class="header">
                    <Link className="header__logo text-3xl font-serif font-medium pl-2" to="/">Juliana Queiroz</Link>
                    <button onClick={openMenu} data-menu="button" aria-expanded="false" aria-controls="menu">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>
                    <ul class="header__links" data-menu="list" id="menu">
                        <li><Link className="hover:text-white" to="/">Sobre min</Link></li>
                        <li><Link className="hover:text-white" to="/consultoria">Consultoria </Link></li>
                        <li><Link className="hover:text-white" to="/mentoria">Mentoria</Link></li>
                        <li class="rounded-md px-2">
                            <AniLink
                                to="/blog"
                                cover
                                bg="#FFE882"
                            >
                                <span className="flex items-center">Blog {pontaSVG}</span>
                            </AniLink>
                        </li>
                        <li>
                            <ul className="icons__links grid grid-cols-4 align-middle">
                                <li><a href="https://www.instagram.com/juqueiroz__/"><img alt="f" src={facebookIcon} width="24px" /></a></li>
                                <li><a href="https://www.instagram.com/juqueiroz__/"><img alt="f" src={youtubeIcon} width="24px" /></a></li>
                                <li><a href="https://www.instagram.com/juqueiroz__/"><img alt="f" src={instagramIcon} width="24px" /></a></li>
                                <li><a href="https://www.instagram.com/juqueiroz__/"><img alt="f" src={pinterestIcon} width="24px" /></a></li>
                            </ul>
                        </li>
                    </ul>

                </nav>

            </div>
        </header>
    )

}


export default Header