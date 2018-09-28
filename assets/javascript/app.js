$(document).ready(() => {

$('.timer').hide();
//questions
const theQuestions= [
    {
    question:'Where is there always money?',
    choices: ['the bank','under the bed','the banana stand'],
    correctAnswer: 'the banana stand',
    gif: "./assets/images/banstand.gif"
    },

    {
    question:'What is Gob\'s preffered method of transportation?',
    choices: ['stair car', 'segway','skateboard'],
    correctAnswer: 'segway',
    gif: "./assets/images/segway.gif"
        },
    {
    question: 'Buster is a graduate of the Milford School. What is the school\'s motto?',
    choices: ['Hazard Zet Forward','Children should be neither seen nor heard','A building with four walls and tomorrow inside'] ,
    correctAnswer: 'Children should be neither seen nor heard',
    gif: "./assets/images/milford.gif"
        },
    {
    question: 'What does Michael find in the freezer in season 1?',
    choices: ['a lot of money','fox foot','dead dove (do not eat)'],
    correctAnswer: 'dead dove (do not eat)',
    gif: "./assets/images/dove.gif"
            },
    {
    question: 'At one point, Gob belonged to \'The Alliance of Magicians\'. What is their slogan?',
    choices: ['We demand to be taken seriously','Got magic?','Criss Angel sucks'],
    correctAnswer: 'We demand to be taken seriously',
    gif: "./assets/images/magic.gif"
            },
    {
    question:  'Who is George Michael\'s first girlfriend?',
    choices: ['Ann Veal','Her?','Rebel Alley'],
    correctAnswer: 'Her?',
    gif: "./assets/images/her.gif"
            },
    {
    question:  'What article of clothing is Tobias never without?',
    choices: ['Leather vest','Pirate Shirt','Denim Shorts'],
    correctAnswer: 'Denim Shorts',
    gif: "./assets/images/dozens.gif"
        },
    {
    question:  'What condition does Lucille Two suffer from?',
    choices: ['Vertigo','Alopecia','Diabetes'],
    correctAnswer: 'Vertigo',
    gif: "./assets/images/vertigo.gif"
                }, 
    {
    question:  'Who is STEVE HOLT\'S dad?',
    choices: ['Oscar','Stan Sitwell','Gob'],
    correctAnswer: 'Gob',
    gif: "./assets/images/holt.gif"
            }, 
    {
    question:  'Which Bluth sibling was adopted?',
    choices: ['Buster','Lindsay','Michael'],
    correctAnswer: 'Lindsay',
    gif: "./assets/images/lindsay.gif"
            }, 
    ];

//variables
let playerChoice="";
let currentChoices = [];
let currentQuestion ="";
let currentQuestionz = [];
let chosenOne = "";
let timerVariable;
let winCounter=0;
let loseCounter=0;

//initial start game
function clickToStart() {
    $('.timer').show();
    $('.countdown').show();
    questionDisplay();
    choicesDisplay();
    $('.btn-success').hide();
    timer();
    $('#answers').show();
    $('#win-or-lose').empty();
};

$('.btn-success').click(clickToStart); 

//reset to next question
function questionReset () {
    //move already asked question to new array -- allowing next item to become the 0 index
    currentQuestionz.push(theQuestions.shift());
    console.log(currentQuestionz)
    chosenOne = "";
    timer();
    $('.timer').show();
    $('.countdown').show();
    questionDisplay();
    choicesDisplay();
};

//get questions on page 
function questionDisplay (){
    if (theQuestions.length == 0){
        // alert('the end');
        $('.btn-success').show();
        endGame();
    } else if (theQuestions.length > 0){
    currentQuestion = theQuestions[0];
    chosenOne = currentQuestion.question;
    $('#questionTime').text(chosenOne);
    }
};

//display answerchoices on page
function choicesDisplay (){
    currentChoices = currentQuestion.choices;
    console.log(currentChoices)
    $('#answer1').text(currentChoices[0]);
    $('#answer2').text(currentChoices[1]);
    $('#answer3').text(currentChoices[2]);
};

//begin 30 second timer with each question
function timer(){
    let timer=$('.countdown').attr('id');
    // console.log(c)
    $('.countdown').text(timer);
    timerVariable= setInterval(() => {
        timer--;
        if(timer > 0){
            $('.countdown').text(timer);
        }else {
        $('.countdown').text(timer);
        timesUp();
        }
    //run every second 
    },1000)
}

//win and lose function
function winner () {
    // playerChoice="";
    // $(event.target).css('color', 'green');
    $('#resultPlace').append(`<div id="resultArea"> Nice job! <br> The answer was: ${currentQuestion.correctAnswer} </div> <div><img src="${currentQuestion.gif}"></img> </div>`)
    $('#resultPlace').append(`<div style="color:white"> ' '</div>`)
    winCounter++;
    //console.log(winCounter)
};

 function loser (){
    // playerChoice="";
    $('#resultPlace').append(`<div> You\'ve made a huge mistake  <br> The correct answer was: ${currentQuestion.correctAnswer} </div>  <div><img src="${currentQuestion.gif}"></div>`)
    $('#resultPlace').append(`<div style="color:white"> ' '  </div>`)
    loseCounter++;
    //console.log(loseCounter)
};

//timer runs out
function timesUp () {
    // playerChoice="";
    clearInterval(timerVariable);
    $('#resultPlace').append(`<div> You ran out of time </div> <div> <br> The correct answer was: ${currentQuestion.correctAnswer} </div> <img src="${currentQuestion.gif}"></img> </div>`)
    $('#resultPlace').append(`<div style="color:white"> ' '  </div>`)
    choiceMade();
    loseCounter++;
    //console.log(loseCounter)
};

//if player makes a choice
$('#answers').click(function(e) {
    //end game
// console.log(typeof(theQuestions));
    clearInterval(timerVariable);
    playerChoice = $(event.target).text();
    // $(event.target).css('color', 'purple');
    // console.log(playerChoice);
    // console.log(chosenOne.correctAnswer);

    //compare playerChoice to correct answer
    if (playerChoice === currentQuestion.correctAnswer){
        // console.log('yay good job!');
        choiceMade();
        winner();
    } else if (playerChoice !== currentQuestion.correctAnswer){
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
    setTimeout(() => { 
    $('#resultPlace').empty();
    questionReset();
}, 3000);
}

//endgame function
function endGame(){
    clearInterval(timerVariable);
    $('.timer').hide()
    $('.countdown').hide()
    // $('.countdown').empty();
    $('#answers').hide();
    $('#win-or-lose').text(`FINAL SCORE: ${winCounter}/10`);
    $('#win-or-lose').append(`<div> Play again? </div>`);
    //repopulate array??
}

});