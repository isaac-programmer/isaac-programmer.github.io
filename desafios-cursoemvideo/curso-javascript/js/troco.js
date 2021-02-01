function calcularTroco(){
    var produto = window.prompt('Que produto você está comprando?')
    while(produto.length == 0){
        window.alert('Por Favor! Informe o nome do produto!')
        produto = window.prompt('Que produto você está comprando?')
    }
    var custo = window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`)
    while(custo.length == 0){
        window.alert('Por Favor! Informe o custo do produto!')
        custo = window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`)
    }
    var pagamento = window.prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}?`)
    while(pagamento.length == 0){
        window.alert('Por Favor! Informe o valor que você deu para pagar o produto!')
        pagamento = window.prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}?`)
    }
    if(Number(custo) > Number(pagamento)){
        window.alert('Valor do pagamento insuficiente! Você não poderá comprar este produto!')
    }else{
        window.alert(`Você comprou um(a) ${produto} que custou R$ ${custo},00. Você deu R$ ${pagamento},00 em dinheiro e vai receber R$ ${Number(pagamento)-Number(custo)} de troco.`)
    }
}