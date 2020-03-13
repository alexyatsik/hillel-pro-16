'use strict';

class Select extends DOMElement {
    constructor(parent, name, collection) {
        super('select', parent);

        this.attr('name', name);

        this.coverOption = new DOMElement('option', this.element);
        this.coverOption.HTML('--- Select ---');
        this.coverOption.attr('value', '0');
        for (let i = 0; i < collection.length; i++) {
            const option = new DOMElement('option', this.element);
            option.HTML(collection[i].value);
            option.attr('value', collection[i].id);
        }
    }
}