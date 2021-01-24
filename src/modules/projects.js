//Pass in input value from input.js to projects.js

import {displayProjects} from './displayProjects';

const projects = () =>{

    const submitButton = document.querySelector('.addToDoProjects');

    class TestOne {
        constructor(title,description){
            this.title = title;
            this.description = description
        }

    };

    submitButton.addEventListener('click', () =>{

    const todoInputTitle = document.querySelector('.inputTitle').value;
    const todoInputDescription = document.querySelector('.inputDescription').value;

    const leftContent = document.querySelector('.leftContent');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    
    const addSubTask = document.createElement('button');
    addSubTask.classList.add('addSubTask');
    addSubTask.textContent = '+';

    const removeCurrentProject = document.createElement('button');
    removeCurrentProject.classList.add('removeCurrentProject');
    removeCurrentProject.textContent ='-';

    
    displayProjects();
    array.push(new TestOne(todoInputTitle,todoInputDescription));
    //console.log(array);

    document.querySelector('.inputTitle').value = '';
    document.querySelector('.inputDescription').value = '';

    leftContent.appendChild(projectContainer);
    projectContainer.appendChild(addSubTask);
    projectContainer.appendChild(removeCurrentProject);

    });

};

const array = [];

export {projects};
export {array};
