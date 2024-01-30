let valor = []
function clique(){
    let da = document.querySelector('#num')
    let dados = Number(da.value)
    let lista = document.querySelector('#lista')
    let item = document.createElement('option')
    let res = document.querySelector('#resposta')
    res.style.color='black'
        if (da.value.length==0 || dados>100 || dados<1){
            res.innerHTML=`[ERROR] Preencha os dados corretamente!`
            res.style.color='red'
            da.value=''
            da.focus()
        } else if(valor.indexOf(dados)!=-1){
            res.innerHTML='[ERROR] Esse valor ja se encontra na lista. Digite outro.'
            res.style.color='red'
            da.value=''
            da.focus()
        } else{
            valor.push(dados)
            item.text=dados
            lista.appendChild(item)
            da.value=''
            da.focus()
            res.innerHTML='Resposta...'
        }
}
function re(){
    let res = document.querySelector('#resposta')
    let da = document.querySelector('#num')
    if (valor.length==0){
        res.innerHTML='[ERROR] A lista esta vazia. Digite algo na caixa.'
        res.style.color='red'
        da.focus()
        da.value=''
    } else {
        let soma = 0
        let media = 0
        for(let pos in valor){
            soma+= valor[pos]
            media = soma/valor.length
            res.innerHTML=`A quantidade de numeros na lista e de ${valor.length}.`
            res.innerHTML+=`<p>O primeiro numero da lista e ${valor[0]}.</p>`
            res.innerHTML+=`<p>O ultimo numero da lista e ${valor[pos]}.</p>`
            res.innerHTML+=`<p>A soma de todos os numeros na lista e de ${soma}</p>`
            res.innerHTML+=`<p>A media da lista e de ${media}</p>`
        }
    }
}