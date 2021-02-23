

const rightContent = () =>{

    const getContentElement = document.querySelector('.content');

    const rightContent = document.createElement('div');
    rightContent.classList.add('rightContent');
    
    const listDisplayContainer = document.createElement('div');
    listDisplayContainer.classList.add('listDisplayContainer');
    listDisplayContainer.dataset.listDisplayContainer = '';
    
    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todoHeader');
    
    const todoTaskListTitle = document.createElement('h2');
    todoTaskListTitle.classList.add('todoListTaskTitle');
    todoTaskListTitle.dataset.listTitle = '';

    const todoTaskCount = document.createElement('p');
    todoTaskCount.classList.add('todoTaskCount');
    todoTaskCount.dataset.listCount = '';
    
    const todoBody = document.createElement('div');
    todoBody.classList.add('todoBody');
    
    const todoTask = document.createElement('div');
    todoTask.classList.add('todoTask');
    todoTask.dataset.tasks = '';

    const newTaskCreator = document.createElement('div');
    newTaskCreator.classList.add('newTaskCreator');

    const newTaskForm = document.createElement('form');
    newTaskForm.dataset.newTaskForm = '';

    const inputTask = document.createElement('input');
    inputTask.setAttribute('type', 'text');
    inputTask.classList.add('inputTask');
    inputTask.dataset.newTaskInput = '';

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('addTaskButton');
    addTaskButton.textContent = 'add Task';

    
    todoHeader.appendChild(todoTaskListTitle);
    todoHeader.appendChild(todoTaskCount);
    todoBody.appendChild(todoTask);
    todoBody.appendChild(newTaskCreator);
    newTaskCreator.appendChild(newTaskForm);
    newTaskForm.appendChild(inputTask);
    newTaskForm.appendChild(addTaskButton);
    listDisplayContainer.appendChild(todoHeader);
    listDisplayContainer.appendChild(todoBody);
    rightContent.appendChild(listDisplayContainer);
    getContentElement.appendChild(rightContent);

}

export {rightContent};