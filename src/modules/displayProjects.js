
import{array} from './projects';

const displayProjects = () => {
    const projectContainer =  document.querySelector('.projectContainer');

    const projectAdded = document.createElement('div');
    projectAdded.classList.add('projectAdded');

    
   array.forEach((elements) =>{
       projectAdded.innerHTML = `${elements.title}<br>
                                ${elements.discription}`;
        projectContainer.appendChild(projectAdded);
   });

  
};

export {displayProjects};