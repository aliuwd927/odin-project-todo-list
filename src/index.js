import {localStorage} from './modules/localStorage';
import {leftContent} from './modules/leftContentContainer';
import {input} from './modules/input';
import {projects} from './modules/projects';
import {rightContent} from './modules/rightContentContainer';



 function componentContent() {
  localStorage();
  leftContent();
  input();
  projects();
  rightContent();
 };
 
 componentContent();