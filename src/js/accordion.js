// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');

      // se cierran otros parrafos
      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('is-active');
          i.querySelector('.accordion-panel').style.display = 'none';
        }
      });

      // Abre o cierra el panel clicado
      const panel = item.querySelector('.accordion-panel');
      const isActive = item.classList.toggle('is-active');
      panel.style.display = isActive ? 'block' : 'none';
    });
  });
});
