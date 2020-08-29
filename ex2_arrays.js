/*
1. Crie um array contendo 5 itens de tipos variados de dados (número, texto, objeto, boleano) 
*/

const itens = [7, 'Mari', true, {curso: 'back-end', data: '29/08/2020'}]
console.log(itens[1])

/*
Crie uma função chamada `adicionaItem`, que recebe um parâmetro e o adiciona ao array criado.
A função deverá retornar o array atualizado.
*/

function adicionaItem(item){
    itens.push(item)
    return itens
}

console.log(adicionaItem(false))
console.log(adicionaItem('Pinheiro'))

/*
Mostre no console o segundo elemento desse array, criado acima, com a
frase: "O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log(`O segundo elemento do array é ${itens[1]}.`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"Este array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`Este array tem ${itens.length} itens.`)

itens.unshift('Primeira posição') // Adiciona na primeira posição do array
console.log(itens)

itens.pop() // Remove o último item do array
console.log(itens)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');

let num = 10

while(num <= 20) {
    if(num % 2 === 0) {
        console.log(num)
    }
    num++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');

let num2 = 10

while(num2 <= 20) {
    if(num2 % 2 !== 0) {
        console.log(num2)
    }
    num2++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');
for(let num3 = 100; num3 <= 120; num3++){
    if(num3 % 2 === 0){
        console.log(num3)
    }
}

console.log('Números ímpares entre 111 e 125:');
for(let num4 = 111; num4 <= 125; num4++){
    if(num4 % 2 !== 0){
        console.log(num4)
    }
}