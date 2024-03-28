var menuToggle = document.getElementById('menuToggle');


window.addEventListener("DOMContentLoaded", (event)=>{
    const button = document.getElementById('menuToggle');
    if(button){
        button.addEventListener('click', toggleMenu)
    }

})


function toggleMenu(){
    console.log('Cliquei no botao de hamburguer')
    var menu = document.querySelector('.menu');
    console.log(menu)
    menu.classList.toggle('show-menu')
}