'use strict';

function windowHandler() {
    getApis();
    loadTodoList();
}

function addTodoHandler() {
    destroy('#crud-form-wrapper');
    const wrapper = new DOMElement('div', seek('#app'));
    wrapper.attr('id', 'crud-form-wrapper');
    new AddForm(wrapper.get(), 'crudForm');
    new Button(wrapper.get(), 'Apply').click(addConfirmedHandler);
    new Button(wrapper.get(), 'Close').click(closeButtonHandler);
}

function addConfirmedHandler() {
    const form = document.forms.crudForm;
    
    if (isInputCorrect(form)) {
        addItemToLocalStorage('todos', new Todo(
            form.id.value,
            form.task.value,
            form.priority.value,
            form.status.value,
            form.description.value
        ));
        destroy('#crud-form-wrapper');
    }
}

function closeButtonHandler() {
    destroy('#crud-form-wrapper');
}

function actionsHandler(event) {
    
}