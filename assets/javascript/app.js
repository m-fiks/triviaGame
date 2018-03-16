'use strict';
let x = 76;
let y = ['a', 'b', 'c', 'd'];
let questionArray= ['What is the moon?', 'How much is it?', 'What is it all about?'];

$('#remainingTime').append(x);

//display randomly chosen question with answer options
let chosenOne = questionArray[Math.floor(Math.random() * questionArray.length)]
$('#questionTime').append(chosenOne);
$('#answers').append(`<div> ${y[0]}</div>`);
$('#answers').append(`<div> ${y[1]}</div>`);
$('#answers').append(`<div> ${y[2]}</div>`);
$('#answers').append(`<div> ${y[3]}</div>`);