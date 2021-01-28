function verificar(){
    var resultado = document.getElementById('res')
    var ano = window.prompt('Qual é o ano que você quer verificar?')
    while(ano.length == 0){
        window.alert('Por Favor! Informe o ano quen você quer verificar!')
        ano = window.prompt('Qual é o ano que você quer verificar?')
    }
    resultado.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    if(Number(ano) % 4 == 0 && Number(ano) % 100 != 0){
        resultado.innerHTML += `<p>O ano de ${ano} <strong>É BISSEXTO</strong> \u{2714}</p>`
    }else{
        resultado.innerHTML += `<p>O ano de ${ano} <mark style="background: #FF0DAF;"><strong>NÃO É BISSEXTO</strong></mark> \u{2716}</p>`
    }
}