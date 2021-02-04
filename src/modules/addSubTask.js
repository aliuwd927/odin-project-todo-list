import {subTask, subTaskArray} from './subTask';

const renderSubTask = () =>{
    removeSubTaskChild();
    for( let i = 0; i < subTaskArray.length; i++){
        displaySubTask(subTaskArray[i]);
    };

}

const displaySubTask = (renderSubTaskItems) => { 

    const subTaskBtmContainer = document.querySelector('.subTaskBtmContainer');

    //render under subTaskBtmContainer
    const subTaskContainer = document.createElement('div');
    const subTaskTitle = document.createElement('div');
    const subTaskDescription = document.createElement('div');
    const inputCheckContainer = document.createElement('div');

    //render under inputCheckContainer
    const inputCheckComplete = document.createElement('input');
    const inputCheckNotComplete = document.createElement('input');
    
    //classList
    subTaskContainer.classList.add('subTaskContainer');
    subTaskTitle.classList.add('subTaskTitle');
    subTaskDescription.classList.add('subTaskDescription');

    //set attributes
    inputCheckComplete.setAttribute('type','checkbox');
    inputCheckNotComplete.setAttribute('type','checkbox');

    //textContent
    subTaskTitle.textContent = renderSubTaskItems.title;
    subTaskDescription.textContent = renderSubTaskItems.description;
    inputCheckComplete.innerHTML = `<p>Completed</p>`;
    inputCheckNotComplete.innerHTML = `<p>Not Completed</p>`;


    //append childs
    subTaskContainer.appendChild(subTaskTitle);
    subTaskContainer.appendChild(subTaskDescription);
    subTaskContainer.appendChild(inputCheckContainer);
    inputCheckContainer.appendChild(inputCheckComplete);
    inputCheckContainer.appendChild(inputCheckNotComplete);
    subTaskBtmContainer.appendChild(subTaskContainer);



};

const removeSubTaskChild = () => {
    const subTaskBtmContainer = document.querySelector('.subTaskBtmContainer');
    while(subTaskBtmContainer.firstChild){
        subTaskBtmContainer.removeChild(subTaskBtmContainer.firstChild);
    };

};

export {displaySubTask};
export {renderSubTask};