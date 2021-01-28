
function calcular(){
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota01 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota02 = Number(window.prompt(`Além de ${nota01}, qual foi a outra nota de ${nome}?`))
    let res = document.getElementById('res')  

    res.innerHTML = `<p>Calculando a média final de ${nome}.</p> 
    <p>As notas obtidas foram ${nota01} e ${nota02}.</p> 
    <p>A média final será ${(nota01+nota02)/2}.</p>`

    if(((nota01+nota02)/2) >= 6.0){
        res.innerHTML += '<p>A mensagem que temos é: <span>Meus parabéns!</span></p>'
    }else{
        res.innerHTML += '<p>A mensagem que temos é: <span>Estude um pouco mais!</span></p>'
    }
}