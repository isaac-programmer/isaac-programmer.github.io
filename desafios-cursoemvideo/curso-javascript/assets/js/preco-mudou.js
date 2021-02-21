function verificar(){
    var resultado = document.getElementById('res')
    var precoAnterior = window.prompt('Qual era o preço anterior do produto?')
    while(precoAnterior.length == 0){
        window.alert('Por Favor! Informe o preço anterior do produto!')
        precoAnterior = window.prompt('Qual era o preço anterior do produto?')
    }
    var precoAtual = window.prompt('Qual é o preço atual do produto?')
    while(precoAtual.length == 0){
        window.alert('Por Favor! Informe o preço atual do produto!')
        precoAtual = window.prompt('Qual é o preço atual do produto?')
    }
    resultado.innerHTML = "<h2>Analisando os valores informados</h2>"
    resultado.innerHTML += `<p>O produto custava R$ ${(Number(precoAnterior).toFixed(2)).toLocaleString('pt-br')} e agora custa R$ ${(Number(precoAtual).toFixed(2)).toLocaleString('pt-br')}</p>`

    if(Number(precoAtual) > Number(precoAnterior)){
        var aumento = (Number(precoAtual) - Number(precoAnterior)).toFixed(2)
        var variacao = (aumento*100)/Number(precoAnterior)
        resultado.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        resultado.innerHTML += `<p>O produto subiu R$ ${(aumento).toLocaleString('pt-br')} em relação ao anterior.</p>`
        resultado.innerHTML += `<p>Uma variação de ${(variacao).toLocaleString('pt-br')}% para cima.</p>`
    }else if(Number(precoAtual) < Number(precoAnterior)){
        var reducao = (Number(precoAnterior) - Number(precoAtual)).toFixed(2)
        var variacao = (reducao*100)/Number(precoAnterior)
        resultado.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        resultado.innerHTML += `<p>O produto caiu R$ ${(reducao).toLocaleString('pt-br')} em relação ao anterior.</p>`
        resultado.innerHTML += `<p>Uma variação de ${(variacao).toLocaleString('pt-br')}% para baixo.</p>`
    }
}