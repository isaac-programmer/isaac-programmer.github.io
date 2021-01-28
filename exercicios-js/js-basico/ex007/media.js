function calcular(){ 
    let nome = window.prompt('Qual é o nome do aluno?')
    let titulo = document.getElementById('titulo')
    titulo.innerHTML = `Média do aluno <mark>${nome}</mark>`
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    let res = document.getElementById('res')

    res.innerHTML = `Calculando a média final de <mark>${nome}</mark>
    <br> As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.
    <br> A média final será <mark>${(nota1+nota2)/2}</mark>.`
}