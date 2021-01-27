
const leftContent = () => {
    const getContentElement = document.querySelector('.content');

    const leftContent = document.createElement('div');
    leftContent.classList.add('leftContent');

    getContentElement.appendChild(leftContent);

};

export {leftContent};
