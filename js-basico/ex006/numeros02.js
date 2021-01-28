function somar(){
    var num01 = Number(window.prompt('Digite um número:'))
    var num02 = Number(window.prompt('Digite outro número:'))
    var res = document.getElementsByClassName('res')[0]
    res.innerHTML = `A soma entre <mark>${num01}</mark> e <mark>${num02}</mark> é igual a <strong>${num01+num02}!</strong>`
}