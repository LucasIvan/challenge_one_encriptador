const boton = document.querySelector('.modo');

boton.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});