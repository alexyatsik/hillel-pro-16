'use strict';

function seek(selector) {
    return document.querySelector(selector) || false;
}

function destroy(selector) {
    const target = seek(selector);
    if (target) {
        target.remove();
    }
}

function getUniqueId() {
    return Math.floor((Date.now() * Math.random()) % 100000).toString();
}

function getApis() {
    fetch('src/js/data.json')
        .then(res => {
            return res.json();
        })
        .then(res => {
            apis = res;
        })
        .catch(err => {
            console.log('rejected', err);
        })
}

function addItemToLocalStorage(lsName, item) {
    const ls = JSON.parse(localStorage.getItem(lsName));
    if (ls) {
        for (let i = 0; i < ls.length; i++) {
            if (ls[i].id === item.id) {
                ls[i] === item;
                localStorage.setItem(lsName, JSON.stringify(ls));
                return;
            }
        }
        ls.push(item);
        localStorage.setItem(lsName, JSON.stringify(ls));
    }
    const newItem = [item];
    localStorage.setItem(lsName, JSON.stringify(newItem));
}

function getItemFromLocalStorage(lsName, itemId) {
    const ls = JSON.parse(localStorage.getItem(lsName));
    if (ls) {
        for (let i = 0; i < ls.length; i++) {
            if (ls[i].id === itemId) {
                return ls[i].id;
            }
        }
    }

    return false;
}