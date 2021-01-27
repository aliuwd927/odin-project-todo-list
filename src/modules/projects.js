//Pass in input value from input.js to projects.js

import {displayProjects} from './displayProjects';
import {removeChild} from './displayProjects';
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
        

    array.push(new TestOne(todoInputTitle,todoInputDescription));

    document.querySelector('.inputTitle').value = '';
    document.querySelector('.inputDescription').value = '';

   
    
    for(let i = 0; i < array.length; i++){
        displayProjects(array[i]);
     }

     
    });


};



const array = [];

export {projects};
export {array};
