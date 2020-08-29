/*
Declare uma variável chamada `hortifruti`, que receberá um array com 5 elementos.
Os elementos serão itens de hortifruti
*/

const hortifruti = ['Banana', 'Maçã', 'Laranja', 'Pêra', 'Melancia']

/*
Crie uma função chamada `mostrarItem` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "o [ITEM] está na posição [POSIÇAO]";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e item é o item
    que está nessa posição no array criado acima com os itens de hortifruti.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - Se não houver um item para a posição passada, deve retornar a mensagem:
    "Item não encontrado"
*/

console.log(hortifruti.indexOf('Banana'))

function mostrarItem(posicao){
    if(hortifruti[posicao] === undefined){
        return "Fruta não encontrada!"
    }
    return `A ${hortifruti[posicao]} está na posição ${posicao}.`
}


/*
Escolha 2 itens de hortifruti e mostre a posição dele, usando a
função acima. Entre esses 2, adicione 1 que um item novo
*/

console.log(mostrarItem(1))
console.log(mostrarItem(4))

hortifruti.push('Uva')

console.log(hortifruti)
console.log(mostrarItem(hortifruti.length - 1))

/* Adicione três itens na lista hortifruti */

function adicionaItem(item){
    hortifruti.push(item)
    return hortifruti
}

console.log(adicionaItem('Rúcula'))
console.log(adicionaItem('Cebola'))
console.log(adicionaItem('Abóbora'))

/* Remova o item na posição 3 */

hortifruti.pop(hortifruti.length - 1) // Remove o último item do array
console.log(hortifruti)

/*
Crie um array chamado 'aluno1' que receberá 4 itens que serão suas notas no semestre (crie valores aleatórios)
*/

const aluno1 = [5, 10, 8, 7]

/*
Mostre no console essas notas organizadas por ordem crescente
*/

function ordem(a, b) {
    return a - b;
}

console.log(aluno1.sort(ordem))