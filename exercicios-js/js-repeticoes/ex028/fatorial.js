function calcularFatorial(){
    let res = document.getElementById("res")
    let num = document.getElementById("num").value
    if(num == ""){
        num = 1
    }
    if(num < 1){
        window.alert("O valor deve ser maior ou igual a 1!")
    }else{
        let soma = 1
        res.innerHTML += `<h2>Calculando ${num}!</h2>`
        for(let i = num; i > 1; i--){
            soma *= i
            res.innerHTML += `${i} x ` 
        }
        res.innerHTML += `1 = ${soma}`
    }
}
