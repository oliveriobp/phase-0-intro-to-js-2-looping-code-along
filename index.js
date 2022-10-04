/*
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"]
function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
}
wrapGifts(gifts)
*/

const names = ["Oli", "Mack", "Doug"]
const event = "birthday"

function writeCards(names, event) {
    const messages = []
    for (let count = 0; count < names.length; count++) {
        messages.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!`)
    }
    return(messages)
}
writeCards(names)

const positiveInteger = 10

function countDown(positiveInteger) {
    for(let i = positiveInteger; i >= 0; i--) {
        console.log(i)
    }
}