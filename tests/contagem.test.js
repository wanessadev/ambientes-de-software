const contagem = require('../funcoes/contagem');

test('deve contar corretamente quantos valores são menores ou iguais ao limite', () => {
    const dados = [5, 10, 15, 20, 25];
    expect(contagem(15, dados)).toBe(3);
});

test('deve retornar zero se nenhum valor for menor ou igual ao limite', () => {
    const dados = [50, 60, 70];
    expect(contagem(10, dados)).toBe(0);
});