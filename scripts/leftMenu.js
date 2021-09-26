"use strict"

let leftMenu = document.querySelector(".left-menu ul")
let leftMenuElements = leftMenu.children

addMenuElementsEventListeners(leftMenuElements)

function  addMenuElementsEventListeners(menuElements) {
    for(let i = 0; i < menuElements.length; i++) {
        menuElements[i]
            .firstElementChild
            .addEventListener("click", () => openDropdown(menuElements[i]))
    }
}
function  closeDropdownElements(droppingOutElement){
    for(let i = 0; i < droppingOutElement.length; i++) {
        droppingOutElement[i].lastElementChild.style.display = "none"
    }
}
function openDropdown(menuElement) {
    let flag = menuElement.lastElementChild.style.display
    closeDropdownElements(leftMenuElements)
    menuElement.lastElementChild.style.display = (flag === "block") ? "none" : "block"
}