let sex = document.getElementById('nome')
let nome = Text(sex.value)
let res = document.getElementById('resposta')
let vel = document.getElementById('velocidade')
let veloci = Number(vel.value)
document.getElementById('velocidade').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        res.innerHTML=`O senhor ${nome} levou multa pelo exesso de velocidade sendo ela de ${veloci}.`
    }
})