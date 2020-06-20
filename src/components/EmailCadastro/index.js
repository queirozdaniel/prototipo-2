import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from 'react'



const EmailCadastro = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nome);
        console.log(email);
        console.log(mensagem);

        addToMailchimp(email)
            .then((data) => {
                alert(data.result);
            });

    };

    const handleNomeChange = (event) => {
        setNome(event.currentTarget.value);
        console.log(event.currentTarget.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.currentTarget.value);
        console.log(event.currentTarget.value);
    };

    const handleMensagemChange = (event) => {
        setMensagem(event.currentTarget.value);
        console.log(event.currentTarget.value);
    };



    return (
        <section class="border-b-2 border-black pt-12 pb-6">
            <div class="bg-contrast-dark py-4">
                <h1 class="font-serif text-center text-3xl font-medium py-4 text-white">Lista de expera</h1>
            </div>
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center w-full mb-6">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em contato</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Seja avisada antes de todo mundo assim que abrirmos as inscrições!.</p>
                </div>
                <form onSubmit={handleSubmit} class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <input onChange={handleNomeChange} class="w-full bg-orange rounded border border-contrast-dark focus:outline-none focus:border-secondery text-base px-4 py-2" placeholder="Nome Completo" type="text" />
                        </div>
                        <div class="p-2 w-1/2">
                            <input onChange={handleEmailChange} class="w-full bg-orange rounded border border-contrast-dark focus:outline-none focus:border-secondery text-base px-4 py-2" placeholder="Email" type="email" />
                        </div>
                        <div class="p-2 w-full">
                            <textarea onChange={handleMensagemChange} class="w-full bg-orange rounded border border-contrast-dark focus:outline-none h-48 focus:border-secondery text-base px-4 py-2 resize-none block" placeholder="Me fala um pouco sobre você"></textarea>
                        </div>
                        <div class="p-2 w-full">
                            <button
                                type="submit"
                                class="flex mx-auto text-white bg-contrast-ligth hover:bg-contrast-dark border-0 py-2 px-8 focus:outline-none rounded text-lg"
                            >
                                ENTRAR NA LISTA
                                </button>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )

}

export default EmailCadastro