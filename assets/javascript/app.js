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
    let chosenOne = "";

//star wars kid video

//initial start game
function clickToStart() {
    $('.timer').show();
    questionDisplay();
    choicesDisplay();
    $('.btn-success').hide();
};

$('.btn-success').click(clickToStart); 

//hide main trivia screen
function choiceMade (){
    $('#questionTime').empty()
    $('.timer').empty()
    $('#answers').empty()
    $('.c').hide()
    windowTimeout();
};

// reset to next question
function questionReset () {
    timer();
    questionDisplay();
    choicesDisplay();
    chosenOne = "";
};

// //get next question
// function nextQuestion() {

// }

//get questions on page 
function questionDisplay (){
    chosenOne = theQuestions[Math.floor(Math.random() * theQuestions.length)]
    currentQuestion = chosenOne.question;
    $('#questionTime').text(`${currentQuestion}`);
    currentQuestion++;
    console.log(chosenOne);
};

//display answerchoices on page
function choicesDisplay (){
    currentChoices = chosenOne.choices;
   //console.log(currentChoices)
    $('#answer1').text(currentChoices[0]);
    $('#answer2').text(currentChoices[1]);
    $('#answer3').text(currentChoices[2]);
    //console.log(currentChoices);
}

//begin 30 second timer with each question
function timer(){
    let x=$('.c').attr('id');
    let c=x;
    // console.log(c)
    $('.c').text(c);
    setInterval(function(){
        c--;
        if(c>=0){
            $('.c').text(c);
        }
        if(c==0){
            $('.c').text(x);
            choiceMade();
            timesUp();
        }
    //run every second 
    },1000);

}

//begin 30 sec timer 
$('#questionTime').mouseenter(function() {
    timer();
});

//win and lose function
function winner (){
    $(event.target).css('color', 'green');
    $('#resultPlace').append(`<div id="resultArea"> Nice job! <br> The answer was: ${chosenOne.correctAnswer} </div>`)
    $('#resultPlace').append('<div><img src="./assets/images/happy.gif"></img> </div>')
    $('#resultPlace').append(`<div style="color:white"> ' '</div>`)
};

 function loser (){
    $('#resultPlace').append('<div> You\'ve made a huge mistake </div>')
    $('#resultPlace').append(`<div> <br> The correct answer was: ${chosenOne.correctAnswer} </div>`)
    $('#resultPlace').append('<div><img src="./assets/images/george-michael.gif"></img> </div>')
    $('#resultPlace').append(`<div style="color:white"> ' '  </div>`)
};

//timer runs out
function timesUp () {
    $('#resultPlace').append('<div> You ran out of time </div>')
    $('#resultPlace').append(`<div> <br> The correct answer was: ${chosenOne.correctAnswer}" </div>`)
    $('#resultPlace').append('<div><img src="./assets/images/darkness.gif"></img> </div>')
    $('#resultPlace').append(`<div style="color:white"> ' '  </div>`)
};

//display next question
function windowTimeout (){
    let switchPage = setTimeout(function(){ 
        $('#resultPlace').hide();
        // clickToStart();
        $('h1').click(clickToStart); 
    }, 5000);
}

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

});