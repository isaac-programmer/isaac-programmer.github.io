let numeroPensado
function pensarNumero(min, max){
    numeroPensado = Number.parseInt(Math.random() * (max - min) + min)
}
function adivinhar(){
    let botao = document.getElementById("botao")
    let res = document.getElementById("res")
    let palpite = window.prompt("Qual é o seu palpite?")
    if(palpite.length == 0){
        window.alert("Por favor! Digite o valor do seu palpite?")
    }else{
        if(Number(palpite) == numeroPensado){
            botao.parentElement.removeChild(botao)
            res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numeroPensado}!</p>`
        }else if(Number(palpite) > numeroPensado){
            res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR!</strong></p>`
        }else{
            res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR!</strong></p>`
        }
    }
}