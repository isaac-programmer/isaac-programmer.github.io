function calcular(){
    var resultado = document.getElementById('res')
    var a = window.prompt('Qual é o valor de a?')
    while(a.length == 0){
        window.alert('Por Favor! Informe o valor de a!')
        a = window.prompt('Qual é o valor de a?')
    }
    var b = window.prompt('Qual é o valor de b?')
    while(b.length == 0){
        window.alert('Por Favor! Informe o valor de b!')
        b = window.prompt('Qual é o valor de b?')
    }
    var c = window.prompt('Qual é o valor de c?')
    while(c.length == 0){
        window.alert('Por Favor! Informe o valor de c!')
        c = window.prompt('Qual é o valor de c?')
    }
    var delta = (Number(b)**2) - (4*Number(a)*Number(c))
    resultado.innerHTML = `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</p>`
    resultado.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4.${a}.${c}</p>`
    resultado.innerHTML += `<p>O valor calculado foi <mark style="background: #FFAA0D;"><strong>&Delta; = ${delta}</strong></mark></p>`
}