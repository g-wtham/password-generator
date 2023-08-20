let letters = '';
let numbers = '';
let symbols = '';
//array to hold similar data type values //

//gets the password length input value and stores it //
const getPassLen = document.getElementById('length-input');
let passLength = getPassLen.value;

 const passwordOutput = document.getElementById('password-output');

function generatePassword() {

    //checks the numbers & symbols checkboxes state//
    const numbersCheckbox = document.getElementById('include-numbers');
    const symbolsCheckbox = document.getElementById('include-symbols');
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    //using ascii code to add the lowercase alphabets//
    for (let i = 97; i < 123; i++) {
        letters += String.fromCharCode(i);
    }

    if (includeNumbers) {
        numbers += '1234567890';
    }

    if (includeSymbols) {
        symbols += '!@#$%^&*';
    }

    const getPassword = letters + (includeNumbers ? numbers : '') + (includeSymbols ? symbols : '');

    let finalPassword = '';
    //empty string to store the final password //

    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * getPassword.length);
        finalPassword += getPassword[randomIndex];
    }

   
    passwordOutput.innerHTML = 'Generated Password:  ' + finalPassword;

}

const submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', generatePassword)