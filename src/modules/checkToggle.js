import {subTask} from './subTask';


const checkToggled = ()=>{

    const checkBox = document.querySelector('.checkToggle');

    if(checkBox.checked === true){
        alert('trigger');
    }

};


export {checkToggled};