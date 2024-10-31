
// // // Retornar objeto aluno
// // console.log(aluno)

// // // //Retorna apenas o nome
// // console.log(`O nome do aluno é ${aluno.nome}` )

// // // retorna apenas campo se o aluno está com o cracha
// // console.log(aluno.isCracha)

// console.log(aluno.notas[2])

// console.clear()

// let IOS = [
//     {
//         nome: 'Manassés',
//         idade: '27',
//         altura: '1.67',
//         isCracha: true,
//         isCamisa: false,
//         isPaciencia: true,
//         isChora: true,
//         cor: 'bege',
//         notas: [10, 9 , 7, 8.5, 8]
//     },

//     {
//         nome: 'Nicolas',
//         idade: '22',
//         altura: '1.65',
//         isCracha: false,
//         isCamisa: false,
//         isPaciencia: true,
//         isChora: true,
//         cor: 'Branco',
//         notas: [9, 9 , 8, 8.5, 10]
//     }, 

//     {
//         nome: 'Maria Eduarda',
//         idade: '15',
//         altura: '1.85',
//         isCracha: true,
//         isCamisa: false,
//         isPaciencia: true,
//         isChora: true,
//         cor: 'Rosa',
//         notas: [9, 5 , 8, 8.5, 7]
//     },
// ]


// // mOSTRAR obj POR COMPLETO
// console.log(IOS)

// // Mostrar OBJ Nicolas
// console.log(IOS[1])

// // Retornar o OBJ nicolas se está usando camisa
// console.log(IOS[1].isCamisa, IOS[1].isChora)


// for (i = 0; i < IOS.length; i++) {
//     let login = IOS[i]
//     if (login.isCracha == true) {
//         console.log("O aluno tem cracha")
//         console.log(login.isCracha)
//     }else{
//         console.log("Aluno não tem cracha")
//     }
    
// }

console.clear()


let aluno = {
    nome: 'Manassés',
    idade: '27',
    altura: '1.67',
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'bege',
    notas: [10, 9 , 7, 8.5, 8]
}

// Primeiro passo transformar o objeto em Json

console.log(aluno)



console.log(JSON.stringify(aluno))


let Jasonito = '{"nome":"Manassés","idade":"27","altura":"1.67","isCracha":true,"isCamisa":false,"isPaciencia":true,"isChora":true,"cor":"bege","notas":[10,9,7,8.5,8]}'

// JSON em OBJ
console.log(JSON.parse(Jasonito))