function contar(){
    let res = document.getElementById('res')
    let cont = 1
    res.innerHTML += "<h2>Contando de 1 até 10, marcando os pares</h2>"
    while(cont <= 10){
        if(cont % 2 == 0){
            res.innerHTML += `<mark>${cont}</mark>\u{27A1}`
        }else{
            res.innerHTML += `${cont}\u{27A1}`
        }
        cont = cont + 1
    }
    res.innerHTML += `\u{1F3C1}`
}