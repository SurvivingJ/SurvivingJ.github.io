let workoutInterval, drillInterval;
const drills = [
    "Left Hand 4 Levels", "Right Hand 4 Levels", "Crossover", "Through the Legs",
    "Behind the Back", "Crossover with V Dribble", "Through the Legs with V dribble",
    "Behind the Back with V Dribble", "Wall Touch Crossover", "Wall Touch Through the Legs",
    "Wall Touch Behind the Back"
];

document.getElementById('start').addEventListener('click', startWorkout);
document.getElementById('reset').addEventListener('click', resetWorkout);

function startWorkout() {
    const workoutType = document.querySelector('input[name="workoutType"]:checked').value;
    const bpm = parseInt(document.getElementById('bpm').value);
    const duration = parseInt(document.getElementById('duration').value);
    const drillName = document.getElementById('drill-name');
    const countdown = document.getElementById('countdown');

    let currentNumber = 1;
    let workoutTime = duration * 60 * 1000; // Convert minutes to milliseconds

    // Display the workout header
    drillName.textContent = workoutType.charAt(0).toUpperCase() + workoutType.slice(1) + ' Workout';

    clearInterval(workoutInterval);
    clearInterval(drillInterval);

    workoutInterval = setInterval(() => {
        countdown.textContent = currentNumber;
        currentNumber = currentNumber === 4 ? 1 : currentNumber + 1;
    }, 60000 / bpm);

    if (workoutType === 'random') {
        runRandomWorkout(duration);
    } else {
        runPyramidWorkout(duration);
    }

    setTimeout(() => {
        clearInterval(workoutInterval);
        clearInterval(drillInterval);
        countdown.textContent = '';
        drillName.textContent = 'Workout Complete!';
    }, workoutTime);
}

function runRandomWorkout(duration) {
    const drillDisplay = document.getElementById('current-drill');
    const totalDrillTime = duration * 60 * 1000; // Convert minutes to milliseconds
    let remainingTime = totalDrillTime;

    function executeRandomDrill() {
        if (remainingTime <= 0) {
            clearInterval(workoutInterval);
            drillDisplay.textContent = '';
            return;
        }

        const randomDrill = drills[Math.floor(Math.random() * drills.length)];
        drillDisplay.textContent = `Current Drill: ${randomDrill}`;
        remainingTime -= 10000; // Deduct time for each drill

        setTimeout(executeRandomDrill, 10000); // Change drill every 10 seconds
    }

    executeRandomDrill();
}


function runPyramidWorkout(duration) {
    const drillDisplay = document.getElementById('current-drill');
    const totalDrillTime = duration * 60 * 1000; // Convert minutes to milliseconds
    let currentPhaseTime = 10000; // Start with 10 seconds
    let phaseIncrease = true; // Flag to indicate if we are increasing the drill time
    let usedDrills = []; // To keep track of drills already used
    let remainingTime = totalDrillTime;
    let isBreak = false;

    function executeDrill() {
        if (remainingTime <= 0) {
            clearInterval(workoutInterval);
            drillDisplay.textContent = '';
            return;
        }

        if (!isBreak) {
            let currentDrill;
            if (usedDrills.length === drills.length) usedDrills = [];
            do {
                currentDrill = drills[Math.floor(Math.random() * drills.length)];
            } while (usedDrills.includes(currentDrill));
            usedDrills.push(currentDrill);
            drillDisplay.textContent = `Current Drill: ${currentDrill}`;

            isBreak = true;
            remainingTime -= currentPhaseTime;

            setTimeout(executeDrill, currentPhaseTime);
        } else {
            drillDisplay.textContent = "Break";
            isBreak = false;

            // Adjust drill time for next phase
            if (phaseIncrease) {
                if (currentPhaseTime < (totalDrillTime / 4)) {
                    currentPhaseTime += 10000;
                } else {
                    phaseIncrease = false;
                }
            } else {
                if (currentPhaseTime > 10000) {
                    currentPhaseTime -= 10000;
                }
            }
            remainingTime -= 10000; // Deduct break time

            setTimeout(executeDrill, 10000); // Break time
        }
    }

    executeDrill();
}

// ... [remaining code] ...



function resetWorkout() {
    clearInterval(workoutInterval);
    clearInterval(drillInterval);
    document.getElementById('drill-name').textContent = '';
    document.getElementById('countdown').textContent = '';
    document.getElementById('current-drill').textContent = '';

    document.getElementById('bpm').value = '100';
    document.getElementById('duration').value = '5';
}