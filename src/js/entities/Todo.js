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
    }
}