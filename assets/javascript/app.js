'use strict';

$(document).ready(function(){
$('.timer').hide();

let playerChoice='';
let correctAnswer = '';
const theQuestions= [
    {
    question:'Where is there always money?',
    choices: ['the bank','under the bed','the banana stand'],
    correctAnswer: 'the banana stand',
    },

    {
    question:'What is Gob\'s preffered method of transportation?',
    choices: ['stair car', 'segway','skateboard'],
    correctAnswer: 'segway',
        },
    {
    question: 'Which pharmaceutical product was promoted by \'Dr. Funke\'s Natural Good-Time Family Band Solution\'?',
    choices: ['teamocil','acarbose','tylenol'] ,
    correctAnswer: 'teamocil',
        },
    {
    question: 'What does Michael find in the freezer in season 1?',
    choices: ['a lot of money','fox foot','dead dove (do not eat)'],
    correctAnswer: 'dead dove (do not eat)',
            },
    {
    question: 'At one point, Gob belonged to \'The Alliance of Magicians\'. What is their slogan?',
    choices: ['We demand to be taken seriously','Got magic?','Criss Angel sucks'],
    correctAnswer: 'We demand to be taken seriously',
            },
    {
    question:  'Who is Ann?',
    choices: ['Lucille\'s best friend','Her?','George Michael\'s roommate'
    ],
    correctAnswer: 'Her?',
            },
    {
    question:  'What article of clothing is Tobias never without?',
    choices: ['Leather vest','Pirate Shirt','Denim Shorts'],
    correctAnswer: 'Denim Shorts',
        },
    {
    question:  'What condition does Lucille Two suffer from?',
    choices: ['Vertigo','Alopecia','Diabetes'],
    correctAnswer: 'Vertigo',
                }, 
    {
    question:  'Who is STEVE HOLT\'S dad?',
    choices: ['Oscar','Stan Sitwell','Gob'],
    correctAnswer: 'Gob',
            }, 
    {
    question:  'Which Bluth sibling was adopted?',
    choices: ['Buster','Lindsay','Michael'],
    correctAnswer: 'Lindsay',
            }, 
    ]
let currentChoices = "";
let currentQuestion ="";
let chosenOne = theQuestions[Math.floor(Math.random() * theQuestions.length)]

//star wars kid video

let startOver = function (){

}

//hide main trivia screen when answer is clicked
function choiceMade (){
    $('#questionTime').hide()
    $('.timer').hide()
    $('#answers').hide()
    $('.c').hide()
};

$('h1').click(choiceMade);



//get questions on page 
function questionDisplay (){
    currentQuestion = chosenOne.question;
    $('#questionTime').append(currentQuestion);
    //console.log(currentQuestion);   
};

//display answerchoices on page
function choicesDisplay (){
    for (let i = 0; i < 3; i++){
    currentChoices = chosenOne.choices;
    $('#answer1').text(currentChoices[0]);
    $('#answer2').text(currentChoices[1]);
    $('#answer3').text(currentChoices[2]);
    //console.log(chosenOne.correctAnswer);
    }
}

//first start game
const clickToStart = function() {
    $('.timer').show();
    choicesDisplay();
    questionDisplay();
    $('.btn-success').hide();
};

$('.btn-success').click(clickToStart); 

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


//click on choices function
$('#answers').click(function(e) {
    let playerChoice = $(event.target).text();
    $(event.target).css('color', 'purple');
    // console.log(playerChoice);
    // console.log(chosenOne.correctAnswer);

    //compare playerChoice to correct answer
    if (playerChoice === chosenOne.correctAnswer){
        console.log('yay good job!');
        choiceMade();
        winner();
    } else if (playerChoice !== chosenOne.correctAnswer){
        console.log('loser');
        choiceMade();
        loser();
    }
});

//win and lose function
function winner (){
    $(event.target).css('color', 'green');
    $('.main-col').append('<div> "Well, that was a freebie" </div>')
    $('.main-col').append(`<div> "Nice job! <br> The answer was: ${chosenOne.correctAnswer}" </div>`)
    $('.main-col').append('<div><img src="./assets/images/party.gif"></img>  </div>')
};

 function loser (){
    $('.main-col').append('<div> "You\'ve made a huge mistake" </div>')
};


});