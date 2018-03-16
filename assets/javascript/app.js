'use strict';

$(document).ready(function(){

let correctAnswer = '';
const theQuestions= [
    {
    question:'Where is there always money?',
    choices: ['the bank','under the bed','the banana stand'],
    correctAnswer: 2,
    },

    {
    question:'What is Gob\'s preffered method of transportation?',
    choices: ['stair car', 'segway','skateboard'],
    correctAnswer: 1,
        },
    {
    question: 'Which pharmaceutical product was promoted by \'Dr. Funke\'s Natural Good-Time Family Band Solution\'?',
    choices: ['teamocil','acarbose','tylenol'] ,
    correctAnswer: 0,
        },
    {
    question: 'What does Michael find in the freezer in season 1?',
    choices: ['a lot of money','fox foot','dead dove (do not eat)'],
    correctAnswer: 2,
            },
    {
    question: 'At one point, Gob belonged to \'The Alliance of Magicians\'. What is their slogan?',
    choices: ['We demand to be taken seriously','Got magic?','Criss Angel sucks'],
    correctAnswer: 0,
            },
    {
    question:  'Who is Ann?',
    choices: ['Lucille\'s best friend','Her?','George Michael\'s roommate'
    ],
    correctAnswer: 1,
            },
    {
    question:  'What article of clothing is Tobias never without?',
    choices: ['Leather vest','Pirate Shirt','Denim Shorts'],
    correctAnswer: 2,
        }, 
    ]
let currentChoices = "";
let currentQuestion ="";
let chosenOne = theQuestions[Math.floor(Math.random() * theQuestions.length)]
//  'What condition does Lucille Two suffer from?',
// 'Who is STEVE HOLT\'S DAD?',  'Which Bluth sibling was adopted?'];
//star wars kid video

//get questions on page 
function questionDisplay (){
    currentQuestion = chosenOne.question;
    $('#questionTime').append(currentQuestion);
    //console.log(currentQuestion);   
}
questionDisplay();

//display answerchoices on page
function choicesDisplay (){
    for (let i = 0; i < 3; i++){
    currentChoices = chosenOne.choices[i];
    $('#answers').append(`<div> ${currentChoices} </div>`);
    console.log(currentChoices);
    }
}
choicesDisplay();

// $('#remainingTime').append(x);
})