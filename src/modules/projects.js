import{renderItems} from './controller';

const projects = () =>{
    const submitButton = document.querySelector('.addToDoProjects');
    submitButton.addEventListener('click', (e) =>{
        e.preventDefault;
        renderItems();
    });
};

export {projects};


