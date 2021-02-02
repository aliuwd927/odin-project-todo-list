import {subTask, subTaskArray} from './subTask';

const renderSubTask = () =>{

    for( let i = 0; i < subTaskArray.length; i++){
        displaySubTask(subTaskArray[i]);
    };

}

const displaySubTask = (renderSubTaskItems) => { 

    const subTaskBtmContainer = document.querySelector('.subTaskBtmContainer');

    //render under subTaskBtmContainer
    const subTaskContainer = document.createElement('div');

    
    //classList
    subTaskContainer.classList.add('subTaskContainer');


    //textContent
    subTaskContainer.innerHTML = `${renderSubTaskItems.title}
                                        <br>
                                    ${renderSubTaskItems.description}`;


    //append childs
    subTaskBtmContainer.appendChild(subTaskContainer);



};



export {displaySubTask};
export {renderSubTask};