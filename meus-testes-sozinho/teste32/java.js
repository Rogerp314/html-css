function penes(){
    let name = document.querySelector('#nome')
    let ida = document.querySelector('#idade')
    let idade = Number(ida.value)
    let res = document.querySelector('#resposta')
    res.style.color='black'
    if (nome.value.length==0 || ida.value.length==0){
        res.innerHTML=`[ERROR] Digite corretamente`
        res.style.color='red'
    } else{
        if(idade>=18){
            res.innerHTML=`Aproveite nosso site ${name.value}!`
        } else{
            res.innerHTML=`NAO!!!!!!!!!!!!!!!!!!!!!!!!`
        }
        name.value=''
        ida.value=''
        name.focus()
    }
}