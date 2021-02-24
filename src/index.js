import {leftContent} from './modules/leftContentContainer';
import {input} from './modules/input';
import {projects} from './modules/projects';
import {rightContent} from './modules/rightContentContainer';

const componentContent = () =>{
    leftContent();
    input();
    projects();
    rightContent();
 };
 
 componentContent();