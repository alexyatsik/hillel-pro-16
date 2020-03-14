'use strict';

class ActionBar extends DOMElement {
    constructor(parent, itemId) {
        super('div', parent);

        const buttonEdit = new Button(this.element, 'Edit').get();
        buttonEdit.dataset.action = 'edit';
        buttonEdit.dataset.id = itemId;
        const buttonDelete = new Button(this.element, 'Delete').get();
        buttonDelete.dataset.action = 'delete';
        buttonDelete.dataset.id = itemId;
    }
}