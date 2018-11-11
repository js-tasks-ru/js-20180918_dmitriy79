'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    const localItems = items;
    const columnToProp = new Map();
    const bodyElem = document.createElement('tbody');
    createTableHead(this.el);
    createTableBody(this.el, items);
    this.el.appendChild(bodyElem);
   
    function createTableHead(el) {
        const tHead = document.createElement('thead');
        const headTr = document.createElement('tr');
        el.appendChild(tHead);
        tHead.appendChild(headTr);
        if (!localItems.length) {
            return;
        } 
        // Header
        const item = localItems[0];
        let idx = 0;
        for (let prop in item) {
            if (!item.hasOwnProperty(prop)) {
                continue;
            }
            columnToProp.set(idx, prop);
            idx++;
            const headerTd = document.createElement('td');
            headerTd.innerHTML = prop;
            headTr.appendChild(headerTd);
        }
    }
    
    function createTableBody(el, items, sortColumnIdx, desc) {
        while (bodyElem.hasChildNodes()) {
            bodyElem.removeChild(bodyElem.childNodes[0]);
        }
        let localItems = items.slice();
        // Sort items if required
        if ((sortColumnIdx !== null && !isNaN(sortColumnIdx)) && sortColumnIdx < columnToProp.size) {
            const propName = columnToProp.get(sortColumnIdx);
            localItems.sort((a,b) => {
                const numA = +a[propName];
                const numB = +b[propName];
                let sortResult;
                if (!isNaN(numA) && !isNaN(numB)){
                    sortResult = numA - numB;
                } else {
                    sortResult = ('' + a[propName]).localeCompare('' + b[propName]);
                }
                if (desc){
                    sortResult = -sortResult;
                }
                return sortResult;
            })
        }
        for(const item of localItems) {
            const trElem = document.createElement('tr');
            for (let prop in item) {
                if (!item.hasOwnProperty(prop)) {
                    continue;
                }
                const headerTd = document.createElement('td');
                headerTd.innerHTML = item[prop];
                trElem.appendChild(headerTd);
            }
            bodyElem.appendChild(trElem);
        }
    }

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        createTableBody(bodyElem, localItems, column, desc);
    };    
}

