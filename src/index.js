import home from './home.js';
import about from './about.js';
import contact from './contact.js';
import menu from './menu.js'
import './styles.css';

const logo = document.querySelector('.logo');
const navBar = document.querySelector('.nav-bar');
const content = document.querySelector('#content');

content.appendChild(home());

logo.addEventListener("click", () => {
    content.innerHTML = '';
    content.appendChild(home());
})

navBar.addEventListener("click", (event) => {
    switch(event.target.id) {
        case 'nav-about':
            content.innerHTML = '';
            content.appendChild(about());
            break;
        case 'nav-menu':
            content.innerHTML = '';
            content.appendChild(menu());
            break;
        case 'nav-contact':
            content.innerHTML = '';
            content.appendChild(contact());
            break;
    }
})
