const quicksort = require('../funcoes/quicksort');

test('deve ordenar um array desordenado corretamente', () => {
    const lista = [5, 3, 8, 1, 2];
    expect(quicksort(lista)).toMatchObject([1, 2, 3, 5, 8]);
});

test('deve retornar o próprio array se ele já estiver ordenado', () => {
    const lista = [1, 2, 3];
    expect(quicksort(lista)).toMatchObject([1, 2, 3]);
});