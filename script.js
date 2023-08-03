function scrollToClass(className) {
    event.preventDefault();
    const element = document.querySelector('.' + className);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
