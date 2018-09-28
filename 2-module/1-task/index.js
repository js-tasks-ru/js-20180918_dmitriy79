/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    if (obj === null) {
        return null;
    }
    if (obj === undefined) {
        return undefined;
    }
    let cloned = {};
    for (let prop in obj) {
        const propValue = obj[prop];
        if (obj[prop] === null) {
            cloned[prop] = null;
        } else if (typeof propValue === 'object') {
            cloned[prop] = clone(propValue);
        } else {
            cloned[prop] = propValue;
        }
    }
    return cloned;
}