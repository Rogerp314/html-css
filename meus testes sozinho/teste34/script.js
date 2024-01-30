function multa(){
    let res = document.querySelector('#resposta')
    let velocidade = document.querySelector('#velocidade')
    let vel = Number(velocidade.value)
    res.style.color='black'
    if(velocidade.value.length==0 || vel<0){
        res.innerHTML='[ERROR] Não existe velocidade negativa, ao não ser a relativa, PORRA!!!'
        res.style.color='red'
        velocidade.focus()
        velocidade.value=''
    } else if(vel==0){
        res.innerHTML='Você está parado, então por que está aqui vendo se vai levar multa seu estúpido!'
        velocidade.focus()
    } else{
        res.innerHTML=`Você está a <strong>${vel} km/h</strong> <br> ${limite(vel)}`
        velocidade.value=''
        velocidade.focus()
    }
}

function limite(x){
    if(x<100){
        return 'Você está nos limites, então pode passar de boas!'
    } else{
        return 'Você passou os limites da pista, por tanto deve pagar uma multa astronomica, seu vagabundo(a)!!!'
    }
}