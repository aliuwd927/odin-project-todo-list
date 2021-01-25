import {leftContent} from './modules/leftContentContainer';
import {input} from './modules/input';
import {rightContent} from './modules/rightContentContainer';
import {projects} from './modules/projects';


 function componentContent() {
  leftContent();
  input();
  projects();
  rightContent();
 };
 
 componentContent();