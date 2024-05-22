function idade(){
    let dados = document.querySelector('#idade')
    let aniver = Number(dados.value)
    let res = document.querySelector('.resposta')
    let imagem = document.querySelector('.imagem')
    let img = document.createElement('img')
    let sexo = document.getElementsByName('sexo')
    let data = new Date()
    let ano = data.getFullYear()
    if (dados.value.length==0 || aniver<0 || aniver>ano){
        alert('[ERROR] Preencha os dados corretamente.')
        dados.value=''
        dados.focus()
    } else {
        let genero = ''
        if (sexo[0].checked){
            genero='Você é um homem'
            if (aniver<=2023 && aniver>=2013){
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src', 'imagens/homem-criança.png')
                imagem.appendChild(img)
            } else if (aniver>=1993){
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src', 'imagens/homem-jovem.png')
                imagem.appendChild(img)
            } else if (aniver>=1963){
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src', 'imagens/homem-adulto.png')
                imagem.appendChild(img)
            } else {
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src','imagens/homem-idoso.png')
                imagem.appendChild(img)
            }
        } else if (sexo[1].checked){
            genero='Você é uma mulher'
            if (aniver<=2023 && aniver>=2013){
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src', 'imagens/mulher-criança.png')
                imagem.appendChild(img)
            } else if (aniver>=1993){
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src', 'imagens/mulher-jovem.png')
                imagem.appendChild(img)
            } else if (aniver>=1963){
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src', 'imagens/mulher-adulto.png')
                imagem.appendChild(img)
            } else {
                res.innerHTML=`${genero} que tem ${cal(aniver)}.`
                img.setAttribute('src', 'imagens/mulher-idoso.png')
                imagem.appendChild(img)
            }
        }
    }
}

function cal(x){
    let data = new Date()
    let ano = data.getFullYear()
    if (x<=0){
        return 0
    } else {
        return ano - x
    }
}