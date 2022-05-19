function ageInDays()
{
    var birthyear = prompt('What year were you born? ');
    var ageInDayss = (2020 - birthyear) * 365
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function generateCat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'cat1.jpg';
    div.appendChild(image);
}

function rpsGame(yourChoice)
{
    humanChoice = yourChoice.id;
    console.log(humanChoice);
    botChoice = intToChoice(random_int())
    console.log(botChoice);
    winner = decideWinner(humanChoice, botChoice);
    console.log(winner[0]);
    message = finalMessage(winner);
    console.log(message['message']);
    display = rpsFrontEnd(humanChoice, botChoice, message)
}

function random_int()
{
    return Math.floor(Math.random() * 3);
}

function intToChoice(integer)
{
    return ['rock', 'paper', 'scissors'][integer];
}

function decideWinner(yourChoice, computerChoice)
{
    var choices = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    let yourScore = choices[yourChoice][computerChoice];
    let computerScore = choices[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore])
{
    if (yourScore === 1)
    {
        return {'message': 'You won!', 'color': 'green'}
    }
    if (yourScore === 0.5)
    {
        return {'message': 'You tied!', 'color': 'orange'}
    }
    if (yourScore === 0)
    {
        return {'message': 'You lost!', 'color': 'red'}
    }
}

function rpsFrontEnd(humanChoice, botChoice, message)
{
    document.getElementById('rock').remove;
    document.getElementById('paper').remove;
    document.getElementById('scissors').remove;

    var images = {
        'rock' : document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    var div = document.getElementById('flex-box-div');

    humanElement = "<img src='" + images[humanChoice] + "' height= 150 width= 150 style'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    botElement = "<img src='" + images[botChoice] + "' height= 150 width= 150 style'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    displaMessage = "<h1 style='color: "+ message['color'] +"; font-size: 60px; padding: 30px;'>" + message['message'] +"<h1>";

    div.innerHTML = humanElement + displaMessage + botElement;

}


var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy) {
    if(buttonThingy.value === 'red') {
        buttonsRed();
    }

    else if(buttonThingy.value === 'green') {
        buttonsGreen();
    }

    else if(buttonThingy.value === 'reset') {
        buttonColorReset();
    }

    else if(buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset() {
    for(let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    for(let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[randomNumber]);
    }
}
