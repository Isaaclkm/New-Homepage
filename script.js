let menu = document.querySelector('.pop-menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');//changes the 3 bars to an X
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');//changes the X bars to an 3 when scrolling
    navbar.classList.remove('active');
}