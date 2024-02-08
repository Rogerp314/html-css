function fat(){
    let num = document.querySelector('#dados')
    let n = Number(num.value)
    let res = document.querySelector('#resposta')
    res.style.color='black'
    if(num.value.length==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente!'
        res.style.color='red'
        num.focus()
    } else{
        res.innerHTML=`${fa(n)}`
        num.value=''
        num.focus()
    }
}

function fa(x){
    if(x==0){
        return 1
    } else if(x<0){
        return 'Essa conta não <span style="text-decoration: underline; font-weight: bold;" >existe!</span>'
    } else{
        return x * fa(x-1)
    }
}

function cal(){
    let numero = document.querySelector('#numero')
    let n = Number(numero.value)
    let res = document.querySelector('#resultado')
    res.style.color='black'
    if(numero.value.length==0){
        res.innerHTML='[ERROR]'
        res.style.color='green'
    } else{
        for(x==n; x<100; x++){
            
        }
    }
}