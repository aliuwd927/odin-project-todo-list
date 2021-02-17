import { subTask } from './subTask';
import {lists} from './projects';

const renderItems = () =>{
    removeChild();
    /*
    for(let i = 0; i < lists.length; i++){
        displayProjects(lists[i]);
     };
     */

     lists.forEach(list =>{
        displayProjects(list);
     })
};


const displayProjects = (renderArrayItems) => {
 
    const leftBtmContainer = document.querySelector('.leftBottomContainer');

    //render under leftBtmContainer
    const projectContainer = document.createElement('div');

    //render projectTextContainer
    const projectTextContainer = document.createElement('div');
    const projectAddedTitle = document.createElement('div');

    //render taskBtnContainer
    const taskBtnContainer = document.createElement('div');
    const addSubTask = document.createElement('button');
    const removeCurrentProject = document.createElement('button');

    //dataset
    projectContainer.dataset.listId = renderArrayItems.id;

    //classList
    projectContainer.classList.add('projectContainer');
    projectTextContainer.classList.add('projectTextContainer');
    projectAddedTitle.classList.add('projectAddedTitle');
    taskBtnContainer.classList.add('taskBtnContainer');
    addSubTask.classList.add('addSubTask');
    removeCurrentProject.classList.add('removeCurrentProject');

    //textContent
    projectAddedTitle.textContent = renderArrayItems.title;

    /*
    if(renderArrayItems.id === selectedListId){
        projectContainer.classList.add('active-list');
    }
    */

    addSubTask.textContent = '+';
    removeCurrentProject.textContent ='-';

    //projectContainer.appendChild(projectAdded);
    projectTextContainer.appendChild(projectAddedTitle);
    projectContainer.appendChild(projectTextContainer);
    taskBtnContainer.appendChild(addSubTask);
    taskBtnContainer.appendChild(removeCurrentProject);
    projectContainer.appendChild(taskBtnContainer);
    leftBtmContainer.appendChild(projectContainer);

    addSubTask.addEventListener('click', () => {
        subTask();
    },{once:true});

    removeCurrentProject.addEventListener('click', () =>{
        //console.log(test.text);
    });

    const projectElem = document.querySelectorAll('.projectContainer');

    
    for(let i = 0; i < projectElem.length; i++){
        projectElem[i].addEventListener('click',() =>{
            console.log(projectElem[i]);

            //active
        });
    }    
    

};


const removeChild = () =>{
    const leftBtmContainer = document.querySelector('.leftBottomContainer');

    while(leftBtmContainer.firstChild){
        leftBtmContainer.removeChild(leftBtmContainer.firstChild);
    };

};


export {displayProjects};
export {renderItems};