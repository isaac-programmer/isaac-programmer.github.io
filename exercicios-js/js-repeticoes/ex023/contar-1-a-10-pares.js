function contar(){
    let res = document.getElementById("res")
    res.innerHTML += "<h2>Números pares de 1 até 10</h2>"
    for(let i = 1; i <= 10; i++){
        if(i % 2 == 0){
            res.innerHTML += `${i}\u{27A1}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}