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

    //render under projectContainer
    const projectAddedTitle = document.createElement('div');
    const projectAddedDescription = document.createElement('div');
    const projectAddedDate = document.createElement('div');
    const projectAddedPrority = document.createElement('div');
    const addSubTask = document.createElement('button');
    const removeCurrentProject = document.createElement('button');

    //classList
    projectContainer.classList.add('projectContainer');
    projectAddedTitle.classList.add('projectAddedTitle');
    projectAddedDescription.classList.add('projectAddedDescription');
    projectAddedDate.classList.add('projectAddedDate');
    projectAddedPrority.classList.add('projectAddedPrority');
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
    projectContainer.appendChild(projectAddedTitle);
    projectContainer.appendChild(projectAddedDescription);
    projectContainer.appendChild(projectAddedDate);
    projectContainer.appendChild(projectAddedPrority);
    projectContainer.appendChild(addSubTask);
    projectContainer.appendChild(removeCurrentProject);
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