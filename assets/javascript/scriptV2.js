// Ask the user how many characters their password should be.
var passCharLength =
    prompt("Choose a password length between 8 - 128 characters in length.");
//If the password isn't between 8 & 128 in length, reload the page after explanation.
if (passCharLength > 128 || passCharLength < 8) {
    passCharLength = prompt("Must choose betweeen 8 - 128 characters.");
    location.reload();
}

//If the conditions are met, start asking which characters the user wants.
else {
    //create a variable for each type of character, and allow the user to choose if wanted.
    var specialChar = confirm("Would you like to use Special Characters?")
    var numberChar = confirm("Would you like to use Numbers?")
    var upperCaseChar = confirm("Would you like to use Upper Cased Letters?")
    var lowerCaseChar = confirm("Would you like to use Lower Cased Letters?")

    // Create the password based on user confirmation selections.
    function generatePassword() {

        // Blank var to add characters the user selected into one string
        var chosenChars = "";


        // If user agreed to special characters, add them to the choseChars var
        if (specialChar) {
            chosenChars = chosenChars + "!@#$%^&*()-_=+?~";
            // console.log(chosenChars);
        }

        // If user agreed to numbers, add them to the choseChars var
        if (numberChar) {
            chosenChars = chosenChars + "1234567890";
            // console.log(chosenChars);
        }

        // If user agreed to uppper case letters, add them to the choseChars var
        if (upperCaseChar) {
            chosenChars = chosenChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            // console.log(chosenChars);
        }

        // If user agreed to lower case letters, add them to the choseChars var
        if (lowerCaseChar) {
            chosenChars = chosenChars + "abcdefghijklmnopqrstuvwxyz";
            console.log(chosenChars);
        }

        // If user does not select at least 1 character type, return.
        if (chosenChars == "") {
            alert("You must select at leaset 1 character type.");
            return;
        }

        // Password that is generated based on user selections.
        var userPass = "";


        // Randomly loop through the characters that the user selected to use.
        for (var i = 0; i < passCharLength; i++) {
            userPass += chosenChars[Math.floor(Math.random() * chosenChars.length)];
            console.log(userPass);
        }

        document.getElementById("password").value = userPass;

    }

    // JS for the copy to clipboard button function
    function copyBtn() {

        // Select the generated password text area
        var textCopy = document.getElementById("password");

        // Select the text in the above text area
        textCopy.setSelectionRange(0, 99999);

        // Apply selected text above to user clipboard
        document.execCommand("copy");

        // Alert to verify copy was successfull
        alert("Your new password " + textCopy.value + " is copied, and ready to paste.");

    }
}