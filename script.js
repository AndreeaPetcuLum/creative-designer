function scrollToClass(className) {
    event.preventDefault();
    const element = document.querySelector('.' + className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollButton = document.getElementById('sageata');

scrollButton.addEventListener('click', (event) => {
    scrollToClass('home'); // Derulați la secțiunea cu clasa 'home'
});

