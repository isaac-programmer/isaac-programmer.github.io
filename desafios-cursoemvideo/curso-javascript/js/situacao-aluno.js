function verificarSituacao(){
    var resultado = document.querySelector('#res')
    var aluno = window.prompt("Qual é o nome do aluno?")
    while(aluno.length == 0){
        window.alert("Por Favor! Informe o nome do aluno!")
        aluno = window.prompt("Qual é o nome do aluno?")
    }
    var nota01 = window.prompt(`Primeira nota de ${aluno}:`)
    while(nota01.length == 0){
        window.alert(`Por Favor! Informe a primeira nota de ${aluno}!`)
        nota01 = window.prompt(`Primeira nota de ${aluno}:`)
    }
    var nota02 = window.prompt(`Segunda nota de ${aluno}:`)
    while(nota02.length == 0){
        window.alert(`Por Favor! Informe a segunda nota de ${aluno}!`)
        nota02 = window.prompt(`Segunda nota de ${aluno}:`)
    }
    var media = ((Number(nota01)+Number(nota02))/2).toFixed(2)
    resultado.innerHTML = `<h2>Analisando a situação de ${aluno}</h2>`
    resultado.innerHTML += `<p>Com as notas ${(Number(nota01)).toLocaleString('pt-br')} e ${(Number(nota02)).toLocaleString('pt-br')}, a <strong>média é ${(media).toLocaleString('pt-br')}</strong></p>`
    if(media > 6){
        resultado.innerHTML += `<p>Com a média acima de 6,0, o aluno está <strong>APROVADO.</strong></p>`
    }else if(media >= 3 && media <= 6){
        resultado.innerHTML += `<p>Com a média entre 3,0 e 6,0, o aluno está de <strong style="background: #FFAA0D;">RECUPERAÇÃO.</strong></p>`
    }else{
        resultado.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está <strong style="background: #FF0DAF;">REPROVADO.</strong></p>`
    }
}