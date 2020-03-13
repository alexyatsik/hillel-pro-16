'use strict';

class Form extends DOMElement {
    constructor(parent, id) {
        super('form', parent);

        this.id = id;

        if (id) {
            this.element.setAttribute('id', id);
        }
    }
}