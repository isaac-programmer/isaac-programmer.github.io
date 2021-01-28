function mostrarEstacao(){
    let res = document.getElementById("res")
    let mês = window.prompt("Digite o mês em extenso (Ex: Janeiro)")
    if(mês.length == 0){
        window.alert("Informe o mês por favor!")
    }else{
        if(mês == "Dezembro" || mês == "Janeiro" || mês == "Fevereiro"){
            res.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark>VERÃO</mark>.</p>`
        }else if(mês == "Março" || mês == "Abril" || mês == "Maio"){
            res.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark>OUTONO</mark>.</p>`
        }else if(mês == "Junho" || mês == "Julho" || mês == "Agosto"){
            res.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark>INVERNO</mark>.</p>`
        }else if(mês == "Setembro" || mês == "Outubro" || mês == "Novembro"){
            res.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark>PRIMAVERA</mark>.</p>`
        }else{
            res.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark>INDEFINIDA</mark>.</p>`
        }
    }
}