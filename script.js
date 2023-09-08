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


