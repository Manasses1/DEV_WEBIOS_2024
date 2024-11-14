// Vamos desenvolver uma tabuada
// PPega um elemneto no HTML utilizando o ID
let valor = document.getElementById('recebeValor')
// Pega o elemento utilizando o atributo Name



const Tabuada = () => {
    let resultado = document.getElementById('resultado')
    //Value guarda o valor digitado dentro da variavel
    let guardaValor = valor.value;
    resultado.innerHTML = ' '
    resultado.style.color = "black"


    if (guardaValor == '') {
        // console.log("Insira um valor valido")
        mensagem = resultado.innerHTML = "Insira um valor valido"
        resultado.style.color = "red"
        
    } else {

        for (i = 0; i <= 10; i++) {
            // resultado = 
            // console.log(gardaValor, 'x', i, '=', resultado)
            let resultadoTabuada = guardaValor * i
            // console.log(`O valor de ${guardaValor} x ${i} é igual a ${resultadoTabuada * i}`)
            resultado.innerHTML += `${guardaValor} x ${i} = ${resultadoTabuada * i} <br>`
        }
    }


}

const Limpar = () => {
    resultado.innerHTML = " "
    valor.value = " "
}

