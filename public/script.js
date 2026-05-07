let nome = prompt("Nome:");
let renda = Number(prompt("Renda:"));

while (isNaN(renda)) {
    renda = Number(prompt("Erro. Digite a renda de novo:"));
}

let qtd = Number(prompt("Quantidade de despesas:"));

while (isNaN(qtd)) {
    qtd = Number(prompt("Erro. Digite a quantidade de novo:"));
}

if (qtd < 1) {
    qtd = 1;
}
if (qtd > 5) {
    qtd = 5;
}

let total = 0;
for (let i = 1; i <= qtd; i++) {
    let valor = Number(prompt("Valor da despesa " + i));
    
    while (isNaN(valor)) {
        valor = Number(prompt("Erro. Digite a despesa " + i + " de novo:"));
    }
    
    total = total + valor;
}

let sobra = renda - total;
let msg = "";

if (total > renda) {
    msg = "Atencao: voce gastou mais do que ganhou.";
} else {
    if (sobra >= (renda * 0.3)) {
        msg = "Otimo: boa margem de sobra.";
    } else {
        msg = "Ok: da para melhorar a sobra.";
    }
}

let final = "Nome: " + nome + "\nRenda: " + renda + "\nTotal: " + total + "\nSobra: " + sobra + "\nStatus: " + msg;

alert(final);
console.log(final);