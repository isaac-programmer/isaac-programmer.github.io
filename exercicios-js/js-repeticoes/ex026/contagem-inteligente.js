function contar(){
    let res = document.getElementById("res")
    let valInicial = document.getElementById("valorinicial").value
    if(valInicial == ""){
        valInicial = 0
    }
    let valFinal = document.getElementById("valorfinal").value
    if(valFinal == ""){
        valFinal = 0
    }
    if(valInicial < valFinal){
        res.innerHTML += `<h2>Contando de ${valInicial} até ${valFinal}</h2>`
        for(let i = valInicial; i <= valFinal; i++){
            res.innerHTML += `${i}\u{27A1}`
        }
        res.innerHTML += `\u{1F3C1}`
    }else if(valInicial > valFinal){
        res.innerHTML += `<h2>Contando de ${valInicial} até ${valFinal}</h2>`
        for(let i = valInicial; i >= valFinal; i--){
            res.innerHTML += `${i}\u{27A1}`
        }
        res.innerHTML += `\u{1F3C1}`
    }else{
        res.innerHTML += `<h2>Contando de ${valInicial} até ${valFinal}</h2>`
        res.innerHTML += `<p>Não é possível contar, pois os números são iguais \u{1F3C1}</p>`
    }
}