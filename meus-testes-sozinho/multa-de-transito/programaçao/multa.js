let nome = document.querySelector('#nome')
let velocidade = document.querySelector('#velocidade')
let res = document.querySelector('#resposta')
let multas = {fraca: '130,16', media:'195,23', forte: '880,41'}

function chave(event){
    const pass = event.key
    if(pass=== 'Enter'){
        return resultado()
    }
}

function resultado(){
    res.style.color='black'
    if(velocidade.value==0 && nome.value==0){
        res.innerHTML='[ERROR] Preencha os campos obrigatórios corretamente.'
        res.style.color='red'
        nome.focus()
    } else if(velocidade.value==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente. Faltou preencher a <strong>velocidade</strong>'
        velocidade.focus()
        res.style.color='red'
    } else if(nome.value==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente. Faltou preencher o <strong>nome</strong>.'
        res.style.color='red'
        nome.focus()
    } else{
        let sex = document.getElementsByName('sexo')

        if(sex[0].checked){
            if(velocidade.value<=100){
                res.innerHTML=`O senhor <strong>${nome.value}</strong> não levou multa pois respeitou o limite de velocidade da pista.`
            } else if(velocidade.value<=120){
                res.innerHTML=`O senhor <strong>${nome.value}</strong> ultrapassou o limite de velocidade da pista. <br> O senhor estava a <strong>${velocidade.value}km/h</strong> levara uma multa de <strong>R$${multas.fraca}</strong>.`
            } else if(velocidade.value<=150){
                res.innerHTML=`O senhor <strong>${nome.value}</strong> ultrapassou o limite de velocidade da pista. <br> O senhor estava a <strong>${velocidade.value}km/h</strong> levara uma multa de <strong>R$${multas.media}</strong> e <strong>5 pontos na carteira</strong>.`
            } else{
                res.innerHTML=`O senhor <strong>${nome.value}</strong> ultrapassou o limite de velocidade da pista. <br> O senhor estava a <strong>${velocidade.value}km/h</strong> levara uma multa de <strong>R$${multas.forte}</strong> e <strong>o carro será aprendido</strong>.`
            }
        } else if(sex[1].checked){
            
            if(velocidade.value<=100){
                res.innerHTML=`A senhora <strong>${nome.value}</strong> não levou multa pois respeitou o limite de velocidade da pista.`
            } else if(velocidade.value<=120){
                res.innerHTML=`A senhora <strong>${nome.value}</strong> ultrapassou o limite de velocidade da pista. <br> A senhora estava a <strong>${velocidade.value}km/h</strong> levara uma multa de <strong>R$${multas.fraca}</strong>.`
            } else if(velocidade.value<=150){
                res.innerHTML=`A senhora <strong>${nome.value}</strong> ultrapassou o limite de velocidade da pista. <br> A senhora estava a <strong>${velocidade.value}km/h</strong> levara uma multa de <strong>R$${multas.media}</strong> e <strong>5 pontos na carteira</strong>.`
            } else{
                res.innerHTML=`A senhora <strong>${nome.value}</strong> ultrapassou o limite de velocidade da pista. <br> A senhora estava a <strong>${velocidade.value}km/h</strong> levara uma multa de <strong>R$${multas.forte}</strong> e <strong>o carro será aprendido</strong>.`
            }
        }
    }
}