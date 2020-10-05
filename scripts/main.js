let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/isaac-daniel-bezerra.jpg'){
        minhaImagem.setAttribute('src','images/isaac-02.jpg')
    }else{
        minhaImagem.setAttribute('src','images/isaac-daniel-bezerra.jpg')
    }
}

let meuBotao = document.querySelector('button')
let meuCabecalho = document.querySelector('h2')

function defineNomeUsuario(){
    let meuNome = prompt('Por Favor, digite o seu nome')
    if(!meuNome || meuNome === null){
        defineNomeUsuario();
    }else{
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
    }
}

if(!localStorage.getItem('nome')){
    defineNomeUsuario();
}else{
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function(){
    defineNomeUsuario();
}