/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(x, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}