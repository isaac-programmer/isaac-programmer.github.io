function calcularIdade(){
    var nome = window.prompt('Qual é o seu nome?')
    while(nome.length == 0){
        window.alert('Por favor! Informe o seu nome!')
        nome = window.prompt('Qual é o seu nome?')
    }
    var anos = window.prompt(`Olá, ${nome}! Quantos anos você tem?`)
    while(anos.length == 0){
        window.alert('Por favor! Informe a sua idade!')
        anos = window.prompt(`Olá, ${nome}! Quantos anos você tem?`)
    }
    window.alert(`Acabei de conhecer ${nome}, que tem ${anos} anos de idade!`)          
}
