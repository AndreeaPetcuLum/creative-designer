function scrollToClass(className) {
    event.preventDefault();
    const element = document.querySelector('.' + className);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

const sageata = document.getElementById('sageata');

sageata.addEventListener('click', function(event) {
  event.preventDefault();
  const section = sageata.closest('section'); // găsește secțiunea părinte în care se află săgeata
  section.scrollIntoView({ behavior: 'smooth' });
});

