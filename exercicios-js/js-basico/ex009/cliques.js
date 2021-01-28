let res = document.getElementById('res')
let cont = 0
function contar(){
    cont += 1
    res.innerHTML = `O contador está com ${cont} cliques.`
}
function zerar(){
    cont = 0
    res.innerHTML = `O contador está com ${cont} cliques.`
}