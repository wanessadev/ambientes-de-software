const fibonacci = require('../funcoes/fibonacci');

test('deve retornar os 10 primeiros números de Fibonacci corretamente', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('deve retornar um array vazio para quantidade 0', () => {
    expect(fibonacci(0)).toMatchObject([]);
});

test('deve lançar erro para valores negativos', () => {
    expect(() => fibonacci(-1)).toThrow();
});