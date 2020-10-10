burger = document.querySelector('.burger')
navlist = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
    
navlist.classList.toggle('v-class-resp');
rightNav.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');

})