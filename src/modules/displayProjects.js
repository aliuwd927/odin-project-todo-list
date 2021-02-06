import {array} from './projects';
import { subTask } from './subTask';

const renderItems = () =>{
    removeChild();
    for(let i = 0; i < array.length; i++){
        displayProjects(array[i]);
     };

};

const displayProjects = (renderArrayItems) => {
 
    const leftBtmContainer = document.querySelector('.leftBottomContainer');

    //render under leftBtmContainer
    const projectContainer = document.createElement('div');

    //render checkToggleContainer
    const checkToggleContainer = document.createElement('div');
    const checkToggle = document.createElement('input');

    //set Attribute
    checkToggle.setAttribute('type', 'checkbox');

    //render projectTextContainer
    const projectTextContainer = document.createElement('div');
    const projectAddedTitle = document.createElement('div');
    const projectAddedDescription = document.createElement('div');
    const projectAddedDate = document.createElement('div');
    const projectAddedPrority = document.createElement('div');
    //render taskBtnContainer
    const taskBtnContainer = document.createElement('div');
    const addSubTask = document.createElement('button');
    const removeCurrentProject = document.createElement('button');

    //classList
    checkToggleContainer.classList.add('checkToggleContainer');
    projectContainer.classList.add('projectContainer');
    projectTextContainer.classList.add('projectTextContainer');
    projectAddedTitle.classList.add('projectAddedTitle');
    projectAddedDescription.classList.add('projectAddedDescription');
    projectAddedDate.classList.add('projectAddedDate');
    projectAddedPrority.classList.add('projectAddedPrority');
    taskBtnContainer.classList.add('taskBtnContainer');
    addSubTask.classList.add('addSubTask');
    removeCurrentProject.classList.add('removeCurrentProject');

    //textContent
    projectAddedTitle.textContent = renderArrayItems.title;
    projectAddedDescription.textContent = renderArrayItems.description;
    projectAddedDate.textContent = renderArrayItems.date;
    projectAddedPrority.textContent = renderArrayItems.priority;
    addSubTask.textContent = '+';
    removeCurrentProject.textContent ='-';

    //projectContainer.appendChild(projectAdded);
    projectContainer.appendChild(checkToggleContainer);
    checkToggleContainer.appendChild(checkToggle);
    projectTextContainer.appendChild(projectAddedTitle);
    projectTextContainer.appendChild(projectAddedDescription);
    projectTextContainer.appendChild(projectAddedDate);
    projectTextContainer.appendChild(projectAddedPrority);
    projectContainer.appendChild(projectTextContainer);
    taskBtnContainer.appendChild(addSubTask);
    taskBtnContainer.appendChild(removeCurrentProject);
    projectContainer.appendChild(taskBtnContainer);
    leftBtmContainer.appendChild(projectContainer);

    addSubTask.addEventListener('click', () => {
        subTask();
    });

    removeCurrentProject.addEventListener('click', () =>{
        subTask();
    });

};

const removeChild = () =>{
    const leftBtmContainer = document.querySelector('.leftBottomContainer');
    while(leftBtmContainer.firstChild){
        leftBtmContainer.removeChild(leftBtmContainer.firstChild);
    };
};

export {displayProjects};
export {renderItems};