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

    
    //classList
    subTaskContainer.classList.add('subTaskContainer');
    subTaskTitle.classList.add('subTaskTitle');
    subTaskDescription.classList.add('subTaskDescription');



    //textContent
    subTaskTitle.textContent = renderSubTaskItems.title;
    subTaskDescription.textContent = renderSubTaskItems.description;


    //append childs
    subTaskContainer.appendChild(subTaskTitle);
    subTaskContainer.appendChild(subTaskDescription);
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