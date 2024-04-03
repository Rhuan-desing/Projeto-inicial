var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
 
var email = document.getElementById("email");
 
var saida = document.getElementById("saida-de-dados");
 
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
 
function alertar(event){
    //  alert("Você clicou no botão!!! " + " " +nome.value);
    //  var numero = 7
    //  var resultado = numero % 2;
    //  if(resultado == 0){
    //      alert("este número é par!");
    //  }
     
    const url = `https://viacep.com.br/ws/${cep.value}/json`;
 
    fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    .then(
        function(dadosDoEndereco){
            logradouro.value = dadosDoEndereco.logradouro;
            bairro.value = dadosDoEndereco.bairro;
            cidade.value = dadosDoEndereco.localidade;
            estado.value = dadosDoEndereco.uf;
            complemento.value = dadosDoEndereco.complemento;
        }
    )
    .catch(
        function(e){
        alert(e.message());
    });
       
    saida.innerText = "Nome: " + nome.value +
          "\n Email: " + email.value +
          "\n Telefone: " + telefone.value +
          "\n CEP: " + cep.value +
          "\n Logradouro: " + logradouro.value +
          "\n Número: " + numero.value +
          "\n Complemento: " + complemento.value +
          "\n Bairro: " + bairro.value +
          "\n Cidade: " + cidade.value +
          "\n Estado: " + estado.value;
}


                                                                                      