function calcularMaiorValor(){
    let res = document.getElementById("res")
    let num01 = window.prompt("Digite um número:")
    if(num01.length == 0){
        window.alert("Por favor, digite algum valor!")
    }else{
        let num02 = window.prompt("Digite um outro valor:")
        if(num02.length == 0){
            window.alert("Por favor, digite algum valor!")
        }else{
            if(Number(num01)>Number(num02)){
                res.innerHTML = `<p>Analisando os valores <mark>${num01}</mark> e <mark>${num02}</mark>, o maior valor é ${num01}</p>`
            }else if(Number(num02)>Number(num01)){
                res.innerHTML = `<p>Analisando os valores <mark>${num01}</mark> e <mark>${num02}</mark>, o maior valor é ${num02}</p>`
            }else{
                res.innerHTML = `<p>Analisando os valores <mark>${num01}</mark> e <mark>${num02}</mark>, ambos são <strong>IGUAIS</strong></p>`
            }
        }
    }
}