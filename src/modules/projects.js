import{renderItems} from './displayProjects';

const projects = () =>{

    const submitButton = document.querySelector('.addToDoProjects');

    class TestOne {
        constructor(title,description){
            this.title = title;
            this.description = description;
            this.consoleThis();
        }

        consoleThis(){
            list.push({id: Date.now().toString(), title: this.title, description: this.description});
        }
    };

    submitButton.addEventListener('click', () =>{

    const todoInputTitle = document.querySelector('.inputTitle').value;
    const todoInputDescription = document.querySelector('.inputDescription').value;
        
    array.push(new TestOne(todoInputTitle,todoInputDescription));

    document.querySelector('.inputTitle').value = '';
    document.querySelector('.inputDescription').value = '';
     
    renderItems();
    });


};


//List
const array = [];
const list = [];

export {projects};
export {array};
export {list};
