'use strict';

function windowHandler() {
    getApis();
    loadTodoList();
}

function addTodoHandler() {
    destroy('#crud-form-wrapper');
    const wrapper = new DOMElement('div', seek('#app'));
    wrapper.attr('id', 'crud-form-wrapper');
    new AddForm(wrapper.get());
    new Button(wrapper.get(), 'Apply').click(addConfirmedHandler);
    new Button(wrapper.get(), 'Close').click(closeButtonHandler);
}

function addConfirmedHandler() {
    const form = document.forms.crudForm;
    const todo = new Todo(
        form.id.value,
        form.task.value,
        form.priority.value,
        form.status.value,
        form.description.value
    )
    
    if (isInputCorrect(form)) {
        addItemToLocalStorage('todos', todo);
        addItemToPageContent(todo);
        destroy('#crud-form-wrapper');
    }
}

function closeButtonHandler() {
    destroy('#crud-form-wrapper');
}

function actionsHandler(event) {
    if (event.target.dataset.action === 'edit') {
        destroy('#crud-form-wrapper');
        const wrapper = new DOMElement('div', seek('#app'));
        wrapper.attr('id', 'crud-form-wrapper');
        new EditForm(wrapper.get(), event.target.dataset.id);
        new Button(wrapper.get(), 'Apply').click(EditConfirmedHandler);
        new Button(wrapper.get(), 'Close').click(closeButtonHandler);
    } else if (event.target.dataset.action === 'delete') {
        deleteItemFromLocalStorage('todos', event.target.dataset.id);
        deleteItemFromPage(event.target.dataset.id);
    }
}

function EditConfirmedHandler() {
    const form = document.forms.crudForm;
    const todo = new Todo(
        form.id.value,
        form.task.value,
        form.priority.value,
        form.status.value,
        form.description.value
    )
    
    if (isInputCorrect(form)) {
        updateItemInLocalStorage('todos', todo);
        updateItemInPageContent(todo);
        destroy('#crud-form-wrapper');
    }
}