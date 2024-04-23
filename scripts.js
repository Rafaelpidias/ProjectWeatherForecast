let chave = "cebcd482eda57fa9a6714c1c2ba91885"



function colocarNaTela(dados){
document.querySelector(".city").innerHTML ="Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"


console.log(dados)


}




async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric"
  ).then((resposta) => resposta.json())

  

  // await => aguardar
  //fetch => acessar um servidor
  //JASON => JAVASCRIPT OBJECT NOTATION (FORMATO QUE JS ENTENDE)
  //METRIC => UNIDADE BRASIL
  //Math.floor FERRAMENTA JAVASCRIPT PARA ARREDONDAR VALORES
  colocarNaTela(dados)
}

function cliqueiNoBotao() {
  let cidade = document.querySelector(".input-city").value

  buscarCidade(cidade)
}

/*
Clica no botão
-> CHAMA FUNÇÃO CliqueiNoBotao()
-> Vai no INPUT e pega o que está lá dentro
-> PASSAR CIDADE PARA O SERVIDOR
*/
