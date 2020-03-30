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