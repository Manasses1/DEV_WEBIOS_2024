// Array
let frutas = ["Banana", "Abacate", "Uva", "Melancia", "Abacaxi", "Tomate", "Morango", "Acerola"] // coloque o nome de 8 frutas






let infoAlunos = [
    {"Ana": 25},
    {"João": 35},
    {"Pedro": 50}
]



//forEach ele faz a função do for
infoAlunos.forEach((valor, indice) => {
    if (indice == 1){
        console.log(valor)
    }
})





// frutas.forEach(Percorrer)


// // Primeiro parametro conteudo, segundo indice. REGRA!!!
// function Percorrer(valor, indice) {
//     console.log(frutas[valor]); // retorna valor(conteudo) da posição
//     console.log(indice); // Retorna numero da posição
// }

// // for(i = 0; i <= frutas.length ; i++){
// //     console.log(frutas[i]); // retorna valor(conteudo) da posição
// //     console.log(i); // Retorna numero da posição
// // }

console.clear()


// Math.currently ou Math.max (Retorna o Maior) / Math.min (Retorna o Menor) / Math.sqrt (Raiz quadrada) 
let numeros = [4, 16, 64, 32, 9, 1000000]

// Trazer um novo array atualizado com a raiz quadrada do arrayde cada numero do array atual 
// let numerosDois = numeros.map(Math.sqrt)
let numerosDois = numeros.map(Math.sqrt)
let maiorNumero = Math.max.apply(Math, numeros)
let menorNumero = Math.min.apply(Math, numeros)

console.log(maiorNumero + " " + menorNumero)
// console.log(numeros)
// console.log(numerosDois)


let filtraNumero = numeros.filter((valor) => {
return valor >= 16;
})

console.log(numeros)
console.log(filtraNumero)

console.clear()


let tarefa = [
    {tarefa: "Dormir",
     isFeita: true
    },

    {tarefa: "limpar",
     isFeita: false
    },

    {tarefa: "torcer",
     isFeita: true
    }
]

//tertorne apenas as tarefas que estão como true
// find



let retornaTrue = tarefa.filter((item) => {
    return item.isFeita === true
})

console.log(retornaTrue)









