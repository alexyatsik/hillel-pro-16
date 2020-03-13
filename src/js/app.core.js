'use strict';

function loadTodoList() {
    const addButton = new Button(seek('#app'), 'Add TODO');
    addButton.click(addTodoHandler);
}