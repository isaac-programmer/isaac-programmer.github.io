function calcularAntecessorSucessor(){
    var num = window.prompt('Digite um número inteiro qualquer')
    while(num.length == 0){
        window.alert('Por Favor! Informe um valor inteiro qualquer!')
        num = window.prompt('Digite um número inteiro qualquer')
    }
    window.alert(`Antes de ${num}, temos o número ${Number(num)-1}. Depois de ${num}, temos o número ${Number(num)+1}.`)
}
