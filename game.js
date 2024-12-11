let rollingSound = new Audio('rpg-dice-rolling-95182.mp3');
let winSound = new Audio('winharpsichord-39642.mp3');

// Red player's position
let p1sum = 0;

// Global flag to track if a question is active
let questionActive = false;

let gridText = [
    "", // 0 (Unused)
    "Sarpanch, Let's Begin!", // 1
    "", // 2
    "", // 3
    "", // 4
    "", // 5
    "Offer incentives for growth of cotton industries", // 6
    "", // 7
    "Skip a Panchayat Meeting (Skip a Turn)", // 8
    "", // 9
    "", // 10
    "", // 11
    "", // 12
    "", // 13
    "", // 14
    "", // 15
    "", // 16
    "", // 17
    "", // 18
    "Impose Taxes", // 19
    "Provide Free Legal Aid", // 20
    "", // 21
    "", // 22
    "Unequal Pay for Men and woman", // 23
    "", // 24
    "", // 25
    "Equitable distribution of resources", // 26
    "", // 27
    "",//28
    "Exclude workers from the management of industries", // 29
    "", // 30
    "", // 31
    "", // 32
    "", // 33
    "", // 34
    "", // 35
    "", // 36
    "", // 37
    "", // 38
    "Set up a school for villagers ", // 39
    "Neglect early childhood care ", // 40
    "", // 41
    "", // 42
    "", // 43
    "", // 44
    "Neglect public health", // 45
    "", // 46
    "", // 47
    "Promote degradation of village, forest & wildlife", // 48
    "", // 49
    "Promote economic interest of backward classes", // 50
    "", // 51
    "", // 52
    "", // 53
    "", // 54
    "", // 55
    "", // 56
    "", // 57
    "", // 58
    "", // 59
    "", // 60
    "Promote alcohol in the village", // 61
    "Organize a village Panchayat", // 62
    "", // 63
    "", // 64
    "", // 65
    "", // 66
    "", // 67
    "", // 68
    "Restrict the formation of a co-operative society", // 69
    "", // 70
    "", // 71
    "", // 72
    "Separate Judicial Powers from Executive Powers", // 73
    "", // 74
    "Preservation of village heritage ", // 75
    "",//76
    "",//77
    "",//78
    "",//79
    "",//80
    "",//81
    "",//82
    "",//83
    "",//84
    "Allow politics to infulence decisions of the judges ",//85
    "",//86
    "",//87
    "",//88
    "",//89
    "",//90
    "",//91
    "",//92
    "",//93
    "Make discriminatory laws for the villagers",//94
    "", // 95
    "",//96
    "",//97
    "",//98
    "Encourage conflict and insecurity amongst the villages",
    "The Best Sarpanch" // 100
];

// Function to handle ladders
function handleLadder(player, destination) {
    setTimeout(() => {
        alert(`Ladder! Climbing up to position ${destination}.`);
        p1sum = destination; // Update the player's position
        updatePlayerPosition(player, p1sum, 0); // Update player visually
    }, 500);
}

// Function to handle snakes
function handleSnake(player, destination) {
    setTimeout(() => {
        alert(`Snake! Sliding down to position ${destination}.`);
        p1sum = destination; // Update the player's position
        updatePlayerPosition(player, p1sum, 0); // Update player visually
    }, 500);
}

// Function to update the player's position visually
function updatePlayerPosition(player, position, correction) {
    document.getElementById(player).style.transition = `linear all .5s`;

    if (position < 10) {
        // For positions 1-9
        document.getElementById(player).style.left = `${(position - 1) * 62}px`;
        document.getElementById(player).style.top = `${-0 * 62 - correction}px`;
    } else if (position === 100) {
        // Winning condition
        winSound.play();
        alert(`${player} Won!!`);
        location.reload();
    } else {
        // For positions 10-99
        let numarr = Array.from(String(position));
        let n1 = parseInt(numarr.shift());
        let n2 = parseInt(numarr.pop());

        if (n1 % 2 !== 0) {
            // Odd rows (reverse direction)
            if (n2 === 0) {
                document.getElementById(player).style.left = `${9 * 62}px`;
                document.getElementById(player).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(player).style.left = `${(9 - (n2 - 1)) * 62}px`;
                document.getElementById(player).style.top = `${-n1 * 62 - correction}px`;
            }
        } else {
            // Even rows (normal direction)
            if (n2 === 0) {
                document.getElementById(player).style.left = `0px`;
                document.getElementById(player).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(player).style.left = `${(n2 - 1) * 62}px`;
                document.getElementById(player).style.top = `${-n1 * 62 - correction}px`;
            }
        }
    }
}

// Function to play the game and update positions
function play(player, correction, num) {
    p1sum += num;
    if (p1sum > 100) {
        p1sum -= num; // Prevent overshooting 100
    }

    // Snakes and ladders logic
    switch (p1sum) {
        case 6:
            handleLadder(player, 24);
            return;
        case 11:
            handleLadder(player, 28);
            return;
        case 19:
            handleSnake(player, 3);
            return;
        case 20:
            handleLadder(player, 44);
            return;
        case 23:
            handleSnake(player, 5);
            return;
        case 26:
            handleLadder(player, 36);
            return;
        case 39:
            handleLadder(player, 41);
            return;
        case 45:
            handleSnake(player, 25);
            return;
        case 48:
            handleSnake(player, 30);
            return;
        case 50:
            handleLadder(player, 68);
            return;
        case 61:
            handleSnake(player, 59);
            return;
        case 62:
            handleLadder(player, 84);
            return;
        case 69:
            handleSnake(player, 47);
            return;
        case 73:
            handleLadder(player, 92);
            return;
        case 75:
            handleLadder(player, 95);
            return;
        case 85:
            handleSnake(player, 65);
            return;
        case 94:
            handleSnake(player, 74);
            return;
        case 99:
            handleSnake(player, 77);
            return;
    }

    updatePlayerPosition(player, p1sum, correction);
}

document.getElementById("diceBtn").addEventListener("click", function () {
    if (questionActive) {
        alert("Please answer the current question before rolling again.");
        return;
    }

    rollingSound.play(); // Play dice rolling sound
    let num = Math.floor(Math.random() * 6) + 1; // Roll the dice (1-6)
    document.getElementById("dice").innerText = num;

    // Add dice face classes for visual representation (optional)
    let diceElement = document.getElementById("dice");
    diceElement.classList.remove('one', 'two', 'three', 'four', 'five', 'six');
    diceElement.classList.add(num.toString());

    // Update the player's position step by step
    moveStepByStep('p1', num);
});

function moveStepByStep(player, steps) {
    let interval = 500; // Interval in milliseconds between steps
    let currentStep = 0;

    let intervalId = setInterval(function () {
        if (currentStep < steps) {
            p1sum++; // Increment position by 1
            if (p1sum > 100) {
                p1sum--; // Prevent overshooting 100
                clearInterval(intervalId);
                return;
            }
            updatePlayerPosition(player, p1sum, 0); 
            // Update the player's position visually
            
            // Log the text for the current position after each step
            console.log("Text on square " + p1sum + ": " + gridText[p1sum]); // Log text after moving

            currentStep++;
        } else {
            clearInterval(intervalId); // Stop the interval when all steps are completed

            // Check for snakes or ladders after the final position
            play(player, 0, 0);
        }
    }, interval);
}
