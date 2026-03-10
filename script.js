// --- 1. Efeito de Revelar Seções ao dar Scroll ---
const observerOptions = {
    threshold: 0.2 // O elemento aparece quando 20% dele estiver na tela
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Ativa a animação
        }
    });
}, observerOptions);

// Seleciona cards e seções para animar
document.querySelectorAll('.card, .contact-section').forEach(el => {
    observer.observe(el);
});

// --- 2. Lógica do Menu Hambúrguer ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    // Abre e fecha o menu ao clicar no ícone
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });

    // Fecha o menu automaticamente ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('is-active');
        });
    });
}

// --- 3. Lógica do Formulário (Opcional - Feedback visual) ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Aqui você pode adicionar a lógica de envio que discutimos antes
        console.log("Formulário enviado com sucesso!");
    });
} 

document.addEventListener('DOMContentLoaded', () => {
    console.log("Scripts carregados com sucesso!");

    const mapa = document.querySelector('.map-container iframe');

    if (mapa) {
        // Exemplo: Adicionar um efeito de carregamento ou log
        mapa.onload = () => {
            console.log("O mapa do Google foi carregado completamente.");
        };
    } else {
        console.warn("Elemento de mapa não encontrado na página.");
    }
});
