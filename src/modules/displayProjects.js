import { subTask } from './subTask';
import {lists} from './projects';

const LOCAL_STORAGE_LIST_KEY = 'title.title';
const LOCAL_STORAGE_LIST_ID_KEY = 'title.title';
let selectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY);

const renderItems = () =>{
    const leftBtmContainer = document.querySelector('.leftBottomContainer');
    removeChild(leftBtmContainer);
    for(let i = 0; i < lists.length; i++){
        displayProjects(lists[i]);
     };

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
    addSubTask.textContent = '+';
    removeCurrentProject.textContent ='-';

    //projectContainer.appendChild(projectAdded);
    projectTextContainer.appendChild(projectAddedTitle);
    projectContainer.appendChild(projectTextContainer);
    taskBtnContainer.appendChild(addSubTask);
    taskBtnContainer.appendChild(removeCurrentProject);
    projectContainer.appendChild(taskBtnContainer);
    leftBtmContainer.appendChild(projectContainer);

    projectContainer.addEventListener('click' ,(e)=>{
        //console.log(e.target.classList);
        if(e.target.classList.value === 'projectContainer'){
            //console.log(selectedListId);
            selectedListId = e.target.dataset.listId;
            saveToLocal();
            lists.forEach(element =>{
                if(element.id === selectedListId){
                    projectContainer.classList.add('active-list');
                }
            })
        }

    });

    const saveToLocal = () =>{
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    }

    addSubTask.addEventListener('click', () => {
        subTask();
    },{once:true});

    removeCurrentProject.addEventListener('click', () =>{
        //console.log(test.text);
    });

};

/*
const setActiveList =  () =>{
    //console.log('test');
    lists.forEach(element =>{
        if(element.id === selectedListId){
            const projectContainer = document.querySelector('.projectContainer');
            projectContainer.classList.add('active-list');
        }
    })
}
*/


const removeChild = (element) =>{
    while(element.firstChild){
        element.removeChild(element.firstChild);
    };

    return{
        renderItems,
        displayProjects,
        removeChild
    }

};


export {displayProjects};
export {renderItems};
export {LOCAL_STORAGE_LIST_KEY};