var isMenuOpened = false;

document.querySelector("#nav-menu-hamburger").addEventListener("click", ()=>{
    isMenuOpened = !isMenuOpened;
    UpdateMenu();
})

document.querySelector(".main-nav-dropdown-bg").addEventListener("click", ()=>{
    isMenuOpened = false;
    UpdateMenu();
})

UpdateMenu = ()=>{
    if (isMenuOpened){
        document.querySelector(".main-nav-dropdown-bg").style.display = "flex";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector("body").style.marginRight = "18px";
    }
    else{
        document.querySelector(".main-nav-dropdown-bg").style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
        document.querySelector("body").style.marginRight = "0";
    }
}