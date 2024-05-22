function confirm() {
    let res = document.querySelector('#resposta')
    let dados = document.querySelector('#fatias')
    let fatias = Number(dados.value)
    res.style.color='black'
    if (dados.value.length==0 || fatias<=0){
        res.innerHTML='[ERROR] Preencha os dados corretamente.'
        res.style.color='red'
        dados.value=''
        dados.focus()
    } else {
        res.innerHTML=`Temos no total <strong> ${fatias} </strong> fatias de pizza!`
        dados.focus()
    }
}
function food(){
    let res = document.querySelector('#resposta')
    let dados = document.querySelector('#fatias')
    let fatias = Number(dados.value)
    for (let fa = fatias-1; fa>=0; fa--){
        alert(`Agora temos ${fa} fatias de pizza.`)
        if (fa==0){
            res.innerHTML='Acabou as fatias de pizza por sua conta, compre mais se quiser comer mais, FOLGADO(A)!!!'
            res.style.color='red'
            dados.value=''
            dados.focus()
        }
    }
}