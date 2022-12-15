const botonOpenMenu = document.getElementById("open-menu");
const botonCloseMenu = document.getElementById("close-menu");
const openMenu = document.getElementById("mobile-menu");
const main = document.getElementById("main");

botonOpenMenu.addEventListener("click", () => {
    openMenu.classList.remove("disabled");
    main-classList.add("disabled");
});

botonCloseMenu.addEventListener("click", ()=>{
    openMenu.classList.add("disabled");
    main-classList.remove("disabled");
})

