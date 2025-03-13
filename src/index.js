import home from './home.js';
// import about from './about.js';
// import contact from './contact.js';
import menu from './menu.js'
import './styles.css';

const navBar = document.querySelector('.nav-bar');
const content = document.querySelector('#content');

content.appendChild(menu());

