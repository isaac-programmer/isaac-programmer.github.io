function comecar(){
    var nome = window.prompt('Qual é o seu nome?')
    var res = document.getElementById('res')
    res.innerHTML = `Olá, <strong>${nome}!</strong> É um grande prazer te conhecer!`
}