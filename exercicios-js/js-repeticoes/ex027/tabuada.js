function mostrarTabuada(){
    let res = document.getElementById("res")
    let num = document.getElementById("num").value
    if(num == ""){
        num = 0
    }
    res.innerHTML = ""
    res.innerHTML = `<h2>Tabuada de ${num}</h2>`
    for(let i = 1; i <= 10; i++){
        res.innerHTML += `${num} x ${i} = ${num*i}<br>` 
    }
}