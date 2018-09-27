'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
    let parsed = string.match(/[-]*\d+(?:\.*\d+)*/g).map(x => Number(x)).filter(x => x !== NaN);
    return {min: parsed.reduce((p, c) => Math.min(p,c)), max: parsed.reduce((p, c) => Math.max(p,c))};
}

