let dados = document.querySelector('#central')
function texto(){
    dados.innerHTML='Talvez...'
    dados.backgroundColor='pink'
    dados.color='red'
}
function sair(){
    dados.innerHTML='SIM'
    dados.backgroundColor='gray'
    dados.color='white'
}
function clique(){
    dados.innerHTML='Não'
    dados.style.backgroundColor='black'
    dados.style.color='red'
}
function cu(){
    dados.innerHTML='cu'
    dados.style.backgroundColor='gray'
    
}