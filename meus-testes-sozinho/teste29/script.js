function cu(){
    let dado = document.querySelector('#dados')
    let dados = Number(dado.value)
    let res = document.querySelector('#res')
    if (dado.value.length==0){
        dado.style.borderColor='red'
        res.innerHTML='[ERROR]'
        res.style.color='red'
    }
}