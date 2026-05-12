function quicksort(array) {
    if (!Array.isArray(array)) throw new Error("A entrada deve ser um array.");
    if (array.length <= 1) return array;

    const pivo = array[array.length - 1];
    const esquerda = [];
    const direita = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivo) esquerda.push(array[i]);
        else direita.push(array[i]);
    }

    return [...quicksort(esquerda), pivo, ...quicksort(direita)];
}
module.exports = quicksort;