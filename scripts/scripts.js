const boton = document.querySelector(".modo");

boton.addEventListener('click', () => {
  document.body.classList.toggle("modo-oscuro");
  document.querySelector(".modo").classList.toggle("modo-oscuro");
  document.querySelector(".logo").classList.toggle("modo-oscuro");
  document.querySelector(".casa").classList.toggle("modo-oscuro");
  document.querySelector(".user-text").classList.toggle("modo-oscuro");
  document.querySelector("textarea").classList.toggle("modo-oscuro");
  document.querySelector("p").classList.toggle("modo-oscuro");
  document.querySelector(".btn-encr").classList.toggle("modo-oscuro");
  document.querySelector(".btn-desencr").classList.toggle("modo-oscuro");
  document.querySelector(".section-2").classList.toggle("modo-oscuro");
  document.querySelector(".btn-copiar").classList.toggle("modo-oscuro");
  document.querySelector(".mensaje-enc").classList.toggle("modo-oscuro");
  document.querySelector(".linkedin").classList.toggle("modo-oscuro");
  document.querySelector(".github").classList.toggle("modo-oscuro");
  document.querySelector(".instagram").classList.toggle("modo-oscuro");
});