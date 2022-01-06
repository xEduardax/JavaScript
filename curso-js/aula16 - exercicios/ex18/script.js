var num = document.getElementById(`fnum`)
var lista = document.getElementById(`flista`)
var res = document.getElementById(`res`)
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))  //adicionou no vetor
       var item = document.createElement(`option`) //criou um elemento/tag
       item.text = `Valor ${num.value} adicionado` //esse elemento vai escrever no select
       lista.appendChild(item) //vai adicionar o item na lista
       res.innerHTML = ``
    }else {
        window.alert(`Valor inválido ou já encontrado na lista`)
    }

    num.value = `` //apaga o conteudo lá para digitar um novo número
    num.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert(`Adiocione valores antes de finalizar`)
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
