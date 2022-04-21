let ps = 0
let cs = 0
const buttons = document.querySelectorAll('input')

function computerPlay(){
    var things = ['Rock', 'Paper', 'Scissor'];
    var thing = things[Math.floor(Math.random()*things.length)];
    return thing
}

function playRound(playerSelection) {
    
    let computerSelection = computerPlay();
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    
        ps += 1
    result = ('win ' + playerSelection + ' beats ' + computerSelection + '<br>pscore:' + ps + '<br>cscore:' + cs)
        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
        }
    }
    else if (playerSelection == computerSelection){
        result = ('tie ' + '<br>pscore:' + ps + '<br>cscore:' + cs)
    }
    else {
        cs += 1
        result = ('lose ' + playerSelection + ' lost to ' + computerSelection + '<br>pscore:' + ps + '<br>cscore:' + cs)

        if (cs == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
        }
    }
    document.getElementById('result').innerHTML = result
    return
}
  



buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})