// Code your solutions in this file
// for(let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gift){
//     for(let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow`);
//         debugger
//     }
//     return gifts
// }

// wrapGifts(gifts);
function writeCards(names,eventName){
    let messageContainer = []
    let newMessage;
    for(let i = 0; i < names.length; i++){
        newMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        messageContainer.push(newMessage)  
    }
    
    console.log(messageContainer)
    return messageContainer
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(numberProvided){
    let number = 0
    while (numberProvided >= number){
        console.log(numberProvided)
        numberProvided = numberProvided-1
        
    }
    return numberProvided
}
countDown(12)
