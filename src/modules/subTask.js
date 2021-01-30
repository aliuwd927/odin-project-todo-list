
const subTask = () => {

    const rightContent = document.querySelector('.rightContent');

    //Append subTaskTop/Btm Container under rightContent
    const subTaskTopContainer = document.createElement('div');
    const subTaskBtmContainer = document.createElement('div');

    //Render under subTaskTopContainer
    const taskInputTitle = document.createElement('input');
    const taskInputDescription = document.createElement('input');
    const taskInputDate = document.createElement('input');
    const taskInputPriority = document.createElement('input');
    const addTask = document.createElement('button');

    //classList
    taskInputPriority.classList.add('taskInputPriority');
    taskInputDate.classList.add('taskInputDate');
    taskInputDescription.classList.add('taskInputDescription');
    taskInputTitle.classList.add('taskInputTitle');
    subTaskTopContainer.classList.add('subTaskTopContainer');
    subTaskBtmContainer.classList.add('subTaskBtmContainer');

    //textContent
    addTask.textContent = 'Add Task';

    //Render under subTaskBtmContainer
    subTaskTopContainer.appendChild(taskInputTitle);
    subTaskTopContainer.appendChild(taskInputDescription);
    subTaskTopContainer.appendChild(taskInputDate);
    subTaskTopContainer.appendChild(taskInputPriority);
    subTaskTopContainer.appendChild(addTask);
    rightContent.appendChild(subTaskBtmContainer);
    rightContent.appendChild(subTaskTopContainer);

};

export {subTask};