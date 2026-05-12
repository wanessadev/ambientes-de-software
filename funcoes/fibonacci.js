// funcoes/fibonacci.js
function fibonacci(quantidade) {
    // Programação Defensiva: Validação de entrada
    if (typeof quantidade !== 'number' || !Number.isInteger(quantidade) || quantidade < 0) {
        throw new Error("A quantidade deve ser um número inteiro positivo.");
    }

    if (quantidade === 0) return [];
    if (quantidade === 1) return [0];

    let sequencia = [0, 1];
    for (let i = 2; i < quantidade; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
    return sequencia;
}

module.exports = fibonacci;