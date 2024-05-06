document.addEventListener("DOMContentLoaded", function () {
    // DOM is fully loaded, let's start
    var currStreak = 0;
    var bestStreak = 0;
    var upperBound = 10000;
    var translator = new T2W("EN_US");
    var ceRadio = document.getElementById('ce');
    var ecRadio = document.getElementById('ec');
    ceRadio.checked = true;

    // Event listener for the "Enter" key in the input box
    var answerInput = document.getElementById("ans-input txtbox");
    answerInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") { // Check if the key pressed is Enter
            checkAnswer(correctAnswer); // Call the checkAnswer function
        }
    });

    // Save button event listener
    var saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", function () {
        var upperBoundInput = document.getElementById("upper-bound-input").value;
        if (!upperBoundInput) {
            upperBoundInput = 10000;
        }
        upperBound = parseInt(upperBoundInput);
        console.log("New UB: " + upperBound);
        updateQuestion();
    });

    // Input box event listener to restrict input to integers
    var upperBoundInput = document.getElementById("upper-bound-input");
    upperBoundInput.addEventListener("input", function () {
        var currentValue = this.value;
        // Remove non-numeric characters
        this.value = currentValue.replace(/\D/g, '');
    });

    // Settings button event listener
    var settingsButton = document.getElementById("settings");
    settingsButton.addEventListener("click", function () {
        var settingsContainer = document.getElementById("settings-container");
        // Toggle the display of the settings container
        if (settingsContainer.style.display === "none") {
            settingsContainer.style.display = "block";
        } else {
            settingsContainer.style.display = "none";
        }
    });

    function toChineseNumber(n) {
        units = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '兆', '十', '百', '千', '京']
        numString = '' + n;
        numString = numString.split("").reverse().join("");
        zwNum = '';
        
        numString = numString.replaceAll("0", "零");
        numString = numString.replaceAll("1", "一");
        numString = numString.replaceAll("2", "二");
        numString = numString.replaceAll("3", "三");
        numString = numString.replaceAll("4", "四");
        numString = numString.replaceAll("5", "五");
        numString = numString.replaceAll("6", "六");
        numString = numString.replaceAll("7", "七");
        numString = numString.replaceAll("8", "八");
        numString = numString.replaceAll("9", "九");

        for (var i = 0; i < numString.length; i++) {
            if (numString[i] != '零') {
                zwNum += units[i];
                zwNum += numString[i];
            }
        }
        zwNum = zwNum.split("").reverse().join("");
        return zwNum;
      }

    // Function to generate random question
    function generateQuestion(upperBound) {
        var num = Math.floor(Math.random() * upperBound) + 1;
        var qn = toChineseNumber(num);
        var numStr = translator.toWords(num);
        console.log(num, qn, numStr);
        return { zw: qn, arabic: num, words: numStr };
    }

    // Function to update the question display
    function updateQuestion() {
        var msg = document.getElementById("msg");
        msg.textContent = '';
        var questionObj = generateQuestion(upperBound);
        var questionDisplay = document.getElementById("qn");
        
        if (ceRadio.checked) {
            questionDisplay.textContent = questionObj.zw;
            correctAnswer = questionObj.words;
            return questionObj.words;
        } else if (ecRadio.checked) {
            questionDisplay.textContent = questionObj.words;
            correctAnswer = questionObj.zw;
            return questionObj.zw;
        }
    }

    function sleep(ms, callback) {
        setTimeout(callback, ms);
    }

    // Function for response check
    function checkAnswer() {
        var userInput = document.getElementById("ans-input txtbox").value;
        var msg = document.getElementById("msg");

        if (userInput === correctAnswer) {
            msg.textContent = "Correct!";
            currStreak += 1;
            if (currStreak > bestStreak) {
                bestStreak = currStreak;
            }
            sleep(500, updateQuestion); 
        } else {
            msg.textContent = "Incorrect. Correct Answer: " + correctAnswer;
            currStreak = 0;
            sleep(3000, updateQuestion); 
        }

        var currStreakDisp = document.getElementById("curr-streak");
        currStreakDisp.textContent = '' + currStreak;
        var bestStreakDisp = document.getElementById("best-streak");
        bestStreakDisp.textContent = '' + bestStreak;
        answerInput.value = '';
    }

    // Call updateQuestion function to display initial question
    var correctAnswer = updateQuestion();
});


