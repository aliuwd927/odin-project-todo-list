
import{array} from './projects';
import{projects} from './projects';

const displayProjects = (renderArrayItems) => {
    //console.log(renderArrayItems + 'test');
    
    const leftContent = document.querySelector('.leftContent');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    
    const addSubTask = document.createElement('button');
    const removeCurrentProject = document.createElement('button');
    const projectAdded = document.createElement('div');

    addSubTask.classList.add('addSubTask');
    removeCurrentProject.classList.add('removeCurrentProject');
    projectAdded.classList.add('projectAdded');

    addSubTask.textContent = '+';
    removeCurrentProject.textContent ='-';

   

    //projectContainer.appendChild(projectAdded);
    projectContainer.appendChild(addSubTask);
    projectContainer.appendChild(removeCurrentProject);
    leftContent.appendChild(projectContainer);
    
  
};

export {displayProjects};