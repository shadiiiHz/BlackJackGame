//Variables
let cards = []
let sum = 0 
let message = ""

let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// creat an object
let player = {
    name: "shadi" ,
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//note1 : let sumEl = document.querySelector("#sum-el") //css selector
//note2 : let sumEl = document.querySelector(".sum-el") //css selector and you must change id to class in html file
let cardEl = document.getElementById("card-el")
//Functions
function getRandomCard(){
    let randomNumber = Math.floor(Math.random * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1 ){
        return 11
    }else{
        return randomNumber
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: " 
    for(let i = 0 ; i < cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}

