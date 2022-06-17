let ps = 0
let cs = 0
const buttons = document.querySelectorAll('input')

function computerPlay(){
    var things = ['rock', 'paper', 'scissors'];
    var thing = things[Math.floor(Math.random()*things.length)];
    return thing
}

function playRound(playerSelection) {
    
    let computerSelection = computerPlay();
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') ||(playerSelection == 'paper' && computerSelection == 'rock')) {
    
        ps += 1
        result = ('win<br>      ' + playerSelection + ' beats ' + computerSelection + '<br>p score:' + ps + '<br>c score:' + cs)
        if (ps== 5) {
            result += '<br><br>You won the game! Reload the page to play again'
        }
    }
    else if (playerSelection == computerSelection){
        result = ('tie      ' + '<br>p score:' + ps + '<br>c score:' + cs)
    }
    else {
        cs += 1
        result = ('lose<br>            ' + playerSelection + ' lost to ' + computerSelection + '<br>p score:' + ps + '<br>c score:' + cs)

        if (cs == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
        }
    }
    document.getElementById('result').innerHTML = result
    document.getElementById('playerc').innerHTML = playerSelection
    document.getElementById('compc').innerHTML = computerSelection
    return
}
  



buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        playRound(button.value)
    })
})

buttons.forEach(button =>{
    
    button.addEventListener('click', ()=>{
        const bgc = button.style.backgroundColor;
        if (bgc === 'green') {
            button.style.backgroundColor = 'yellow';
            button.style.color = 'black';
            
        } else {
            button.style.backgroundColor = 'green';
            button.style.color = 'white';
        }
        
    })
})