function calcularDesconto(){
    var resultado = document.getElementById('res')
    var produto = window.prompt('Qual é o produto que você está comprando?')
    while(produto.length == 0){
        window.alert('Por favor! Informe o nome do produto que você está comprando!')
        produto = window.prompt('Qual é o produto que você está comprando?')
    }
    var preco = window.prompt(`Qual é o preço do(a) ${produto}?`)
    while(preco.length == 0){
        window.alert(`Por favor! Informe o preço do(a) ${produto}!`)
        preco = window.prompt(`Qual é o preço do(a) ${produto}?`)
    }
    var desconto = Number(preco)*0.10
    resultado.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    resultado.innerHTML += `<p>O preço original era R$ ${preco}.</p>`
    resultado.innerHTML += `<p>Você acaba de ganhar R$ ${desconto.toFixed(2)} de desconto (-10%).</p>`
    resultado.innerHTML += `<p>No fim, você vai pagar R$ ${(Number(preco)-desconto).toFixed(2)} no produto ${produto}.</p>`
}