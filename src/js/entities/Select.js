'use strict';

class Select extends DOMElement {
    constructor(parent, name, collection, coverOption = '--- Select ---') {
        super('select', parent);

        this.attr('name', name);

        this.coverOption = new DOMElement('option', this.element);
        this.coverOption.HTML(coverOption);
        if (coverOption === '--- Select ---') {
            this.coverOption.attr('value', '0');
        } else {
            this.coverOption.attr('value', coverOption);
        }
        for (let i = 0; i < collection.length; i++) {
            if (coverOption === collection[i].value) {
                continue;
            }
            const option = new DOMElement('option', this.element);
            option.HTML(collection[i].value);
            option.attr('value', collection[i].value);
        }
    }
}