var num = [5, 8, 2, 3]
num[4] = 10   //para adicionar um novo elemento em um vetor, numero do indice e elemento que quer adicionar
num.push(11)  //para adicionar um novo elemento em um vetor na ultima posição, numero do indice e elemento que quer adicionar

console.log(num)

num.length //tamanho do vetor
//num.sort()  //vai colocar o vetor em numero crescente
console.log(`O vetor tem ${num.length} posições`)

console.log("-------------------------")

for (var pos = 0; pos < num.length; pos++){ //escreve o vetor bonitinho na tela com os numeros um embaixo do outro
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log("-*-*-*-*-*-*-*-*-*-*-*-*-* ")

//forma simplificada
for (var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log("-*-*-*-*-*-*-*-*-*-*-*-*-* ")

//buscar valores em um vetor
var pos = num.indexOf(8)
console.log(`O valor está na posição ${pos}`)

