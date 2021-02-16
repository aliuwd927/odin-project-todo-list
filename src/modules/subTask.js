import { displaySubTask } from "./addSubTask";
import {renderSubTask} from "./addSubTask";

const subTask = () => {

    const rightContent = document.querySelector('.rightContent');

    //Append subTaskTop/Btm Container under rightContent
    const mainContent = document.createElement('div');
    const subTaskTopContainer = document.createElement('div');
    const subTaskBtmContainer = document.createElement('div');

    //Render under subTaskTopContainer
    const taskInputTitle = document.createElement('input');
    const taskInputDescription = document.createElement('input');
    const taskInputDate = document.createElement('input');
    const taskInputPriority = document.createElement('input');
    const addTaskBtn = document.createElement('button');

    //classList
    mainContent.classList.add('mainContent');
    taskInputPriority.classList.add('taskInputPriority');
    taskInputDate.classList.add('taskInputDate');
    taskInputDescription.classList.add('taskInputDescription');
    taskInputTitle.classList.add('taskInputTitle');
    addTaskBtn.classList.add('addTaskBtn');
    subTaskTopContainer.classList.add('subTaskTopContainer');
    subTaskBtmContainer.classList.add('subTaskBtmContainer');

    //textContent
    addTaskBtn.textContent = 'Add Task';

    //Render under subTaskBtmContainer
    subTaskTopContainer.appendChild(taskInputTitle);
    subTaskTopContainer.appendChild(taskInputDescription);
    subTaskTopContainer.appendChild(taskInputDate);
    subTaskTopContainer.appendChild(taskInputPriority);
    subTaskTopContainer.appendChild(addTaskBtn);
    mainContent.appendChild(subTaskTopContainer);
    mainContent.appendChild(subTaskBtmContainer);
    rightContent.appendChild(mainContent);

    class TestTwo{
        constructor(title,description){
            this.title = title;
            this.description = description;
        }
    }

    addTaskBtn.addEventListener('click', ()=>{
        
        const taskInputTitle = document.querySelector('.taskInputTitle').value;
        const taskInputDescription = document.querySelector('.taskInputDescription').value;
        
        subTaskArray.push(new TestTwo(taskInputTitle,taskInputDescription));
        
        renderSubTask();

        document.querySelector('.taskInputTitle').value = '';
        document.querySelector('.taskInputDescription').value = '';
    })

};
 
const subTaskArray = [];

export {subTask};
export {subTaskArray};