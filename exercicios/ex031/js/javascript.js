function clico(){
    let nome = document.querySelector('#nome')
    let sobre = document.querySelector('#sobrenome')
    let idade = document.querySelector('#idade')
    let vida = Number(idade.value)
    let res = document.querySelector('#resposta')

    if(vida <= 12){
        res.innerHTML = `Olá criança!`
    } else if(vida<=17){
        res.innerHTML= `Olá adolecente!`
    } else if(vida<=59){
        res.innerHTML=`Olá adulto!`
    } else if (vida<=100){
        res.innerHTML= `Olá idoso!`
    } else {
        res.innerHTML='Você está morto!!!'
        res.style.color='red'
    }
}