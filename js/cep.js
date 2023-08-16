async function buscaEndereco(cep) {
  const mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existente!");
    }

    const logradouro = document.getElementById("endereco");
    const complemento = document.getElementById("complemento");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    logradouro.value = consultaCEPConvertida.logradouro;
    complemento.value = consultaCEPConvertida.complemento;
    bairro.value = consultaCEPConvertida.bairro;
    cidade.value = consultaCEPConvertida.localidade;
    estado.value = consultaCEPConvertida.uf;

    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido!</p>`;
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
