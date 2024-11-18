function calcularNovoSalario() {
  // Obtém o valor do input
  const salarioAtual = parseFloat(document.getElementById("salario").value);
// parseFloat analisa um argumento (convertendo-o para uma string primeiro caso necessário) e retorna um número de ponto flutuante (número decimal)

  // Verifica se o valor é válido
  if (isNaN(salarioAtual) || salarioAtual <= 0) {
    document.getElementById("resultado").textContent =
      "Por favor, insira um salário válido.";
    document.getElementById("resultado").style.color = "red";
    return;
  }

  // Calcula o novo salário com aumento de 17% e reajuste anual de R$215
  const aumentoPercentual = salarioAtual * 0.17;
  const reajusteFixo = 215;
  const novoSalario = salarioAtual + aumentoPercentual + reajusteFixo;

  // Exibe o resultado no elemento HTML
  document.getElementById(
    "resultado"
  ).textContent = `O novo salário é R$ ${novoSalario.toFixed(2)}`;
  document.getElementById("resultado").style.color = "green";
}
