function numeroPrimo(n) {
    if (!Number.isInteger(n) || n < 2) return false;
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
module.exports = numeroPrimo;