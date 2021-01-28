function reajustarSalario(){
    var resultado = document.getElementById('res')
    var funcionario = window.prompt('Qual é o nome do(a) funcionário(a)?')
    while(funcionario.length == 0){
        window.alert('Por Favor! Informe o nome do(a) funcionário(a)!')
        funcionario = window.prompt('Qual é o nome do(a) funcionário(a)?')
    }
    var salario = window.prompt(`Qual é o salário do(a) ${funcionario}?`)
    while(salario.length == 0){
        window.alert(`Por Favor! Informe o salário do(a) ${funcionario}!`)
        salario = window.prompt(`Qual é o salário do(a) ${funcionario}?`)
    }
    var porcentagem = window.prompt(`O salário do(a) ${funcionario} vai ser reajustado em qual porcentagem?`)
    while(porcentagem.length == 0){
        window.alert(`Por Favor! Informe o valor da porcentagem de aumento do salário do(a) ${funcionario}!`)
        porcentagem = window.prompt(`O salário do(a) ${funcionario} vai ser reajustado em qual porcentagem?`)
    }
    var aumento = (Number(porcentagem)/100)*Number(salario)
    resultado.innerHTML = `<h2>${funcionario} recebeu um aumento salarial!</h2>`
    resultado.innerHTML += `<p>O salário atual era R$ ${(Number(salario)).toLocaleString('pt-br')}.</p>`
    resultado.innerHTML += `<p>Com o aumento de ${porcentagem}%, o  salário vai aumentar R$ ${(aumento).toLocaleString('pt-br')} no próximo mês.</p>`
    resultado.innerHTML += `<p>E a partir daí, ${funcionario} vai passar a ganhar R$ ${(Number(salario)+aumento).toLocaleString('pt-br')}.</p>`
}