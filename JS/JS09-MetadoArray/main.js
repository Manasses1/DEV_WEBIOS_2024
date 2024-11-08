// Array
let frutas = ["Banana", "Abacate", "Uva", "Melancia", "Abacaxi", "Tomate", "Morango", "Acerola"] // coloque o nome de 8 frutas


frutas.forEach(Percorrer)


// Primeiro parametro conteudo, segundo indice. REGRA!!!
function Percorrer(valor, indice) {
    console.log(frutas[valor]); // retorna valor(conteudo) da posição
    console.log(indice); // Retorna numero da posição
}

// for(i = 0; i <= frutas.length ; i++){
//     console.log(frutas[i]); // retorna valor(conteudo) da posição
//     console.log(i); // Retorna numero da posição
// }