function calcularIdade(){
    let res = document.getElementById("res")
    let anoNasc = window.prompt("Em que ano você nasceu?")
    if(anoNasc.length == 0){
        window.alert("Por favor! Digite um valor")
    }else{
        let ano = new Date()
        let anoAtual = ano.getFullYear()
        let idade = anoAtual - Number(anoNasc)
        res.innerHTML = `<p>Quem nasceu no ano ${anoNasc} vai completar <strong>${idade}</strong> anos em ${anoAtual}.</p>`
    }
}