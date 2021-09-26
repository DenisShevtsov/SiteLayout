"use strict"

let sliderId = 1
let onSlide = false
showSlides(sliderId)

setInterval(() => {
    if(!onSlide) { showSlides(++sliderId) }
}, 4000)

let sliderContainer = document.querySelector(".slider-container")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")


sliderContainer.addEventListener("mouseover", () => onSlide = true)
sliderContainer.addEventListener("mouseout", () => onSlide = false)

next.addEventListener("click", () => showSlides(++sliderId))
prev.addEventListener("click", () => showSlides(--sliderId))

function showSlides(n) {
    let slides = document.querySelectorAll(".slides")
    if (n > slides.length) { sliderId = 1 }
    if (n < 1) { sliderId = slides.length }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    slides[sliderId-1].style.display = "block"
}