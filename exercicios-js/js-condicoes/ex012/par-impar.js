function calcularParImpar(){
    let res = document.getElementById("res")
    let numero = window.prompt("Digite um numero:")
    if(numero.length == 0){
        window.alert("Por favor! Digite um valor!")
    }else{
        if(Number(numero) % 2 == 0){
            res.innerHTML = `<p>O número ${numero} que foi digitado é <strong>PAR!</strong></p>`
        }else{
            res.innerHTML = `<p>O número ${numero} que foi digitado é <strong>ÍMPAR!</strong></p>`
        }
    }
}