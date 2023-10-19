 
const numeroWhatsApp = '11948391523'; // Substitua pelo seu número de WhatsApp
const mensagem = 'Olá, estou interessado em suas habilidades!'; // Defina a mensagem desejada
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
// Função para calcular e exibir as porcentagens de habilidades
function calcularPorcentagens() {
    const skills = {
        "HTML": 90,
        "CSS": 80,
        "JavaScript": 75,
        "React": 70,
        "Node.js": 65,
        "SQL": 60,
        "Python": 90,
        "Django": 40,
        "Flask": 30,
        "API Rest": 50,
        "Pandas": 70,
        "Selenium": 80
    };

    const updatePercentage = (skill) => {
        skills[skill] = Math.min(skills[skill] + Math.random() * 5, 100);
        const progressBar = document.getElementById(`${skill.toLowerCase()}-progress`);
        progressBar.value = skills[skill];

        // Atualize a pseudo-classe progress::after com o novo valor
        const pseudoElement = window.getComputedStyle(progressBar, 'progress::after');
        pseudoElement.content = `'${Math.round(skills[skill])}%'`;

        const label = progressBar.previousElementSibling;
        label.textContent = `${skill} ${Math.round(skills[skill])}%`;
    };

    for (const skill in skills) {
        updatePercentage(skill);
    }

    // Atualize as porcentagens periodicamente
    setInterval(() => {
        for (const skill in skills) {
            updatePercentage(skill);
        }
    }, 1000); // Atualize a cada segundo (1000 milissegundos)
}

// Chama a função quando a página estiver carregada
window.addEventListener("reload", calcularPorcentagens);


    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.querySelectorAll(".mySlides");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 10000); // Mude a imagem a cada 10 segundos (10000ms)
    }

window.onload = function() {
   calcularPorcentagens();
};

document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector(".skills");
    const contentDiv = skillsSection.querySelector(".contente");
    const expandButton = skillsSection.querySelector(".expand-button");

    expandButton.addEventListener("click", function() {
        if (contentDiv.style.display === "none" || contentDiv.style.display === "") {
            contentDiv.style.display = "block";
            expandButton.textContent = "▲";
        } else {
            contentDiv.style.display = "none";
            expandButton.textContent = "▼";
        }
    });
});


