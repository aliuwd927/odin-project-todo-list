





const render = () =>{
    const listsContainer = document.querySelector('[data-lists]');
    const newListForm = document.querySelector('[data-new-list-form]');
    const newListInput = document.querySelector('[data-new-list-input]');


    const LOCAL_STORAGE_LIST_KEY = 'task.lists';
    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.lists';
    let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
    let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

    listsContainer.addEventListener('click',(e) =>{
        if(e.target.tagName.toLowerCase() === 'li'){
            selectedListId = e.target.dataset.listId;
           saveAndRender()
        }
    })

    newListForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const listName = newListInput.value;
        console.log(listName);
        if(listName == null || listName === ''){
            return false;
        }

        const list = createList(listName);
        newListInput.value = null;
        lists.push(list);

        saveAndRender()
        

    });

    function createList(name){
        return {id: Date.now().toString(), name: name, tasks: []};
    }

    function saveAndRender(){
        save();
        renderItems();
    }

    function save(){
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    }

    function renderItems(){
        clearElement(listsContainer);
        lists.forEach(list =>{
            const listElement = document.createElement('li');
            listElement.dataset.listId = list.id;
            listElement.classList.add('list-name');
            listElement.textContent = list.name;
            if(list.id === selectedListId){
                listElement.classList.add('active-list');
            }
            listsContainer.appendChild(listElement);
        })
    };

   function clearElement(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
    renderItems();

};




export {render};





/// Debug Day Notes:
/*
    - Code Pulled from projects.js
    - Bug issue with how the active list is performing
        *Bug Issue-1: active-list gets pended on every projectContainer div tag;
            Remedy: Tested YT tutorial, confirmed that active-list IS selectable regardless of tagName,...
            combine project.js code to displayProjects.js and refactor to fix.
        


*/

// ---ReFactor Below ---

/*
   

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

    if(todoInputTitle == null || todoInputTitle === ''){
        return false;
    }

    array.push(new TestOne(todoInputTitle));
    
        
    document.querySelector('.inputTitle').value = '';
     

    });

*/