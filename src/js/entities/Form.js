'use strict';

class Form extends DOMElement {
    constructor(parent, id) {
        super('form', parent);

        if (id) {
            this.element.setAttribute('id', id);
        }

        this.table = new DOMElement('table', this.element).get();
    }
}