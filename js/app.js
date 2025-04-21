const mainImage = document.querySelector(".main__img")
const card = document.querySelector(".card")
const cardInfo = document.querySelector(".card_info")
const cardActions = document.querySelector(".card_actions")

function changeImg(path) {
    mainImage.setAttribute("src", path)
}


function showFullCard(){
    card.classList.toggle("big__card")
    cardInfo.classList.toggle("card__info")
    cardActions.classList.toggle("card__actions")
}