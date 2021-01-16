//Pass in input value from input.js to projects.js

function projects(){

    const leftContent = document.querySelector('.leftContent');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    


    leftContent.appendChild(projectContainer);
}

export default projects;