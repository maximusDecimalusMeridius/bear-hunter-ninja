// As a user, I want to play Rock, Paper, Scissors against an automated opponent.
// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
// As a user, I expect the computer to choose R, P, or S in return.
// As a user, I want the option to play again whether I win or lose.
// As a user, I want to see my total wins, ties, and losses after each round.

// Specifications
// Must use:
// alert()[Pop-up message with OK button]
// confirm()[Pop-up message with OK button and cancel]
// prompt()[text-input with OK and cancel button]
// methods to collect user input and display information to the user.

// The computer's selection must be random to ensure a fair game.
function generateChoice() {
    switch(Math.floor(Math.random() * 3)){
        case 0:
            computerChoice = "Bear";
            return("bear");

        case 1:
            computerChoice = "Hunter";
            return("hunter");

        case 2:
            computerChoice = "Ninja";
            return("ninja");

        default:
            alert("Oh node! Something went wrong!");    
            break;
    }
}

function whoWon(human, computer) {
console.log(human, computer);
    if(human === computer){
        return("tie");
    } else {
        switch (computer){
            case ("bear"):
                if(human === "hunter"){
                    outcomeMessage = "You shoot the bear *BANG* and win!!";
                    return("win");
                } else if (human === "ninja"){
                    outcomeMessage = "The bear overpowers you. You Lose :("
                    return("loss");
                }
                break;
                
            case ("hunter"):
                if(human === "bear"){
                    outcomeMessage = "Headshot, you lose :("
                    return("loss");
                } else if(human === "ninja") {
                    outcomeMessage = "Your ninja skills prevail! You win!!";
                    return("win");
                }
                break;
                    
            case ("ninja"):
                if(human === "bear"){
                    outcomeMessage = "You overpower the ninja and WIN!!";
                    return("win");
                } else if(human === "hunter"){
                    outcomeMessage = "You didn't hear the ninja. You lose.";
                    return("loss");
                }
                break;

            default:
                alert("Oh node! Something went wrong!");
                break;
        }
    }
}

function countIt(result) {
    switch (result){
        case ("Win!"):
            winCount++;
            break;
        case ("Tie"):
            tieCount++;
            break;
        case ("Loss"):
            lossCount++;
            break;
        default:
            break;
    }
}

function displayRecord() {
    
    alert(`
    Your choice: ${yourChoice}
    Computer choice: ${computerChoice}

    ${outcomeMessage}
    
    ============
     Scoreboard
    ============
    Wins:   ${winCount}
    Ties:   ${tieCount}
    Losses: ${lossCount}
    `
    );
}

// Variables
var userCharacter, computerCharacter;                   // Declare inputs
var winCount = 0, lossCount = 0, tieCount = 0;          // Initialize counters
var bearCount = 0, hunterCount = 0, ninjaCount = 0;          // Initialize counters
var playAgain = 1;                                      // Flag tracking whether or not a player plays the game once.
const validationArray = ["r","p","s"];

// Get elements
let popUpMessageNode = document.getElementById("pop-up-message");
let popUpCoverNode = document.getElementById("pop-up-cover");
let gameWindowTopNode = document.getElementById("game-window-top");
let playerCharacterNode = document.getElementById("player-one");
let statusMessage = document.getElementById("status-message");

function ShowPopUp() {
    popUpMessageNode.style.display = "flex";
    popUpCoverNode.style.display = "block";

}

function HidePopUp() {
    popUpMessageNode.style.display = "none";
    popUpCoverNode.style.display = "none";
}

function ChooseCharacter(choice){
    userCharacter = choice;
    statusMessage.innerHTML = `You picked ${choice}!!`;
    
    switch(choice){
        case ("bear"):
            playerCharacterNode.style.backgroundColor = "red";
            bearCount++;
            document.getElementById(`${choice}-picks`).innerHTML = `${bearCount}`
            break;

        case ("hunter"):
            playerCharacterNode.style.backgroundColor = "blue";    
            hunterCount++;
            document.getElementById(`${choice}-picks`).innerHTML = `${hunterCount}`
            break;

        case ("ninja"):
            playerCharacterNode.style.backgroundColor = "green";
            ninjaCount++;
            document.getElementById(`${choice}-picks`).innerHTML = `${ninjaCount}`
            break;

        default:
            break;
    }
}

function ChooseBackground(choice){
    switch (choice){
        case "forest":
            gameWindowTopNode.style.backgroundColor = "green";
            break;

        case "lava":
            gameWindowTopNode.style.backgroundColor = "blue";
            break;

        case "grocery":
            gameWindowTopNode.style.backgroundColor = "pink";
            break;

        default:
            break;
    }
    statusMessage.innerHTML = `Changing background to ${choice}...`;
}

function Fight(){
    console.log(whoWon(userCharacter, generateChoice()));
    
}

// Display welcome message to user explaining the rules
// Caution, disgusting spacing to bump to multiple lines in dialog box!!!
// if (confirm("Welcome to Browser RPS!  Click 'OK/Confirm' to Proceed                                   Click 'Cancel' to run away :'(")){
    
//     do{
    
//         // Read and store input from user
//         // Generate PC choice   
//         userCharacter = prompt("Please Select R, P, or S to signify your choice of rock, paper, or scissors");
//         while(!validationArray.includes(userCharacter) || userCharacter === null){
//             userCharacter = prompt("ERROR: Please select a VALID choice - R, P, or S to signify your choice of rock, paper, or scissors");
//         }
//         computerCharacter = generateChoice();
        
//         // Compare values and count
//         countIt(whoWon(userCharacter.toLowerCase(), computerCharacter));
        
//         // Display scoreboard
//         displayRecord();

//         if(!confirm("Would you like to play again?")){
//            playAgain = 0; 
//         }
//     } while (playAgain === 1);

// }
// else {

//     // Change goodbye message if user visits the page but doesn't play a round
//     var goodbyeMessage = document.getElementById("goodbye-message");
//     var newSpan = document.createElement("span");
//     var text = document.createTextNode("even though you didn't play :P");
//     newSpan.appendChild(text);
//     goodbyeMessage.appendChild(newSpan);

// }