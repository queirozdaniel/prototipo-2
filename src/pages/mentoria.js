import React from 'react'
import Layout from '../components/Layout'
import EmailCadastro from '../components/EmailCadastro'

import avaliacao from '../assets/images/consultoria/avaliacao.png'
import aplicacao from '../assets/images/consultoria/aplicacao.png'
import analise from '../assets/images/consultoria/analise.png'

const svgTrue = <svg class="h-8 w-8 text-green-400" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 12l5 5l10 -10" /></svg>
const svgFalse = <svg class="h-8 w-8 text-secondery" viewBox="0 0 20 20" fill="currentColor">  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>


const showMensagemIndividual = () => {
    const mensagemGrupo = document.querySelector('[data-call="grupo"]');
    const mensagemIndividual = document.querySelector('[data-call="individual"]');

    mensagemGrupo.classList.add('hidden')
    mensagemIndividual.classList.remove('hidden')
}

const showMensagemGrupo = () => {
    const mensagemGrupo = document.querySelector('[data-call="grupo"]');
    const mensagemIndividual = document.querySelector('[data-call="individual"]');
    const btnIndividual = document.querySelector('[data-btn="individual"]');

    mensagemGrupo.classList.remove('hidden')
    mensagemIndividual.classList.add('hidden')
    btnIndividual.classList.add('opacity-50')
}


const Mentoria = () => {

    return (
        <Layout>
            <main>
                <h1 class="text-center text-4xl py-8">Mentoria</h1>
                <div class="container grid grid-cols-2 pb-1">
                    <button onClick={showMensagemIndividual} data-btn="individual" class="bg-contrast-ligth transform p-10 text-center text-xl uppercase text-white focus:opacity-100  focus:bg focus:scale-97 mx-2">
                        Individual
                    </button>
                    <button onClick={showMensagemGrupo} class="bg-contrast-ligth transform p-10 text-center text-xl uppercase text-white focus:opacity-100 opacity-50 focus:scale-97 mx-2">
                        Em grupo
                    </button>
                </div>
                <div class="border-t-2 border-b-2 border-black py-8 bg-contrast-dark">
                    <h3 class="text-center text-xl text-white container" data-call="individual">
                        Na mentoria individual eu te ensino passo a passo a como ser mais produtiva, organizada, como alinhar
                        seu propósito com o seus sonhos e como trabalhar com o que ama. Tu escolhes o tema abordado, eu farei
                        uma avaliação e a partir dela tocamos nossa mentoria.
                    </h3>
                    <h3 class="text-center text-xl text-white container hidden" data-call="grupo">
                        Na mentoria is o seus sonhos e como trabalhar com o que ama. Tu escolhes o tema abordado, eu farei
                        uma avaliação e a partir dela tocamos nossa mentoria.
                    </h3>

                </div>
            </main>

            <section class="container py-4">
                <h1 class="py-2 text-center text-3xl section__title">Como vai funcionar ?</h1>

                <div class="grid grid-cols-1 lg:grid-cols-3 ">
                    <div class="shadow-md px-2 flex flex-col items-center p-6 mx-2">
                        <img src={avaliacao} alt="Avaliação de Mentoria" width="64px" />
                        <h2 class="text-center text-xl pb-6">Avaliação</h2>
                        <p class="text-center">
                            Te envio um formulário em que tu irá me descrever tudo que eu preciso saber, após isso eu analiso o
                            que precisa ser feito, a partir daí te envio as estratégias.
                        </p>
                        <p class="font-bold">Dia 1</p>
                    </div>
                    <div class="shadow-md px-2 flex flex-col items-center  p-6">
                        <img src={aplicacao} alt="Aplicação de Mentoria" width="64px" />
                        <h2 class="text-center text-xl pb-6">Aplicação</h2>
                        <p class="text-center">
                            Tu irá aplicar as estratégias e as mudanças que precisarão ser feitas, nesse momento faremos o
                            primeiro call.
                        </p>
                        <p class="font-bold">Dia 2</p>
                    </div>
                    <div class="shadow-md px-2 flex flex-col items-center  p-6">
                        <img src={analise} alt="Analise de Mentoria" width="64px" />
                        <h2 class="text-center text-xl pb-6">Analise</h2>
                        <p class="text-center">
                            Após a aplicação e adapatação de todas as mudanças feitas, diagnósticos e soluções realizadas,
                            faremos uma análise da evolução feita durante esse período. Dia
                        </p>
                        <p class="font-bold">Dia 10</p>
                    </div>
                </div>

            </section>

            <section class="container py-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 divide-x divide-contrast-ligth shadow-lg">

                    <div class="p-6 my-4 ">
                        <div class="flex flex-row justify-center">
                            <span class="pr-2">{svgTrue}</span>
                            <h2 class="text-center font-semibold text-2xl">É pra você se</h2>
                        </div>
                        <ul class="list-decimal list-inside  list__items">
                            <li>
                                Que tem um negócio ou tem uma marca em construção e se vê precisando de ajuda pra organizar.
                            </li>
                            <li >
                                Quer aumentar suas vendas.
                            </li>
                            <li >
                                Quer melhorar seu posicionamento.
                            </li>
                            <li>
                                Quer conduzir seu negócio de forma consistente e coerente.
                            </li>
                            <li>
                                Já sabe o que quer só não está conseguindo fazer acontecer
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 my-4">
                        <div class="flex flex-row justify-center">
                            <span class="pr-4">{svgFalse}</span>
                            <h2 class="text-center font-semibold text-2xl"> Não é pra você se</h2>
                        </div>
                        <ul class="list-decimal list-inside list__items">
                            <li>
                                Se não tem paciência para mudanças.
                            </li>
                            <li>
                                Quer resultados fáceis.
                            </li>
                            <li>
                                Quer apenas focar em vender sem pensar nos clientes.
                            </li>
                            <li>
                                Prioriza quantidade e não qualidade.
                            </li>
                            <li >
                                Não está disposta a mudar os hábitos antigos para deixar os novos surgirem.
                            </li>
                            <li>
                                Não gosta de ouvir ou falar.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            <EmailCadastro />

        </Layout>

    )
}

export default Mentoria