// Define global vars for elements we use frequently
let main, confirmForm, subscribeForm;

// call the initialization function
initialize();

// initialisation of the website
function initialize() {

    main = document.getElementById("main");
    confirmForm = document.getElementById("email-confirm");
    subscribeForm = document.getElementById("email-subscribe");

    // hide the subscribe formular
    confirmForm.classList.add("formular-hide");
}

// the subscribe butten has been clicked
function subscribe() {

    // get the entered email address
    let email = document.getElementById("email");
    let emailAdress = email.value;

    // check if the entered email address is valid
    if (!validateEmailAddress(emailAdress)) {
        alert("Please provide a valid email address!");
        return;
    }

    // show the confirm email formular
    confirmForm.classList.remove("formular-hide");

    // hide the subscribe formular
    subscribeForm.classList.add("formular-hide");

    // hide the main content
    main.classList.add("formular-hide");

    // all done, reset input text for email address
    email.value = "";
}

// after subscribing you get a confirmation
function confirm() {

    // hide the confirm email formular
    confirmForm.classList.add("formular-hide");

    // show the subscribe formular
    subscribeForm.classList.remove("formular-hide");

    // show the main content
    main.classList.remove("formular-hide");
}

// Function to validate email addresses using regex
function validateEmailAddress(emailAddress) {

    // regex email validation pattern
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // validate a email address using regex
    return regexEmail.test(emailAddress);
}













function debugLog(...params) {
    console.log(params);
}

