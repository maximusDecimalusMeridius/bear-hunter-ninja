function generateChoice() {
    switch(Math.floor(Math.random() * 3)){
        case 0:
            computerChoice = "Bear";
            computerCharacterNode.style.backgroundColor = "red";
            return("bear");

        case 1:
            computerChoice = "Hunter";
            computerCharacterNode.style.backgroundColor = "blue";
            return("hunter");

        case 2:
            computerChoice = "Ninja";
            computerCharacterNode.style.backgroundColor = "green";
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
        case ("win"):
            document.getElementById("wins").innerHTML = `${++winCount}`;
            document.getElementById("wins").classList.toggle("red-to-white-anim");
            setTimeout(() => {document.getElementById("wins").classList.toggle("red-to-white-anim");}, 400);
            break;
        case ("tie"):
            document.getElementById("ties").innerHTML = `${++tieCount}`;
            document.getElementById("ties").classList.toggle("red-to-white-anim");
            setTimeout(() => {document.getElementById("ties").classList.toggle("red-to-white-anim");}, 400);
            break;
        case ("loss"):
            document.getElementById("losses").innerHTML = `${++lossCount}`;
            document.getElementById("losses").classList.toggle("red-to-white-anim");
            setTimeout(() => {document.getElementById("losses").classList.toggle("red-to-white-anim");}, 400);
            break;
        default:
            break;
    }

}

// Variables
var userCharacter, computerCharacter;                   // Declare inputs
var winCount = 0, lossCount = 0, tieCount = 0;          // Initialize counters
var bearCount = 0, hunterCount = 0, ninjaCount = 0;          // Initialize counters
var lastClicked;

// Get elements
let greetingNode = document.getElementById("greetings");
let closeGreetingNode = document.getElementById("close-greeting");
let popUpMessageNode = document.getElementById("pop-up-message");
let popUpCoverNode = document.getElementById("pop-up-cover");
let popUpButtonNode = document.getElementById("pop-up-button");
let gameWindowTopNode = document.getElementById("game-window-top");
let backgroundNode = document.getElementById("background-image");
let playerOneCharacterNode = document.getElementById("player-one-pic");
let playerTwoCharacterNode = document.getElementById("#player-two img");
let computerCharacterNode = document.getElementById("player-two");
let statusMessage = document.getElementById("status-message");
let fightButton = document.getElementById("fight-button");

closeGreetingNode.addEventListener("click", () => {greetingNode.style.left = "-400px"});

fightButton.addEventListener("click", Fight);

popUpCoverNode.addEventListener("click", HidePopUp);
popUpButtonNode.addEventListener("click", HidePopUp);

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
            playerOneCharacterNode.src = "./assets/images/characters/bear/bear_0.png";
            playerOneCharacterNode.parentNode.style.backgroundColor = "rgba(255, 255, 255, .1)";
            return("bear");
        case ("hunter"): 
            playerOneCharacterNode.src = "./assets/images/characters/hunter/hunter_0.png";
            return("hunter");
        case ("ninja"):
            playerOneCharacterNode.src = "./assets/images/characters/ninja/ninja_0.png";
            return("ninja");

        default:
            break;
    }
}

function ChooseBackground(choice){
    // Current number of options per background
    const numberOfOptions = 4;
    let isTheSame = true;
    let lastIndex;

    switch (choice){

        case "forest":
            while (isTheSame){
                lastIndex = backgroundNode.src.charAt(backgroundNode.src.length - 5);
                backgroundNode.src = `./assets/images/backgrounds/forest/forest_${Math.floor(Math.random() * numberOfOptions)}.png`;
                if(backgroundNode.src.charAt(backgroundNode.src.length - 5) === lastIndex){
                    isTheSame = true;
                } else { isTheSame = false; }
            }
            break;

        case "lava":
            while (isTheSame){
                lastIndex = backgroundNode.src.charAt(backgroundNode.src.length - 5);
                backgroundNode.src = `./assets/images/backgrounds/lava/lava_${Math.floor(Math.random() * numberOfOptions)}.png`;
                if(backgroundNode.src.charAt(backgroundNode.src.length - 5) === lastIndex){
                    isTheSame = true;
                } else { isTheSame = false; }
            }
            break;

        case "grocery":
            while (isTheSame){
                lastIndex = backgroundNode.src.charAt(backgroundNode.src.length - 5);
                backgroundNode.src = `./assets/images/backgrounds/grocery/grocery_${Math.floor(Math.random() * numberOfOptions)}.png`;
                if(backgroundNode.src.charAt(backgroundNode.src.length - 5) === lastIndex){
                    isTheSame = true;
                } else { isTheSame = false; }
            }
            break;

        case "dh":
        while (isTheSame){
            lastIndex = backgroundNode.src.charAt(backgroundNode.src.length - 5);
            backgroundNode.src = `./assets/images/backgrounds/dh/dh_${Math.floor(Math.random() * numberOfOptions)}.png`;
            if(backgroundNode.src.charAt(backgroundNode.src.length - 5) === lastIndex){
                isTheSame = true;
            } else { isTheSame = false; }
        }
        break;

        default:
            break;
    }
    statusMessage.innerHTML = `Changing background to ${choice}...`;
}

function Fight(){
    countIt(whoWon(userCharacter, generateChoice()));
    console.log(winCount, tieCount, lossCount); 
}