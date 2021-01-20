

const rightContent = () =>{
    const getContentElement = document.querySelector('.content');

    const rightContent = document.createElement('div');
    rightContent.classList.add('rightContent');

    getContentElement.appendChild(rightContent);

    return{
        getContentElement,
        rightContent
    }
}

export {rightContent};