function contar(){
    let res = document.getElementById("res")
    let valFinal = document.getElementById("valorfinal").value
    if(valFinal < 0){
        window.alert("Digite apenas valores positivos!")
    }else{
        res.innerHTML += `<h2>Contando de 0 até ${valFinal}</h2>`
        for(let i = 0; i <= valFinal; i++){
            res.innerHTML += `${i}\u{27A1}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}