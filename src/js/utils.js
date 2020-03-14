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

function addItemToPageContent(todoObj) {
    seek('#todosList').appendChild(todoObj.get());
}

function updateItemInLocalStorage(lsName, item) {
    const db = getLocalStorage(lsName);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === item.id) {
            db[i] = item;
            break;
        }
    }
    localStorage.setItem(lsName, JSON.stringify(db));
}

function updateItemInPageContent(todoObj) {
    const target = document.querySelector(`#todosList > [data-id="${todoObj.id}"]`);
    seek('#todosList').replaceChild(todoObj.get(), target);
}

function getLocalStorage(lsName) {
    return JSON.parse(localStorage.getItem(lsName));
}

function getItemFromLocalStorage(lsName, itemId) {
    const ls = getLocalStorage(lsName);
    if (ls) {
        for (let i = 0; i < ls.length; i++) {
            if (ls[i].id === itemId) {
                return ls[i];
            }
        }
    }

    return false;
}

function deleteItemFromLocalStorage(lsName, itemId) {
    const db = getLocalStorage(lsName);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === itemId) {
            db.splice(i, 1);
            break;
        }
    }
    localStorage.setItem(lsName, JSON.stringify(db));
}

function deleteItemFromPage(itemId) {
    document.querySelector(`tr[data-id="${itemId}"]`).remove();
}