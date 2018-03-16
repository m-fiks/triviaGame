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
    {
    question:  'What condition does Lucille Two suffer from?',
    choices: ['Vertigo','Alopecia','Diabetes'],
    correctAnswer: 0,
                }, 
    {
    question:  'Who is STEVE HOLT\'S dad?',
    choices: ['Oscar','Stan Sitwell','Gob'],
    correctAnswer: 2,
            }, 
    {
    question:  'Which Bluth sibling was adopted?',
    choices: ['Buster','Lindsay','Michael'],
    correctAnswer: 1,
            }, 
    ]
let currentChoices = "";
let currentQuestion ="";
let chosenOne = theQuestions[Math.floor(Math.random() * theQuestions.length)]

//star wars kid video

//get questions on page 
function questionDisplay (){
    currentQuestion = chosenOne.question;
    $('#questionTime').append(currentQuestion);
    //console.log(currentQuestion);   
};

//display answerchoices on page
function choicesDisplay (){
    for (let i = 0; i < 3; i++){
    currentChoices = chosenOne.choices[i];
    $('#answers').append(`<div> ${currentChoices} </div>`);
    //console.log(currentChoices);
    }
}

//first start game
const clickToStart = function() {
    choicesDisplay();
    questionDisplay();
    $('.btn-success').hide();
};

$('.btn-success').click(clickToStart);

// let delayButtonAlert = 0; 


//begin 30 second timer with each question
function timer(){
    let x=$('.c').attr('id');
    let c=x;
    $('.c').text(c);
    setInterval(function(){
        c--;
        if(c>=0){
            $('.c').text(c);
        }
        if(c==0){
            $('.c').text(x);
        }
    //run every second 
    },1000);
}

$('#questionTime').mouseenter(function() {
    timer();
});


// $('#remainingTime').append(x);
});