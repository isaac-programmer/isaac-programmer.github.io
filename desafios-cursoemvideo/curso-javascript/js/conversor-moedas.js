var cotacao = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function converterMoeda(){
    var resultado = document.getElementById('res')
    var saldoAtual = window.prompt('Quantos R$ você tem na carteira?')
    resultado.innerHTML = `<p>Com R$${saldoAtual} você poderá comprar US$${(saldoAtual/cotacao).toFixed(2) }</p>`
}