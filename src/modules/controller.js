

const renderItems = () =>{
    const listsContainer = document.querySelector('[data-lists]');
    const newListForm = document.querySelector('[data-new-list-form]');
    const newListInput = document.querySelector('[data-new-list-input]');
    const deleteButton = document.querySelector('[data-delete-list-button]');
    const listDisplayContainer = document.querySelector('[data-list-display-container]');
    const listTitleElement = document.querySelector('[data-list-title]');
    const taskTemplate = document.getElementById('task-template');
    const tasksContainer = document.querySelector('[data-tasks]');
    const newTaskForm = document.querySelector('[data-new-task-form]');
    const newTaskInput = document.querySelector('[data-new-task-input]');



    const LOCAL_STORAGE_LIST_KEY = 'task.lists';
    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId';
    let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
    let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

    listsContainer.addEventListener('click',(e) =>{
        if(e.target.tagName.toLowerCase() === 'li'){
            selectedListId = e.target.dataset.listId;
            saveAndRender();
        };
    });

    deleteButton.addEventListener('click',(e)=>{
        lists = lists.filter(list => list.id !== selectedListId);
        selectedListId = null;
        saveAndRender();
    });

    newListForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const listName = newListInput.value;
        if(listName == null || listName === ''){
            return false;
        };
        const list = createList(listName);
        newListInput.value = null;
        lists.push(list);
        saveAndRender();
    });

    newTaskForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const taskName = newTaskInput.value;
        if(taskName == null || taskName === ''){
            return false;
        };
        const task = createTask(taskName);
        newTaskInput.value = null;
        const selectedList = lists.find(list => list.id === selectedListId);
        selectedList.tasks.push(task);
        saveAndRender();
    });

    const createList = (name) =>{
        return {id: Date.now().toString(), name: name, tasks:[]};
    };

    const createTask = (name) =>{
        return { id: Date.now().toString(), name: name, complete: false};
    };

    const save = () =>{
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
    };

    const render =() =>{
        clearElement(listsContainer);
        renderList();

        const selectedList = lists.find(list => list.id === selectedListId);
        if (selectedListId == null) {
            listDisplayContainer.style.display = 'none'
          } else{
            listDisplayContainer.style.display = '';
            listTitleElement.innerText = selectedList.name;
            clearElement(tasksContainer);
            renderTasks(selectedList);
        }
    };

    const renderTasks = (selectedList) =>{
        selectedList.tasks.forEach(task => {
            const taskElement = document.importNode(taskTemplate.content, true);
            const checkbox = taskElement.querySelector('input');
            checkbox.id = task.id;
            checkbox.checked = task.complete;
            const label = taskElement.querySelector('label');
            label.htmlFor = task.id;
            label.append(task.name);
            tasksContainer.appendChild(taskElement);
          });
    };

    const renderList = () =>{
        lists.forEach(list =>{
            const listElement = document.createElement('li');
            listElement.dataset.listId = list.id;
            listElement.classList.add('list-name');
            listElement.textContent = list.name;
            if(list.id === selectedListId){
                listElement.classList.add('active-list');
            }
            listsContainer.appendChild(listElement);
        });
    };

   const clearElement = (element) =>{
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    };


    const saveAndRender = () => {
        save();
        render();
    }
};

export {renderItems};
