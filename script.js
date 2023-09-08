function scrollToClass(className) {
    event.preventDefault();
    const element = document.querySelector('.' + className);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

const sageata = document.getElementById('sageata');


const scrollButton = document.getElementById('sageata');


scrollButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    const sectionToScroll = document.querySelector('.home'); 

    
    if (sectionToScroll) {
       
        sectionToScroll.scrollIntoView({ behavior: 'smooth' }); 
    }
});


