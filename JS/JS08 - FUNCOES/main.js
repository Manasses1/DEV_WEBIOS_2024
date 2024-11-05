// variaveis >>> var nome:

// funcoes >>> function Nome() {}

//Funções

function Contador() {
    // criar uma verificação se o numero digitado é Par ou Impar
    let imparPar = 15;
    let numero = 1;

    // se for  impar então vamos apresentar na tela todos os números impares de 1 até 50
    if(imparPar % 2 == 1){
        console.log("Esse número é impar")
        for(numero; numero <= 50; numero++){
            if (numero % 2 === 1) {
                console.log(numero)                
            }
        }
    }

    else if(imparPar % 2 == 0){
            console.log("Esse número é par")
            for(numero; numero <= 50; numero++){
                if (numero % 2 === 0) {
                    console.log(numero)                
                }
            }
        }
    // Senão (se for par) vamos apresentar na tela todos os número pares de 1 até 50
}


console.log(Contador())

console.clear  ()

// Arrow function

let BoasVindas = () => {
return 'Welcome sofrendo com JS / Com TCC'
}


console.log(BoasVindas())

// Os parenteses servem para trazer valores que estão fora da função para dentro dela, assim conseguindo trabalhar  com varios tipos de valores informados pelo usuario


let Soma = (num1, num2) => {
    return num1 + num2;
}

console.log(Soma(158, 15874551 ))

console.clear()

// 

function Clique() {
    let cliques = 0;

    console.log(cliques =  cliques + 1)
}

console.log(Clique())

console.clear()

// 

let ChamaPopUp = () =>{
    alert('Parabéns voce me chamou, descompensado!')
}

console.clear()

let PasseMouse = () =>{
    console.log('O mano passou o mouse por cima de mim')
}

let PasseMouse1 = () =>{
    console.log('O mano passou o mouse por cima de mim')
}