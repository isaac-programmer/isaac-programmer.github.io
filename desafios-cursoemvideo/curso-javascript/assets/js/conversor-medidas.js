let resultado = document.querySelector('#res')
let botao = document.querySelector('.botao')
botao.addEventListener('click', function(){
    var distancia = window.prompt('Digite uma distância em metros (m)')
    while(distancia.length == 0){
        window.alert('Por Favor! Informe um valor para a distância em metros!')
        distancia = window.prompt('Digite uma distância em metros(m)')
    }
    resultado.innerHTML = `<h2>A distância de ${distancia} metros, corresponde a:</h2>`
    resultado.innerHTML += `<p>${Number(distancia)/1000} quilometros (Km)</p>`    
    resultado.innerHTML += `<p>${Number(distancia)/100} hectômetros (Hm)</p>`    
    resultado.innerHTML += `<p>${Number(distancia)/10} decâmetros (Dam)</p>`    
    resultado.innerHTML += `<p>${Number(distancia)*10} decímetros (dm)</p>`
    resultado.innerHTML += `<p>${Number(distancia)*100} centímetros (cm)</p>`
    resultado.innerHTML += `<p>${Number(distancia)*1000} milímetros (mm)</p>`
})