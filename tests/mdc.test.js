const mdc = require('../funcoes/mdc'); // Ajustado para subir apenas um nível

test('deve calcular o MDC de 18 e 60 corretamente (resultado 6)', () => {
    expect(mdc(18, 60)).toBe(6);
});

test('deve retornar o próprio número quando o MDC é com zero', () => {
    expect(mdc(10, 0)).toBe(10);
});