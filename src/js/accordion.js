document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');

      // закрываем другие пункты
      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('is-active');
          i.querySelector('.accordion-panel').style.display = 'none';
        }
      });

      // переключаем текущий
      const panel = item.querySelector('.accordion-panel');
      const isActive = item.classList.toggle('is-active');
      panel.style.display = isActive ? 'block' : 'none';
    });
  });
});
