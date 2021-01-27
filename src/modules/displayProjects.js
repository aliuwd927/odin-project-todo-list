

const displayProjects = (renderArrayItems) => {
    //console.log(renderArrayItems + 'test');
    
    const leftContent = document.querySelector('.leftContent');

    //render under leftContent
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

    leftContent.appendChild(projectContainer);
  
};

const removeChild = () =>{
    const projectContainer = document.querySelector('.projectContainer');
    while(projectContainer.firstChild){
        projectContainer.removeChild(projectContainer.firstChild);
    };
};

export {displayProjects};
export {removeChild};