import{renderItems} from './displayProjects';
import {LOCAL_STORAGE_LIST_KEY} from './displayProjects';

const projects = () =>{

    const submitButton = document.querySelector('.addToDoProjects');

    class TestOne {
        constructor(title){
            this.title = title;
            //this.description = description;
            this.consoleThis();
        }

        consoleThis(){
            lists.push({id: Date.now().toString(), title: this.title, tasks:[]});
        }
    };

    submitButton.addEventListener('click', () =>{

    const todoInputTitle = document.querySelector('.inputTitle').value;
    //const todoInputDescription = document.querySelector('.inputDescription').value;

    if(todoInputTitle == null || todoInputTitle === ''){
        return false;
    }

    array.push(new TestOne(todoInputTitle));
    
        
    document.querySelector('.inputTitle').value = '';
     
    renderItems();
    });


};




//List
const array = [];
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];


export {projects};
export {lists};

