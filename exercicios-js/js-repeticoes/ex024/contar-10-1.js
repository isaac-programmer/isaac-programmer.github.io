function contar(){
    let res = document.getElementById("res")
    res.innerHTML += "<h2>Contagem Regressiva de 10 a 1</h2>"
    for(let i = 10; i >= 1; i--){
        res.innerHTML += `${i}\u{27A1}`
    }
    res.innerHTML += `\u{1F3C1}`
}