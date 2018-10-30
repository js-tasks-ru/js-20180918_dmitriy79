'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let head = table.querySelector("thead");
    if (!head) {
        return;
    }
    let statusIndex = -1;
    let genderIndex = -1;
    let ageIndex = -1;
    let headTr = head.firstElementChild;
    for (let i = 0; i < headTr.children.length; i++) {
        const text = headTr.children[i].innerHTML;
        if (text === 'Status') {
            statusIndex = i;
        } else if (text === 'Age') {
            ageIndex = i;
        } else if (text === 'Gender') {
            genderIndex = i;
        }
    }
    
    let body = table.querySelector("tbody");
    if (!body) {
        return;
    }
    for(const trElem of body.querySelectorAll("tr")) {
        const tdElems = trElem.querySelectorAll("td");
        for (let i = 0; i < tdElems.length; i++) {
            if (i === ageIndex) {
                const age = +tdElems[i].innerText;
                if (age < 18) {
                    trElem.style = "text-decoration: line-through";
                }
            } else if (i === genderIndex) {
                const gender = tdElems[i].innerText;
                if (gender === 'm') {
                    trElem.classList.add("male");
                } else if (gender === 'f') {
                    trElem.classList.add("female");
                }
            } else if (i === statusIndex) {
                const dataAttr = tdElems[i].getAttribute('data-available');
                if (!dataAttr) {
                    trElem.setAttribute('hidden', '');
                } else if (dataAttr==='true') {
                    trElem.classList.add('available');
                } else if (dataAttr==='false') {
                    trElem.classList.add('unavailable');
                }
            }
        }
    }
}