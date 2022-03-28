// Start your code ***HERE*** =========

// Event listener for generate PW button

genBtn.addEventListener("click", buttonHandler);

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

let choiceArray = [12];

let lowerCaseArray = ['a', 'b', 'c', 'd', 'e','f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];

let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S','T', 'U', 'V','W','X','Y','Z'];

let numberArray = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9'];

let specialCaseArray = ['!','@','#','$','%','^','&','*','+','=','(',')','?'];


// create a global variable called "pwLength" with a number between 10 and 18

let pwLength = 12;

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

function getPrompts() {
    pwLength = parseInt(prompt("How many characters would you like? (Between 10-50)"));

    if (isNaN(pwLength) || pwLength < 10 || pwLength > 50) {
        alert("Please enter a number between 10 and 50");
    }

    if (confirm("Would you like lowercase letters in your password?")){
        choiceArray = choice.concat(lowerCaseArray);
    }

    if (confirm("Would you like uppercase letters in your password?")){
        choiceArray = choice.concat(upperCaseArray);
    }

    if (confirm("Would you like specialcase letters in your password?")){
        choiceArray = choice.concat(specialCaseArray);
    }

    if (confirm("Would you like numbers in your password?")){
        choiceArray = choice.concat(numbersArray);
    }

    return true;
}

function addNewPassword(){
    let password ="";

    for (let i = 0; i < pwLength; i++) {
        let randomIndex = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomIndex];
    }

    return password;
}

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");

let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};

// Event listener for generate PW button
// genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
