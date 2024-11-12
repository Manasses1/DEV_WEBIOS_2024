// Dentro do contructor e onde colocamos possas propriedade
class Aluno {

    constructor(nome, ano, altura, isCracha, isCamisa, cor) {
    this.nome = nome;
    this.ano = ano;
    this.altura = altura;
    this.isCracha = isCracha;
    this.isCamisa = isCamisa;
    this.cor = cor;
    }

    retornaIdade(){
        
    }
} 

// Instancia == cópia
let aluno1 = new Aluno("Manassés", 1997, 1.90, true, true, "Black")

// console.log(aluno1)

let aluno2 = new Aluno("Jeferson", 2005, 1.75, true, true, "All White")

// console.log(`Primeiro aluno ${aluno1} \n Segundo alunlo ${aluno2}`)

console.log(aluno1)
console.log(aluno2)