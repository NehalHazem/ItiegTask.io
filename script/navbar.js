const menuBtn = document.querySelector('.menu-btn'),
    menu = document.querySelector('.menu'),
    menuNav = document.querySelector('.menu-nav'),
    menuItem = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    menuItem.forEach(item => item.classList.toggle('show'));
}