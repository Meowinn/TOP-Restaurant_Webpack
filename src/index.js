import {topBar, background, foot} from './home.js';
import './styles.css';
import menu from './menu.js';
import contact from './contact.js';
const content = document.getElementById('content');

content.appendChild(topBar());
content.appendChild(foot());
content.appendChild(background());

function tabs() {
const allList = document.querySelectorAll('button');
 allList[0].innerText = "Home";
 allList[1].innerText = "Menu";
 allList[2].innerText = "Contact Us";

 allList[0].addEventListener('click', function(){
   document.querySelector('#content').removeChild(document.querySelector('#content').lastElementChild);
   for (const all of allList) {
      all.style.color = 'white';
   }
   allList[0].style.color = 'rgb(228, 143, 64)';
   content.appendChild(background());
 });

 allList[1].addEventListener('click', function(){
   document.querySelector('#content').removeChild(document.querySelector('#content').lastElementChild);
   for (const all of allList) {
      all.style.color = 'white';
   };
    allList[1].style.color = 'rgb(228, 143, 64)';
    content.appendChild(menu());
 });

 allList[2].addEventListener('click', function() {
   document.querySelector('#content').removeChild(document.querySelector('#content').lastElementChild);
   for (const all of allList) {
      all.style.color = 'white';
   };
   allList[2].style.color = 'rgb(228, 143, 64)';
   content.appendChild(contact());
 });
};

tabs();













