import {localStorage} from './modules/localStorage';
import {leftContent} from './modules/leftContentContainer';
import {input} from './modules/input';
import {rightContent} from './modules/rightContentContainer';
import {projects} from './modules/projects';


 function componentContent() {
  localStorage();
  leftContent();
  input();
  projects();
  rightContent();
 };
 
 componentContent();