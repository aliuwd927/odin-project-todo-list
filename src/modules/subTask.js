
const subTask = () => {

    const rightContent = document.querySelector('.rightContent');

    //Append subTaskTop/Btm Container under rightContent
    const subTaskTopContainer = document.createElement('div');
    const subTaskBtmContainer = document.createElement('div');

    //Render under subTaskTopContainer
    const task0 = document.createElement('input');
    const task1 = document.createElement('input');
    const task2 = document.createElement('input');
    const task3 = document.createElement('input');

    //classList
    subTaskTopContainer.classList.add('subTaskTopContainer');

    //Render under subTaskBtmContainer
    subTaskTopContainer.appendChild(task3);
    subTaskTopContainer.appendChild(task2);
    subTaskTopContainer.appendChild(task1);
    subTaskTopContainer.appendChild(task0);
    rightContent.appendChild(subTaskBtmContainer);
    rightContent.appendChild(subTaskTopContainer);

};

export {subTask};