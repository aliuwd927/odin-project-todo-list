import {leftContent} from './modules/leftside';
import {input} from './modules/input';
import {rightContent} from './modules/rightside';
import { projects } from './modules/projects';


 function componentContent() {
  leftContent();
  input();
  projects();
  rightContent();
 };
 
 componentContent();