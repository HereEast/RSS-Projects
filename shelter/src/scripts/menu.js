console.log("Menu");

const menuButton = document.querySelector(".burger__button");
const menu = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".nav__link");


menuButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", hideMenu);

[...menuLinks].forEach(link => {
    link.addEventListener("click", hideMenu);
})


// Toggle Menu
function toggleMenu(e) {
    const burgerIcon = e.target.closest("button");

    burgerIcon.classList.toggle("burger--opened");
    menu.classList.toggle("menu--opened");
    overlay.classList.toggle("overlay--opened");
    document.body.classList.toggle("scroll--disabled");
}

// Hide Menu
function hideMenu() {
    menuButton.classList.remove("burger--opened");
    menu.classList.remove("menu--opened");
    overlay.classList.remove("overlay--opened");
    document.body.classList.remove("scroll--disabled");
}