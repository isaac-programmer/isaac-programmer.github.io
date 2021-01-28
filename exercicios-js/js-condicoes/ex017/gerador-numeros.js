let res = document.getElementById("res")
function gerarNumero(min, max){
    let aleatorio = Number.parseInt(Math.random() * (max - min) + min)  
    res.innerHTML += `<p>Acabei de pensar no número <mark>${aleatorio}</mark></p>`
}

function limpar(){
    res.innerHTML = ""
}