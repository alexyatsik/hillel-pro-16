'use strict';

class DOMElement {
    constructor(tag, parent) {
        this.tag = tag;
        this.parent = parent;

        this.element = document.createElement(this.tag);
        this.parent.appendChild(this.element);
    }

    addClass() {
        this.element.classList.add(...arguments);
    }

    removeClass() {
        this.element.classList.remove(...arguments);
    }

    click(handler) {
        this.element.addEventListener('click', handler);
    }
}