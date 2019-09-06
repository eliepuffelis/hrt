
var body = document.getElementById("body");
var menu = document.getElementById("menu");
var menuMobile = document.getElementById("menu-mobile");
var darkOverlay = document.getElementById("menu-mobile-dark-overlay");
var menuOpen = false;

// document.location.href = String(document.location.href).replace("#/", "");

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
    menu.style.visibility = 'visible';
    menu.style.right = '0';
    menuMobile.style.visibility = 'visible';
    menuMobile.style.right = '0';
    darkOverlay.style.visibility = 'visible'
    body.style.overflow = 'hidden'
    menuOpen = true; 
}

function closeMenu() {
    menu.style.visibility = 'hidden';
    menu.style.right = '-100vw';
    menuMobile.style.visibility = 'hidden';
    menuMobile.style.right = '-100vw';
    darkOverlay.style.visibility = 'hidden'
    body.style.overflow = 'scroll';
    menuOpen = false;
}


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: true,
    header: '[navbar]',
    updateURL: false
});






