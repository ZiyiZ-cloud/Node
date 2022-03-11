const BASEURL = 'http://numbersapi.com';

const favNum = 5;
//1

// $.getJSON(`${BASEURL}/${favNum}/`)
//     .then(data => {
//         console.log(data, data.cards[0].value, 'of', data.cards[0].suit)
//         console.log(`${data.cards[0].value.toLowerCase()} of ${data.cards[0].suit.toLowerCase()}`)
//     })


async function getFact(num) {
    let p1Promise = await $.getJSON(`${BASEURL}/${num}?json`)

    let p1 = await p1Promise;

    console.log(`the fact for the number is : ${p1.text}`)
}

//2
// nums = [1, 4, 6]
async function getMultfacts(nums) {
    let data = await $.getJSON(`${BASEURL}/${nums}?json`)
    console.log(data)
}

//3

async function getFourfacts(num) {
    for (i = 0; i < 4; i++) {
        let numPromise = await $.getJSON(`${BASEURL}/${num}?json`)
        console.log(`${numPromise.text}`)
    }

}

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