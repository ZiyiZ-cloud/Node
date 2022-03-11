const BASEURL = 'http://deckofcardsapi.com/api/deck';


//1

async function drawNew() {
    let response = await $.getJSON(`${BASEURL}/new/draw/`)
    console.log(response.cards[0].value)
    console.log(response.cards[0].suit)

}

//2

async function first() {
    let response = await $.getJSON(`${BASEURL}/new/draw`)
    let deckId = response.deck_id
    let value1 = response.cards[0].value
    let suit1 = response.cards[0].suit

    let second = await $.getJSON(`${BASEURL}/${deckId}/draw`)
    let value2 = second.cards[0].value
    let suit2 = second.cards[0].suit
    console.log(value1, suit1, value2, suit2)
}

//3

let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

async function draw() {
    let response = await $.getJSON(`${BASEURL}/new/shuffle/`)
    let deckId = response.deck_id;
    $btn.show();
    $btn.on('click', async function() {
        let data = await $.getJSON(`${BASEURL}/${deckId}/draw/`)
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (data.remaining === 0) $btn.remove();
    })
}
draw();



// //3
// let deckId = null;
// let $btn = $('button');
// let $cardArea = $('#card-area');

// $.getJSON(`${BASEURL}/new/shuffle/`).then(data => {
//     deckId = data.deck_id;
//     $btn.show();
// });

// $btn.on('click', function() {
//     $.getJSON(`${BASEURL}/${deckId}/draw/`).then(data => {
//         let cardSrc = data.cards[0].image;
//         let angle = Math.random() * 90 - 45;
//         let randomX = Math.random() * 40 - 20;
//         let randomY = Math.random() * 40 - 20;
//         $cardArea.append(
//             $('<img>', {
//                 src: cardSrc,
//                 css: {
//                     transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
//                 }
//             })
//         );
//         if (data.remaining === 0) $btn.remove();
//     });
// });




// //1
// $.getJSON(`${BASEURL}/${favNumber}?json`)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// //2
// let favNumbers = [1, 5, 10];
// $.getJSON(`${BASEURL}/${favNumbers}?json`)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// //3
// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON(`${BASEURL}/${favNumber}?json`);
//     })
// ).then(facts => {
//     facts.forEach(data => $('body').append(`<p>${data.text}</p>`));
// });