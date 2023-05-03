let hamburger = document.querySelector('.hamburger');
let cancel = document.querySelector('.cancel');
let icons = document.querySelector('.icons');
let navBar = document.querySelector('.menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.add('inactive');
    cancel.classList.remove('inactive');

});

cancel.addEventListener('click', ()=>{
    hamburger.classList.remove('inactive');
    cancel.classList.add('inactive')
});

icons.addEventListener('click', ()=>{
    navBar.classList.toggle('menu-active');
});





// future reference

// let navLink = document.querySelectorAll('.link');
// navLink.forEach(link => {
//     if(link.href === window.location.href){
//         link.setAttribute('aria-current', 'page')
//     }
// })


// const navLinkEls = document.querySelector('.link');
// const windowPathName = window.location.pathname;
// navLinkEls.forEach(navlinkEl => {
//    if(navlinkEl.href.includes(windowPathName)) {
//     navlinkEl.classList.add('active');
//    } 
// });