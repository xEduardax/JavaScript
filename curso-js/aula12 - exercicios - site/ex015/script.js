function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`) //é como se tivesse usando a tag img ali no html
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança homem
                img.setAttribute(`src`, `fotomenino.png`)
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute(`src`, `fotojovemhomem.png`)
            }else if (idade < 65) {
                //Homem
                img.setAttribute(`src`, `fotohomem.png`)
            } else {
                //Senhor
                img.setAttribute(`src`, `fotosenhor.png`)
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10){
                //criança menina
                img.setAttribute(`src`, `fotomenina.png`)
            } else if (idade < 21) {
                //Jovem menina
                img.setAttribute(`src`, `fotojovemmulher.png`)
            }else if (idade < 65) {
                //Mulher
                img.setAttribute(`src`, `fotomulher.png`)
            } else {
                //Senhora
                img.setAttribute(`src`, `fotosenhora.png`)
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //vai adicionar um elemento que é o img
    }
}