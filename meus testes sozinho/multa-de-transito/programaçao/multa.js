let nome = document.querySelector('#nome')
let velocidade = document.querySelector('#velocidade')
let sex = document.getElementsByName('sexo')
let res = document.querySelector('#resposta')
let multas = {fraca: '130,16', media:'195,23', forte: '880,41'}

function chave(event){
    const pass = event.key
    if(pass=== 'Enter'){
        return resultado()
    }
}

function resultado(){
    if(nome.value.lenght==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente para assim fazer a simulação.'
        res.style.color='red'
        nome.focus()
        velocidade.value=''
    } else{
    if(sex[0].checked){
    if(velocidade.value<=100){
        res.innerHTML=`O senhor <strong>${nome.value}</strong> está dentro do limite de velocidade então não precisará pagar multa.`
    } else if(velocidade.value<=120){
        res.innerHTML=`O senhor <strong>${nome.value}</strong> por desobedecer a lei tera de pagar <strong>R$${multas.fraca}</strong> por ter passado do limite da pista. <br> Passou há <strong>${velocidade.value}km/h</strong>.`
    } else if(velocidade.value<=150){
        res.innerHTML=`O senhor <strong>${nome.value}</strong> por desobedecer a lei terá de pagar <strong>R$${multas.media}</strong> por ter passado do limite da pista. <br> Passou há <strong>${velocidade.value}km/h</strong>.`
    } else{
        res.innerHTML=`O senhor <strong>${nome.value}</strong> por desobedecer a lei terá de pagar <strong>R$${multas.forte}</strong> por ter passado do limite da pista. <br> Passou há <strong>${velocidade.value}km/h</strong>.`
    }
}   else if(sex[1].checked){
    if(velocidade.value<=100){
        res.innerHTML=`A senhora <strong>${nome.value}</strong> está dentro do limite de velocidade então não precisará pagar multa.`
    } else if(velocidade.value<=120){
        res.innerHTML=`A senhora <strong>${nome.value}</strong> por desobedecer a lei tera de pagar <strong>R$${multas.fraca}</strong> por ter passado do limite da pista. <br> Passou há <strong>${velocidade.value}km/h</strong>.`
    } else if(velocidade.value<=150){
        res.innerHTML=`A senhora <strong>${nome.value}</strong> por desobedecer a lei terá de pagar <strong>R$${multas.media}</strong> por ter passado do limite da pista. <br> Passou há <strong>${velocidade.value}km/h</strong>.`
    } else{
        res.innerHTML=`A senhora <strong>${nome.value}</strong> por desobedecer a lei terá de pagar <strong>R$${multas.forte}</strong> por ter passado do limite da pista. <br> Passou há <strong>${velocidade.value}km/h</strong>.`
    }
}}}