'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
    if (!name) {
        return false;
    }
    
    return name.length >= 4 && name.indexOf(' ') === -1;
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();


var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
    let parsed = string.match(/[-]*\d+(?:\.*\d+)*/g).map(x => Number(x)).filter(x => x !== NaN);
    return {min: parsed.reduce((p, c) => Math.min(p,c)), max: parsed.reduce((p, c) => Math.max(p,c))};
  // ...
}
console.log(getMinMax(inputData)); // ожидается [-5.8, 73]


function ucFirst(line) {
    if (!line || line.length === 0) {
        return line;
    }

    return line.charAt(0).toUpperCase() + line.substring(1);
}

function checkSpam(line) {
    if (!line) {
        return false;
    }

    return line.indexOf('XXX') !== -1 && line.indexOf('viagra') !== -1;
}

function truncate(str, maxlength) {
    if (!str) {
        return str;
    }

    if (str.length > maxlength) {
        return str.substring(0, maxlength - 4) + "...";
    }
}