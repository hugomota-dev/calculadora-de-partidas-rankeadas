const prompt = require("prompt-sync")();

// const jogador = prompt("Informe o nome do seu Jogador: ");

// const vitorias = prompt("Informe a quantidade de vitorias: ");

// const derrotas = prompt("Informe a quantidade de derrotas: ");

function calcularRankeadas(vitorias, derrotas) {
  let saldoVitorias = Math.abs(vitorias - derrotas);
  return saldoVitorias;
}

function verificarRank(saldoVitorias) {
  if (saldoVitorias <= 10) {
    return "Ferro";
  } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    return "Prata";
  } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    return "Ouro";
  } else if (saldoVitorias > 80 && saldoVitorias <= 91) {
    return "Diamante";
  } else if (saldoVitorias > 91 && saldoVitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

let saldo = calcularRankeadas();
saldo = 100
let rank = verificarRank(saldo);

// console.log(`Nome do Jogador: ${jogador}`);
console.log(`Saldo de vitórias: ${saldo}`);
console.log(`Classificação: ${rank}`);
