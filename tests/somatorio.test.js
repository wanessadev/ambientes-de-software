const somatorio = require('../funcoes/somatorio');

test('deve somar corretamente um array de números positivos', () => {
    expect(somatorio([1, 2, 3, 4])).toBe(10);
});

test('deve retornar zero para um array vazio', () => {
    expect(somatorio([])).toBe(0);
});