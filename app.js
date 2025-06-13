document.addEventListener('DOMContentLoaded', () => {
    // Mensagens românticas
    const loveMessages = [
        "Você é meu raio de sol!",
        "Nosso amor é minha história favorita.",
        "Você faz meu coração sorrir!",
        "Juntos é o melhor lugar para estar.",
        "Você é o motivo do meu sorriso.",
        "Meu mundo é mais bonito com você.",
        "Te amo mais a cada dia!",
        "Você é poesia em forma de gente.",
        "Meu coração é todo seu.",
        "Com você, tudo faz sentido."
    ];

    const messageContainer = document.getElementById('love-messages');

    // Função para mostrar mensagem aleatória
    function showRandomMessage() {
        const randomIndex = Math.floor(Math.random() * loveMessages.length);
        messageContainer.textContent = loveMessages[randomIndex];
        messageContainer.style.opacity = "1";
    }

    // Reinicia animação dos corações ao passar o mouse
    document.querySelectorAll('.img-heart-container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.querySelectorAll('.heart').forEach(heart => {
                heart.classList.remove('animated');
                // Força reflow para reiniciar a animação
                void heart.offsetWidth;
                heart.classList.add('animated');
            });
            showRandomMessage();
        });

        // Também remove animação ao sair para garantir reinício
        container.addEventListener('mouseleave', () => {
            container.querySelectorAll('.heart').forEach(heart => {
                heart.classList.remove('animated');
            });
        });
    });

    // Mensagem inicial vazia
    messageContainer.textContent = "";
    messageContainer.style.opacity = "0.7";
});