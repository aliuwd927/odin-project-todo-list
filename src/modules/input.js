/*
Input Value Should contain the following
- Title
- Descrption
- Due Date
- Priority
*/

const input = () =>{
    const leftContent = document.querySelector('.leftContent');

    const inputContainer = document.createElement('form');
    inputContainer.classList.add('inputContainer');
    inputContainer.dataset.newListForm = '';


    const todoInputTitle = document.createElement('input');
    todoInputTitle.classList.add('inputTitle');
    todoInputTitle.dataset.newListInput = '';
    
 

    const submitButton = document.createElement('button');
    submitButton.classList.add('addToDoProjects');
    submitButton.textContent = 'add to projects';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.dataset.deleteListButton = '';
    deleteButton.textContent = 'Delete List';

    const leftBottomContainer = document.createElement('div');
    leftBottomContainer.classList.add('leftBottomContainer');
    leftBottomContainer.dataset.lists = '';

    inputContainer.appendChild(todoInputTitle);
    inputContainer.appendChild(submitButton);
    inputContainer.appendChild(deleteButton);
    leftContent.appendChild(inputContainer);
    leftContent.appendChild(leftBottomContainer);

}

export {input};