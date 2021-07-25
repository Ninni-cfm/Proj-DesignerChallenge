// Define global vars for elements we use frequently
let mainContent, formConfirm;

// call the initialization function
initialize();

// initialisation of the website
function initialize() {

    mainContent = document.getElementById("main");
    formConfirm = document.getElementById("email-confirm");

    hideElement(formConfirm); // hide the confirm formular
}

// The subscribe button was clicked, show the confirm form and 
// hide the main-content
function subscribe() {

    // get the entered email address
    let emailAdress = document.getElementById("email").value;

    // check if the entered email address is valid
    if (!validateEmailAddress(emailAdress)) {
        alert("Please provide a valid email address!");
        return;
    }

    showElement(formConfirm);
    hideElement(mainContent);

    // all done, reset input text for email address
    email.value = "";
}

// The 'back to ...' botton was clicked, hide the confirm form and 
// show the main-content
function confirm() {

    showElement(mainContent);
    hideElement(formConfirm);
}


// Function to validate email addresses using regex
function validateEmailAddress(emailAddress) {

    // regex email validation pattern
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // validate a email address using regex
    return REGEX_EMAIL.test(emailAddress);
}


// Functions to show/hide HTML elements
function showElement(element) {

    hideElement(element, false);
}
function hideElement(element, hidden = true) {

    // if element is a string, try to get the element
    if (typeof element == typeof "") {
        element = document.getElementById(element);
    }

    if (element == null) {
        debugPrint("hideElement(...): Element is null!")
    }

    // helper-class used to hide elements
    var helperClass = "element-hide";

    if (hidden) {
        // hide element by adding helper-class
        element.classList.add(helperClass);
    } else {
        // hide element by removing helper-class
        element.classList.remove(helperClass);
    }
}

// helper function for debug output.
function debugPrint(...params) {
    console.log(params);
}


