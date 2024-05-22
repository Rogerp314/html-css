function cal(){
    let dado = document.querySelector('#dados')
    let dados = Number(dado.value)
    let result = document.querySelector('.result')
    if (dado.value.length==0){
        result.innerHTML='<p>[ERROR] Preencha os dados corretamente.</p>'
        result.style.color='red'
        dado.focus()
    } else if (dados<0){
        result.innerHTML='<p>[ERROR] Nao existe fatorial de numero negativo.</p>'
        dado.value=''
        dado.focus()
        result.style.color='red'
    } else {
        result.innerHTML=`<p>O Fatorial de ${dados} e igual a: <br> ${fatorial(dados)} </p>`
        result.style.color='black'
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