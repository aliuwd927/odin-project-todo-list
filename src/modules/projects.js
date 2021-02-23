import{render} from './controller';

const projects = () =>{
    const submitButton = document.querySelector('.addToDoProjects');
    submitButton.addEventListener('click', (e) =>{
        e.preventDefault;
        render();
    });
};

export {projects};


