'use strict';

$(document).ready(function(){
$('.timer').hide();

//variables
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

    let playerChoice="";
    let currentChoices = [];
    let currentQuestion ="";
    let currentQuestionz = [];
    let chosenOne = "";
    let c;
    let timerVariable;


//initial start game
function clickToStart() {
    $('.timer').show();
    questionDisplay();
    choicesDisplay();
    $('.btn-success').hide();
    timer();
};

$('.btn-success').click(clickToStart); 

//reset to next question
function questionReset () {
    //move already asked question to new array -- allowing next item to become the 0 index
    currentQuestionz = theQuestions.shift();
    console.log(currentQuestionz)
    chosenOne = "";
    timer();
    $('.countdown').show();
    questionDisplay();
    choicesDisplay();
};

//get questions on page 
function questionDisplay (){
    chosenOne = theQuestions[0].question
    console.log(theQuestions[0].question)
    $('#questionTime').text(chosenOne);
    // console.log(chosenOne);
};

//display answerchoices on page
function choicesDisplay (){
    currentChoices = theQuestions[0].choices;
    console.log(theQuestions[0].choices)
    $('#answer1').text(currentChoices[0]);
    $('#answer2').text(currentChoices[1]);
    $('#answer3').text(currentChoices[2]);
};

//begin 30 second timer with each question
function timer(){
    let x=$('.countdown').attr('id');
    c=x;
    // console.log(c)
    $('.countdown').text(c);
    timerVariable= setInterval(function(){
        c--;
        if(c>=0){
            $('.countdown').text(c);
        }if(c===0){
        $('.countdown').text(x);
        timesUp();
        }
    //run every second 
    },1000);
}

//win and lose function
function winner () {
    // playerChoice="";
    // $(event.target).css('color', 'green');
    $('#resultPlace').append(`<div id="resultArea"> Nice job! <br> The answer was: ${theQuestions[0].correctAnswer} </div> <div> <img src="./assets/images/happy.gif"></img> </div>`)
    $('#resultPlace').append(`<div style="color:white"> ' '</div>`)
};

 function loser (){
    // playerChoice="";
    $('#resultPlace').append(`<div> You\'ve made a huge mistake  <br> The correct answer was: ${theQuestions[0].correctAnswer} </div>  <div><img src="./assets/images/george-michael.gif"></img>`)
    $('#resultPlace').append(`<div style="color:white"> ' '  </div>`)
};

//timer runs out
function timesUp () {
    // playerChoice="";
    clearInterval(timerVariable);
    $('#resultPlace').append(`<div> You ran out of time </div> <div> <br> The correct answer was: ${theQuestions[0].correctAnswer} </div> <img src="./assets/images/darkness.gif"></img> </div>`)
    $('#resultPlace').append(`<div style="color:white"> ' '  </div>`)
    choiceMade();
};


//if player makes a choice
$('#answers').click(function(e) {
    clearInterval(timerVariable);
    playerChoice = $(event.target).text();
    // $(event.target).css('color', 'purple');
    // console.log(playerChoice);
    // console.log(chosenOne.correctAnswer);

    //compare playerChoice to correct answer
    if (playerChoice === theQuestions[0].correctAnswer){
        // console.log('yay good job!');
        choiceMade();
        winner();
    } else if (playerChoice !== theQuestions[0].correctAnswer){
        // console.log('loser');
        choiceMade();
        loser();
        };
    });

    
//hide main trivia screen
function choiceMade () {
    // console.log('we made it!');
    $('#questionTime').empty()
    $('#answer1').empty()
    $('#answer2').empty()
    $('#answer3').empty()
    $('.timer').hide()
    $('.countdown').hide()
    $('.countdown').empty();
    windowTimeout();
};

//display next question
function windowTimeout (){
    setTimeout(function(){ 
    $('#resultPlace').empty();
    questionReset();
}, 4000);
}

//end game


});