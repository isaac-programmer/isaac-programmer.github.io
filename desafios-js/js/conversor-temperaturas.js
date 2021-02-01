function converterTemperatura(){
    var resultado = document.getElementById('res')
    var celsius = window.prompt('Digite uma temperatura em ºC (graus Celsius)')
    while(celsius.length == 0){
        window.alert('Por Favor! Informe uma temperatura em ºC (graus Celsius)')
        celsius = window.prompt('Digite uma temperatura em ºC (graus Celsius)')
    }
    var fahr = (Number(celsius)*(9/5))+32
    var kelvin = Number(celsius)+273.15
    resultado.innerHTML = `<h2>A temperatura de ${celsius}ºC, corresponde a:</h2>`
    resultado.innerHTML += `<p>${kelvin}ºK (Kelvin)</p>`
    resultado.innerHTML += `<p>${fahr}ºF (Fahrenheit)</p>`
}