window.addEventListener('load', function() {
    // Cuando la página termine de cargar, aseguramos que el scroll esté en la parte superior
    window.scrollTo(0, 0);
  });
  
window.onload = () => {
    document.body.style.overflow = 'hidden';

    const totalAnimationTime = 7 * 1000;

    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, totalAnimationTime);
  };
  