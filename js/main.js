// Evento: clic en cada ícono del carrusel
document.querySelectorAll('.carousel-item').forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');
    window.location.href = target;
  });
});