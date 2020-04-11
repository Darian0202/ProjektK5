const burgerMenuButton = document.querySelector(".burger-menu-button");
burgerMenuButton.addEventListener("click", toggleBurgerMenu);
const burgerMenu = document.querySelector(".burger-menu");
let burgerMenuOpen = false;


function toggleBurgerMenu()
{
    burgerMenuOpen = !burgerMenuOpen;
    if (burgerMenuOpen) {
        burgerMenu.style.display = "block";
    } 
    else
    {
        burgerMenu.style.display = "none";
    }
}

const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", toggleContact);
const contactMenu = document.querySelector(".contact");
let contactMenuOpen = false;

function toggleContact()
{
    contactMenuOpen = !contactMenuOpen;
    if (contactMenuOpen) {
        contactMenu.style.display = "block";
    } 
    else
    {
        contactMenu.style.display = "none";
    }
}

