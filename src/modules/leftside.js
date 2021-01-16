

function leftContent(){

    const getContentElement = document.querySelector('.content');

    const leftContent = document.createElement('div');
    leftContent.classList.add('leftContent');

    /*
    const todoInput = document.createElement('input');
    todoInput.classList.add('input');

    leftContent.appendChild(todoInput);
    */
    getContentElement.appendChild(leftContent);
}

export default leftContent;