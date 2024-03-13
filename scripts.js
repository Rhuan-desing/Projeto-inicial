var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

function alertar(event){
    alert("Você clicou no botão!!! " + event);


   var numero = 7;
   var resultado = numero % 2;
   if(resultado == 0){
      alert("este número é par!");
      }
}


                                                                                      