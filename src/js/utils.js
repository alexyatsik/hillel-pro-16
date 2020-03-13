'use strict';

let apis;

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
    let db = getLocalStorage(lsName);
    if (!db) {
        db = [];
    }

    db.push(item);
    localStorage.setItem(lsName, JSON.stringify(db));
}

function updateItemInLocalStorage(lsName, item) {
    
}

function getLocalStorage(lsName) {
    return JSON.parse(localStorage.getItem(lsName));
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