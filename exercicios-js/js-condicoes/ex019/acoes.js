function iniciar(){
    let res = document.getElementById("res")
    let valor01 = window.prompt("Primeiro valor:")
    if(valor01.length == 0){
        window.alert("Digite um valor!")
    }else{
        let valor02 = window.prompt("Segundo valor:")
        if(valor02.length == 0){
            window.alert("Digite um valor!")
        }else{
            let opcao = Number(window.prompt(`Valores informados: ${valor01} e ${valor02}.
            O que vamos fazer?
            [1]Somar
            [2]Subtrair
            [3]Multiplicar
            [4]Dividir`))
            switch(opcao){
                case 1:
                    res.innerHTML  = '<h2>Calculando...</h2>'
                    res.innerHTML += `${valor01} + ${valor02} = <strong>${Number(valor01) + Number(valor02)}</strong>`
                break;
                case 2:
                    res.innerHTML  = '<h2>Calculando...</h2>'
                    res.innerHTML += `${valor01} - ${valor02} = <strong>${Number(valor01) - Number(valor02)}</strong>`                    
                break;
                case 3:
                    res.innerHTML  = '<h2>Calculando...</h2>'
                    res.innerHTML += `${valor01} * ${valor02} = <strong>${Number(valor01) * Number(valor02)}</strong>`
                break;
                case 4:
                    res.innerHTML  = '<h2>Calculando...</h2>'
                    res.innerHTML += `${valor01} / ${valor02} = <strong>${Number(valor01) / Number(valor02)}</strong>`
                break;
                default:
                    res.innerHTML = '<h2>Calculando...</h2>'
                    res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${valor01} e ${valor02}, mas não sei o que fazer com eles.`
                break;
            }
        }
    }
}