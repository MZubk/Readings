const enviarBotao = document.getElementById("enviar");
const formularioEnviado = document.getElementById("formulario-enviado");

enviarBotao.addEventListener("click", () => {
  formularioEnviado.style.display = "block";
  document.querySelector("form").reset();
  setTimeout(() => {
    formularioEnviado.style.display = "none";
  }, 5000);
});
