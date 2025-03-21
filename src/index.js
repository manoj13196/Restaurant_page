import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './styles.css';

function clearContent(){
    document.getElementById('content').innerHTML='';
}

function addEventListeners(){
    document.querySelector(".home").addEventListener('click',()=>{
        clearContent();
        loadHome();
    });

    document.querySelector('.menu').addEventListener('click', () => {
        clearContent();
        loadMenu();
      });
    
      document.querySelector('.contact').addEventListener('click', () => {
        clearContent();
        loadContact();
      });
}


window.addEventListener('DOMContentLoaded',()=>{
    loadHome();
    addEventListeners();
});