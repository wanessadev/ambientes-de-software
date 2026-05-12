function contagem(n, dados) {
    if (!Array.isArray(dados)) throw new Error("O segundo parâmetro deve ser um array.");
    
    let contador = 0;
    for (let i = 0; i < dados.length; i++) {
        if (Number.isInteger(dados[i]) && dados[i] <= n) {
            contador++;
        }
    }
    return contador;
}
module.exports = contagem;