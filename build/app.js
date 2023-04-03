let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu-icon');
let menuItems = document.querySelectorAll('.menu li a');
let overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    menu.classList.contains('active') ? menuIcon.src = 'images/icon-close.svg' : menuIcon.src = 'images/icon-hamburger.svg';
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        menuIcon.src = 'images/icon-hamburger.svg';
    });
})