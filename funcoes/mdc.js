function mdc(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Os parâmetros devem ser números inteiros.");
    }
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}
module.exports = mdc;