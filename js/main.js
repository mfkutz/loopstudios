const botonOpenMenu = document.getElementById("open-menu");
const botonCloseMenu = document.getElementById("close-menu");
const openMenu = document.getElementById("mobile-menu");
const main = document.getElementById("main");

botonOpenMenu.addEventListener("click", () => {
    main.classList.add("disabled");
    openMenu.classList.remove("disabled");
});

botonCloseMenu.addEventListener("click", ()=>{
    openMenu.classList.add("disabled");
    main.classList.remove("disabled");
})

