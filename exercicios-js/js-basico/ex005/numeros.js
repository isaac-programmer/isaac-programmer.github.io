window.alert('Seja bem-vindo(a) ao meu site!')
function calcular(){
    let num = window.prompt('Digite um número:')
    let res = document.getElementById('res')
    res.innerHTML = `O dobro de ${num} é ${num*2} e a metade é ${num/2}!`
}