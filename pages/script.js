/* ***********************  mega menu*****************************/
let nav_toggle = document.querySelector('.nav-toggle');
let nav_toggle_icon = document.querySelector('.nav-toggle i');
let nav_menu = document.querySelector('.nav-menu');

nav_toggle.addEventListener('click',function () {
    nav_menu.classList.toggle('active');
    let isOpen = nav_menu.classList.contains('active');
    nav_toggle_icon.classList = isOpen ? 'fa fa-close' : 'fa fa-bars';

});


