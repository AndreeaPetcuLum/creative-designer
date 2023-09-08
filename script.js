

const scrollButton = document.getElementById('sageata');

scrollButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const sectionToScroll = document.getElementById('home'); // Schimbați cu ID-ul secțiunii dorite
    
    if (sectionToScroll) {
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    }
});


