// import { WSAVERNOTSUPPORTED } from "constants";


function writeCards(array, ocassion) {
    thankYouCard = []
    for (let i = 0; i < array.length; i ++) {
        thankYouCard.push(`Thank you, ${array[i]}, for the wonderful ${ocassion} gift!`);
    }
    return (thankYouCard)
}

writeCards();

function countDown(integer){
    while (integer > 0){
        console.log(integer)
        integer -= 1
    }
    console.log(integer)
}


