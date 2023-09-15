// Obțineți referința la elementul săgeată
const scrollButton = document.querySelector('.icbaseline-arrow-downward-icon');

scrollButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    // Obțineți referința la secțiunea "home"
    const sectionToScroll = document.querySelector('.home');

    // Verificați dacă secțiunea există
    if (sectionToScroll) {
        // Derulați către secțiune folosind scrollIntoView cu efect lin
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    }
});
// script.js

// Selectează toate elementele cu clasa "projects", "inspiration" și "contact"
const projectLinks = document.querySelectorAll('.projects, .inspiration, .contact');

// Adaugă un eveniment de clic pe fiecare element
projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Obține ID-ul secțiunii țintă din atributul "data-target"
        const targetId = link.getAttribute('data-target');
        
        // Găsește elementul cu ID-ul țintă
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Realizează scroll la secțiunea țintă folosind metoda `scrollIntoView()`
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


