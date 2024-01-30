let caixa = document.querySelector('#caixa')
function clique(){
    caixa.textContent='Clicou!'
    caixa.style.background='#ff2100'
}
function mover(){
    caixa.textContent='Movendo!'
    caixa.style.background='orange'
}
function saiu(){
    caixa.textContent='Saiu!'
    caixa.style.background='green'
}
function imagem(){
    let imagem = document.createElement('img')
    imagem.setAttribute('src', 'imagens/bomba.png')
    caixa.textContent='BOMBA!'
    caixa.style.color='white'
    caixa.style.background='black'
    caixa.appendChild(imagem)
}