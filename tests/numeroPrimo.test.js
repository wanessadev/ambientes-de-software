const numeroPrimo = require('../funcoes/numeroPrimo');

test('deve retornar true para o número 7 (que é primo)', () => {
    expect(numeroPrimo(7)).toBe(true);
});

test('deve retornar false para o número 10 (que não é primo)', () => {
    expect(numeroPrimo(10)).toBe(false);
});