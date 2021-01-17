//Pass in input value from input.js to projects.js

function projects(){

    const leftContent = document.querySelector('.leftContent');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    
    const addSubTask = document.createElement('button');
    addSubTask.classList.add('addSubTask');
    addSubTask.textContent = '+';

    const removeCurrentProject = document.createElement('button');
    removeCurrentProject.classList.add('removeCurrentProject');
    removeCurrentProject.textContent ='-';

    leftContent.appendChild(projectContainer);
    projectContainer.appendChild(addSubTask);
    projectContainer.appendChild(removeCurrentProject);
}

export default projects;