
var siteWrapper = document.getElementById("site-wrapper");
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
var mobileMenu = document.getElementById("menu-mobile");
var mobileMenuDarkOverlay = document.getElementById("menu-mobile-dark-overlay");
var mobileMenuOpen = false;


// window.addEventListener('scroll', () => {

// if($(window).scrollTop() > 0)
//     navbar.style.backgroundColor = 'white'
// else
//     navbar.style.backgroundColor = 'transparent';
// },false);

function closeMobileMenu() {
    mobileMenu.style.right = '-100%';
    mobileMenuDarkOverlay.style.visibility = 'hidden';
    mobileMenuDarkOverlay.style.opacity = '0';
    mobileMenuOpen = false;
    siteWrapper.style.overflow = 'scroll';

}

function openMenu(){
    menu.style.left = '0';
    if(!mobileMenuOpen){
        mobileMenu.style.right = '0';
        mobileMenuOpen = true;
        mobileMenuDarkOverlay.style.visibility = 'visible';
        mobileMenuDarkOverlay.style.opacity = '0.7';
        siteWrapper.style.overflow = 'hidden';
        

    }
    else{
        mobileMenu.style.right = '-100%';
        mobileMenuOpen = false;
        mobileMenuDarkOverlay.style.visibility = 'hidden';
        mobileMenuDarkOverlay.style.opacity = '0';
        siteWrapper.style.overflow = 'scroll';

    }
    

    
}

function closeMenu(){
    menu.style.left = '100%';    
    siteWrapper.style.overflow = 'scroll';
    siteWrapper.style.scrollBehavior = 'smooth';
}

// function navbarWhite(){
//     navbar.style.backgroundColor = 'white';
// }

// function navbarTransparent(){
//     navbar.style.backgroundColor = 'transparent';
// }
