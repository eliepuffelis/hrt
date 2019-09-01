
var body = document.getElementById("body");
var menu = document.getElementById("menu");
var menuMobile = document.getElementById("menu-mobile");
var darkOverlay = document.getElementById("menu-mobile-dark-overlay");
var menuOpen = false;



/*
* menu functionality ==========================================================
*/
function menubars() {
    
    if(!menuOpen)
        openMenu();
    else
        closeMenu();
}

function openMenu(){
    menuMobile.style.visibility = 'visible';
    menuMobile.style.right = '0';
    darkOverlay.style.visibility = 'visible'
    body.style.overflow = 'hidden'
    menuOpen = true; 

}

function closeMenu() {
    menuMobile.style.visibility = 'hidden';
    menuMobile.style.right = '-100vw';
    darkOverlay.style.visibility = 'hidden'
    body.style.overflow = 'scroll';
    menuOpen = false;
}

/*
* link smooth scrolling ==========================================================
*/


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault()

//     $('html, body').animate(
//         {
//             scrollTop: $($(this).attr('href')).offset().top,
//         },
//         500,
//         'linear'
//     )
// })






