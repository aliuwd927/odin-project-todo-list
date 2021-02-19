





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
        saveAndRender();
    });

    const createList = (name) =>{
        return {id: Date.now().toString(), name: name, tasks: []};
    }

    const saveAndRender = () => {
        save();
        renderItems();
    }

    const save = () =>{
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    }

    const renderItems = () =>{
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

   const clearElement = (element) =>{
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
};




export {render};
/// Debug Day Notes:
