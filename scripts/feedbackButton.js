"use strict"

let feedbackOpenButton = document.querySelector("#feedback-ref")
let feedbackCloseButton = document.querySelector("#close")
let feedbackSendButton = document.querySelector("#send")
let feedbackContainer = document.querySelector(".feedback")
let feedbackInputs = document.querySelectorAll(".feedback-input")


feedbackOpenButton.addEventListener("click", () => { openFeedbackContainer() })
feedbackCloseButton.addEventListener("click", () => { closeFeedbackContainer() })
feedbackSendButton.addEventListener("click", () => {
    if (checkFillingInputs(feedbackInputs)) {
        alert("Сообщение отправлено")
        closeFeedbackContainer()
    }
})
addFeedbackInputEventListeners(feedbackInputs)

function openFeedbackContainer() {
    feedbackContainer.style.display = "block"
}

function closeFeedbackContainer() {
    feedbackContainer.style.display = "none"
}
function  addFeedbackInputEventListeners(inputElements) {
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].addEventListener("focus", () => cleanInput(inputElements[i]))
    }
}

function cleanInput(input) {
    input.style.color = "#000000"
    input.classList.remove("input-error")
    input.value = ""
}

function checkFillingInputs(inputElements) {
    let flag = true;
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value === "" || inputElements[i].value === "Поле обязательно для заполнения") {
            inputElements[i].classList.add("input-error")
            inputElements[i].value = "Поле обязательно для заполнения"
            inputElements[i].style.color = "#f75757"
            flag = false
        }
    }
    return flag
}

//placeholder="Поле обязательно для заполнения"