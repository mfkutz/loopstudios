const botonOpenMenu = document.getElementById("open-menu");
const botonCloseMenu = document.getElementById("close-menu");
const openMenu = document.getElementById("mobile-menu");

botonOpenMenu.addEventListener("click", () => {
    openMenu.classList.remove("disabled");
});

botonCloseMenu.addEventListener("click", ()=>{
    openMenu.classList.add("disabled");
})

