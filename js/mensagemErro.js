const campoDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const listaResposta = {
    nome: event.target.elements["nome"].value,
    nascimento: event.target.elements["nascimento"].value,
    telefone: event.target.elements["telefone"].value,
    email: event.target.elements["email"].value,
  };
  localStorage.setItem("cadastro", JSON.stringify(listaResposta));
});

campoDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", (event) => event.preventDefault());
});

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const mensagens = {
  erros: "O campo não pode estar vazio!",
};

function verificaCampo(campo) {
  let mensagem = mensagens.erros;
  campo.setCustomValidity("");

  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) {
      if (mensagens[campo.name] && mensagens[campo.name][erro]) {
        mensagem = mensagens[campo.name][erro];
      }
    }
  });
  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
}
