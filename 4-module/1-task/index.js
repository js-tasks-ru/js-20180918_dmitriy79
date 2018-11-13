'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    const list = document.createElement('ul');
    if (!friends || friends.length === 0) {
        return list;
    }
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.innerHTML = `${friend.firstName || ''} ${friend.lastName || ''}`;
        list.appendChild(li);
    });
    return list;    
}
