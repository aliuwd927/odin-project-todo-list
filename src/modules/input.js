/*
Input Value Should contain the following
- Title
- Descrption
- Due Date
- Priority
*/

const input = () =>{
    const leftContent = document.querySelector('.leftContent');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');


    const todoInputTitle = document.createElement('input');
    todoInputTitle.classList.add('inputTitle');
    
    //const todoInputDescription = document.createElement('input');
    //todoInputDescription.classList.add('inputDescription');

    //const todoDueDate = document.createElement('input');
    //todoDueDate.classList.add('inputDueDate');

    //const todoPriority = document.createElement('input');
    //todoPriority.classList.add('inputPriority');

    const submitButton = document.createElement('button');
    submitButton.classList.add('addToDoProjects');
    submitButton.textContent = 'add to projects';

    const leftBottomContainer = document.createElement('div');
    leftBottomContainer.classList.add('leftBottomContainer');

    inputContainer.appendChild(todoInputTitle);
    //inputContainer.appendChild(todoInputDescription);
    //inputContainer.appendChild(todoDueDate);
    //inputContainer.appendChild(todoPriority);
    inputContainer.appendChild(submitButton);
    leftContent.appendChild(inputContainer);
    leftContent.appendChild(leftBottomContainer);

}

export {input};