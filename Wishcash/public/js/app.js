const menuToggler = document.querySelector(".Menu_button");
const navbar = document.querySelector(".navbar");
const collapsableMenu = document.querySelector(".collapsable_menu");


menuToggler.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
    if(navbar.classList.contains("show-menu")){
        collapsableMenu.style.maxHeight = collapsableMenu.scrollHeight + "px";
        
        setTimeout(() =>{
            collapsableMenu.style.overflow = "visible";
        }, 300
        )}
    else{
        collapsableMenu.style.maxHeight = "0px";
        collapsableMenu.style.overflow = "hidden";
        }

});

