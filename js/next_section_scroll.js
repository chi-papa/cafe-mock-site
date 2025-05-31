document.querySelector('.scroll-icon').addEventListener('click', function() {
    window.scrollBy({ 
      top: window.innerHeight, 
      left: 0, 
      behavior: 'smooth' 
    });
  });