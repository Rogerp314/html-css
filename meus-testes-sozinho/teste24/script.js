function cal(){
    let dado = document.querySelector('#dados')
    let dados = Number(dado.value)
    let res = document.querySelector('.resposta')
    res.style.color='black'
    if (dado.value.length==0 || dado.value<0){
        res.innerHTML='[ERROR] Preencha os dados corretamente.'
        res.style.color='red'
        dado.value=''
        dado.focus()
    } else {
        res.innerHTML=`O fatorial do numero ${dados} e igual a :<br> ${fatorial(dados)}`
        dado.value=''
        dado.focus()
    }
}

function fatorial(x){
    if (x==0){
        return 1
    } else {
        return x*fatorial(x-1)
    }
}