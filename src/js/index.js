// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

/**
 * Remove a classe 'selecionado' do botão atualmente selecionado
 */
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}

/**
 * Marca o botão clicado como selecionado
 * @param {HTMLElement} botao 
 */
function marcarBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

/**
 * Esconde o personagem atualmente selecionado
 */
function esconderPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
}

/**
 * Mostra o personagem correspondente ao botão clicado
 * @param {number} indice 
 */
function mostrarPersonagem(indice) {
    personagens[indice].classList.add("selecionado");
}

// Adiciona o evento de clique para cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desmarcarBotaoSelecionado();
        marcarBotaoComoSelecionado(botao);
        esconderPersonagemSelecionado();
        mostrarPersonagem(indice);
    });
});
