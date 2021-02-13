import {subTask} from './subTask';


const checkToggled = ()=>{

    const checkBox = document.querySelectorAll('.checkToggle');

    if(checkBox.checked = true){
        console.log('triggered');
    }

};


export {checkToggled};