async function BuscaCep() {
  let cep = document.getElementById("cep");
  let logradouro = document.getElementById("logradouro");
  let complemento = document.getElementById("complemento");
  let bairro = document.getElementById("bairro");
  let estado = document.getElementById("estado");

  let URL = `https://viacep.com.br/ws/${cep.value}/json/`;

  let resp = await fetch(URL)
    .then((response) => {
      //Transformar JSON em OBJ
      return response.json();
    })
    .then((response) => {
      cep.value = response.cep;
      logradouro.value = response.logradouro;
      complemento.value = response.complemento;
      bairro.value = response.bairro;
      estado.value = response.estado;
    });

  //    let exemplo = resp.json();
  //    console.log(exemplo)
}

BuscaCep();
