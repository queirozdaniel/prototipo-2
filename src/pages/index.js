import React from 'react'
import '../assets/style.css'
import Layout from '../components/Layout'
import Medias from '../components/Medias'
import Depoimentos from '../components/Depoimentos'
import SEO from '../components/Seo'

import { useSpring, animated } from 'react-spring'

import mentoria from '../assets/images/mentoria.png'
import consultoria from '../assets/images/consultoria.png'
import foto from '../assets/images/juliana-img.jpg'
import { Link } from 'gatsby'


// Componente de carta mostrando o Serviço
const CardServico = ({ title, descricao, logo, move }) => {
    return (
        <div class="shadow-xl mx-2  flex flex-col items-center p-3 border-solid rounded bg-orange">
            <div class="text-center py-3 my-3">
                <img width="64px" src={logo} alt="Icone" />
            </div>

            <h2 class="text-center text-2xl mb-4 border-b-2">{title}</h2>
            <p class="text-center text-base mb-6 px-6">{descricao}</p>
            <Link to={move}>
                <button
                    class="rounded-md transition duration-500 ease-in-out bg-contrast-ligth hover:bg-contrast-dark transform hover:-translate-y-1 hover:scale-110 px-6 py-4 text-white mb-8">
                    SAIBA MAIS
                </button>
            </Link>
        </div>
    )
}


const Index = () => {

    const fade = useSpring({
        from: {
            opacity: 0,
            top: -100
        },
        to: {
            opacity: 1,
            top: 0
        }
    })

    return (
        <Layout>
            <SEO title="Juliana Queiroz" description="Melhor conteudo sobre desenvolvimento pessoal" keywords="empreendedorismo, mulheres, desenvolvimento pessoal" />

            <animated.main class="container grid grid-cols-1 lg:grid-cols-2 py-4" style={fade}>
                <div className="lg:min-v-screen break-normal p-3">
                    <h1 className="text-3xl py-4 text-center">Quem sou eu ?</h1>
                    <p className="leading-loose">Oi, eu sou a Ju. Tenho 25 anos e sempre fui apaixonada por experiências, vendas e
                    pessoas. Em 2018
                        comecei a dar <strong>dicas mais especializadas</strong> para pessoas que me procuravam pra tirar
                        duvidas, gostei do que
                        fiz e resolvia que ia criar disso um negócio.</p>
                    <p className="leading-loose">Desde adolescente trabalho com vendas, e comecei a trabalhar dando dicas a pessoas
                    que queriam vender
                        mais, nesse meio tempo descobri minha há paixão por <strong>Desenvolvimento pessoal</strong>, por ajudar
                        pessoas a
                        descobrirem seu propósito e trabalharem com o que amam.</p>
                    <p className="leading-loose">Durante minha vida valorizei cada aprendizado, sendo ele fracassos ou não
                    fracassos como eu gosto de
                        chamar. Sou uma jovem comum, e mudei do Pará para o Sul do país, em busca de <strong>realizar meus
                            sonhos</strong>, estou
                        determinada a aprender com pessoas que buscam evolução e equilíbrio nessa vida. Vem comigo?</p>
                </div>
                <div className="lg:min-v-screen p-3 mt-4">
                    <img className="shadow-xl rounded-sm" alt="Imagem Juliana Queiroz" src={foto} />
                </div>
            </animated.main>



            <section class="my-10 ">
                <div class="bg-primary-ligth py-6 pb-12">
                    <h1 class="text-center my-6 text-3xl section__title">Como posso te ajudar ?</h1>
                    <div class="container grid grid-cols-1 lg:grid-cols-2 minha ">

                        <CardServico move="/consultoria" logo={consultoria} title="Consultoria" descricao="Te ajudo a montar estratégias que vão de
                        acordo com o que  queres conquistar em seu negócio ou marca pessoal, crescimento equilibrado e consistente."
                        />
                        <CardServico move="/mentoria" logo={mentoria} title="Mentoria" descricao="Te ajuda a organizar seu objetivos alinhando
                        com sua realidade e ferramentas que tem disponível no momento. Seu propósito é a chave para melhorar sua vida."
                        />

                    </div>
                </div>
            </section>


            <section class="container pb-10">
                <h1 class="text-center text-3xl section__title">Depoimentos</h1>
                <Depoimentos />

            </section>

            <section id="ebook" class="bg-primary-ligth border-t-2 border-b-2 border-contrast-ligth py-6 pb-12">
                <div class="container ">
                    <h1 class="text-center my-4 text-2xl section__title">Conteudo Gratuito</h1>

                    <div class="container grid grid-cols-1 lg:grid-cols-3 ">
                        <div class="px-3 mx-4 py-5 bg-torange">
                            <img class="w-22" src="img/form.svg " alt="Imagem Ebook" />
                        </div>
                        <div class="px-3 mx-4 py-5 bg-torange">
                            <h3 class="text-center text-sm">Receba nosso ebook</h3>
                            <h2 class="text-center text-lg  pb-8">Como crescer começado com pouco</h2>
                            <p class="text-center">Beixe nossos materiais gratuitos para organização: planners, listas e
                            organização para
                            iniciantes
                        </p>
                        </div>
                        <div class="px-3 mx-4 py-5 bg-torange">
                            <form
                                name="contact"
                                method="post"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                class="flex flex-col"
                            >
                                <label htmlFor="nome">
                                    <input class="p-2 my-2  border border-4 border-black rounded" placeholder=" Fulano da silva" type="text" id="nome" />
                                </label>
                                <label htmlFor="email" aria-label="Email: ">
                                    <input class="p-2 my-2 border border-4 border-black rounded" placeholder="fulano@exemplo.com" type="email" id="email" />
                                </label>
                                <button
                                    class="rounded-md transition duration-500 ease-in-out bg-contrast-ligth hover:bg-contrast-dark transform hover:-translate-y-1 hover:scale-102 px-6 py-4 text-white mb-8">Baixar
                                Ebook</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <Medias />

        </Layout>
    )
}

export default Index
