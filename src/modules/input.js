/*
Input Value Should contain the following
- Title
- Descrption
- Due Date
- Priority
*/

function input(){

    const leftContent = document.querySelector('.leftContent');

    const todoInputTitle = document.createElement('input');
    todoInputTitle.classList.add('inputTitle');
    
    const todoInputDescription = document.createElement('input');
    todoInputDescription.classList.add('inputDescription');

    const todoDueDate = document.createElement('input');
    todoDueDate.classList.add('inputDueDate');

    const todoPriority = document.createElement('input');
    todoPriority.classList.add('inputPriority');

    leftContent.appendChild(todoInputTitle);
    leftContent.appendChild(todoInputDescription);
    leftContent.appendChild(todoDueDate);
    leftContent.appendChild(todoPriority);


}

export default input;