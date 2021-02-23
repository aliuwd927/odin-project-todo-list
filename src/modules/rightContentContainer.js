

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
    todoBody.classList.add(todoBody);

    const todoTask = document.createElement('div');
    todoTask.classList.add('todoTask');
    todoTask.dataset.tasks = '';



    todoHeader.appendChild(todoTaskListTitle);
    todoHeader.appendChild(todoTaskCount);
    listDisplayContainer.appendChild(todoHeader);
    listDisplayContainer.appendChild(todoBody);
    rightContent.appendChild(listDisplayContainer);
    getContentElement.appendChild(rightContent);

}

export {rightContent};