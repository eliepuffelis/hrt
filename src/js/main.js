
var menu = document.getElementById("body");
var menu = document.getElementById("menu");
var menuMobile = document.getElementById("menu-mobile");
var darkOverlay = document.getElementById("menu-mobile-dark-overlay");
var menuOpen = false;

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
    menuOpen = true; 

}

function closeMenu() {
    menuMobile.style.visibility = 'hidden';
    menuMobile.style.right = '-100vw';
    darkOverlay.style.visibility = 'hidden'
    menuOpen = false;
}






