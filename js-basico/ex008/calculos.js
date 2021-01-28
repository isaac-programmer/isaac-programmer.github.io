function calcular(){
    let numero = Number(window.prompt('Digite um número:'))
    let res = document.getElementById('res')
    let abs = Math.abs(numero)
    let inteiro = Math.trunc(numero)
    let intProx = Math.round(numero)

    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${numero}</strong></p>
    <hr>
    <p>O seu valor absoluto é ${abs}</p>
    <p>A sua parte inteira é ${inteiro}</p>
    <p>O valor inteiro mais próximo é ${intProx}</p>
    <p>A sua raiz quadrada é ${numero**(1/2)}</p>
    <p>A sua raiz cúbica é ${numero**(1/3)}</p>
    <p>O valor de ${numero}<sup>2</sup> é ${numero**2}</p>
    <p>O valor de ${numero}<sup>3</sup> é ${numero**3}</p>`
}