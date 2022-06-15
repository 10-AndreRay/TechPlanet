const btnMenu = document.querySelector(".btn-menu");
const menuMobile = document.querySelector(".menu-mobile");
const btnsMenu = document.querySelectorAll(".menu-mobile li");

function openCloseMenuMobile() {
    menuMobile.classList.toggle("hide");
};

for (let i = 0; i < btnsMenu.length; i++) {
    btnsMenu[i].addEventListener("click", openCloseMenuMobile);
};

btnMenu.addEventListener("click", openCloseMenuMobile);