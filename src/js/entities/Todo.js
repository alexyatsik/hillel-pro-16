'use strict';

class Todo {
    constructor(id, task, priority, status, description) {
        this.id = id;
        this.status = status;
        this.priority = priority;
        this.task = task;
        if (description) {
            this.description = description;
        } else {
            this.description = 'No description';
        }

        this.root
    }

    get() {
        this.root = document.createElement('tr');
        this.root.dataset.id = this.id;
        new DOMElement('td', this.root).HTML(this.task);
        new DOMElement('td', this.root).HTML(this.priority);
        new DOMElement('td', this.root).HTML(this.status);
        new DOMElement('td', this.root).HTML(this.description);
        const actionsNest = new DOMElement('td', this.root);
        new ActionBar(actionsNest.get(), this.id, ['Edit', 'Delete']);
        
        return this.root;
    }
}