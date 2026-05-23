document.addEventListener("DOMContentLoaded", () => {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const container = document.getElementById("alfabeto-container");
    const btnAvancar = document.getElementById("btn-avancar");
    const secaoVideo = document.getElementById("secao-video");
    const secaoLetras = document.getElementById("secao-letras");
    const videoElement = document.querySelector("#secao-video video");

    // Habilita o botão Avançar apenas quando o vídeo terminar
    if (videoElement) {
        videoElement.addEventListener("ended", () => {
            btnAvancar.disabled = false;
        });
    }

    alfabeto.forEach(letra => {
        // Cria o elemento visual do card
        const card = document.createElement("div");
        card.classList.add("card-letra");
        card.textContent = letra;
        
        // Adiciona a ação de clique para tocar o som correspondente
        card.addEventListener("click", () => {
            // Usa a voz do navegador/Google para falar a letra
            const fala = new SpeechSynthesisUtterance(letra);
            fala.lang = 'pt-BR'; // Define o idioma para Português do Brasil
            window.speechSynthesis.speak(fala);
        });
        
        container.appendChild(card);
    });

    // Ação do botão "Avançar"
    btnAvancar.addEventListener("click", () => {
        // Pausa o vídeo se ele estiver tocando
        if (videoElement) {
            videoElement.pause();
        }
        // Oculta a seção do vídeo e exibe a tela das letras
        secaoVideo.classList.add("escondido");
        secaoLetras.classList.remove("escondido");
    });
});