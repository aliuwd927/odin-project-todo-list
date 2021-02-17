import{renderItems} from './displayProjects';

const projects = () =>{

    const submitButton = document.querySelector('.addToDoProjects');

    class TestOne {
        constructor(title){
            this.title = title;
            //this.description = description;
            this.consoleThis();
        }

        consoleThis(){
            lists.push({id: Date.now().toString(), title: this.title});
        }
    };

    submitButton.addEventListener('click', () =>{

    const todoInputTitle = document.querySelector('.inputTitle').value;
    //const todoInputDescription = document.querySelector('.inputDescription').value;

    if(todoInputTitle == null || todoInputTitle === ''){
        return false;
    }else{
        array.push(new TestOne(todoInputTitle));
    }
        
    document.querySelector('.inputTitle').value = '';
     
    renderItems();
    });


};

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';

//List
const array = [];
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

export {projects};
export {lists};
export {selectedListId};
