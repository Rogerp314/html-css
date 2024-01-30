let cal = []
function num(){
    let num = document.querySelector('#num1')
    let n = Number(num.value)
    let res = document.querySelector('#resposta')
    let lista = document.querySelector('#tabela')
    let item = document.createElement('option')
    if (num.value.length==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente.'
        res.style.color='red'
        num.focus()
    } else if(cal.indexOf(n)!=-1) {
       alert('[ERROR] O número digitado já está na lista. Adicione outro.')
       num.value=''
       num.focus() 
    } else{
        cal.push(n)
        item.textContent= n
        lista.appendChild(item)
        num.value=''
        num.focus()
    }
}
function resposta(){
    let num = document.querySelector('#num1')
    let n = Number(num.value)
    let res = document.querySelector('#resposta')
    res.innerHTML=`A soma entre ${cal[0]} e ${cal[1]} da <strong>${cal[0]+cal[1]}</strong>.`
}