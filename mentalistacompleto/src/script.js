var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 3;
var numeroErros = 0;
var resultado = document.getElementById("resultado");
var chute = parseInt(document.getElementById("valor").value);

function Chutar() {
  while (numeroErros != tentativa) {
    chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if (chute == numeroSecreto) {
      return (resultado.innerHTML = "Você acertou !!");
    } else if (chute > 10 || chute < 0) {
      return (resultado.innerHTML = "Tente digitar um número entre 0 a 10");
    } else if (chute > numeroSecreto) {
      resultado.innerHTML = "Tente digitar um número menor " + chute;
    } else if (chute < numeroSecreto) {
      resultado.innerHTML = "Tente digitar um número maior " + chute;
    }
    numeroErros++;
    break;
  }

  if (numeroErros == tentativa) {
    resultado.innerHTML =
      "Você excedeu o numeros de tentativas, o número correto era " +
      numeroSecreto;
    novojogo.innerHTML = "Vamos Jogar novamente? ";
  }
}

function reiniciarJogo() {
  numeroErros = 0;

  var reiniciarParas = document.getElementById("valor").value;
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = "";
  }

  valor.disabled = false;
  resultado.disabled = false;
  valor.value = "";
  valor.focus();
  resultado.innerHTML = "";
  novojogo.innerHTML = " ";

  numeroSecreto = parseInt(Math.random() * 11);
}

var reiniciarParas = document.getElementById("valor").value;
for (var i = 0; i < reiniciarParas.length; i++) {
  reiniciarParas[i].textContent = "";
}

