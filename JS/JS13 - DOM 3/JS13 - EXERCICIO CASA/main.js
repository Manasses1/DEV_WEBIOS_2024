class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        const taxa = 0.015; // 1,5%
        return this.salario - this.salario * taxa;
    }

    contaCorrente() {
        const taxa = 0.036; // 3,6%
        return this.salario - this.salario * taxa;
    }

    contaEstudante() {
        const taxa = 0.012; // 1,2%
        return this.salario - this.salario * taxa;
    }
}

window.onload = () => {
    // Instanciar objetos
    const poupanca = new ContaBancaria("João", 30, 3000, "Masculino", "001", "Poupança", "12345");
    const corrente = new ContaBancaria("Maria", 28, 4000, "Feminino", "002", "Corrente", "67890");
    const estudante = new ContaBancaria("Lucas", 22, 2000, "Masculino", "003", "Estudante", "54321");

    // Calcular novos salários
    const novoSalarioPoupanca = poupanca.contaPoupanca();
    const novoSalarioCorrente = corrente.contaCorrente();
    const novoSalarioEstudante = estudante.contaEstudante();

    // Exibir resultados no console
    console.log("Conta Poupança:");
    console.log(`Nome: ${poupanca.nome}, Idade: ${poupanca.idade}, Novo Salário: R$ ${novoSalarioPoupanca.toFixed(2)}`);

    console.log("Conta Corrente:");
    console.log(`Nome: ${corrente.nome}, Idade: ${corrente.idade}, Novo Salário: R$ ${novoSalarioCorrente.toFixed(2)}`);

    console.log("Conta Estudante:");
    console.log(`Nome: ${estudante.nome}, Idade: ${estudante.idade}, Novo Salário: R$ ${novoSalarioEstudante.toFixed(2)}`);
};