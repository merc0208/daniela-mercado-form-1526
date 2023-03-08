// DECLARING VARIABLES 
let fullname = document.getElementById("full-name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitButton = document.getElementById("fbutton");

// Declare variable that will 
// store regular expression for email
let expression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// READY TO START CODING
// Start with your function here:
function validation(){
    
// START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/errors) 
// Declare object that will store the form-data
    let data = {};
// Declare array that will store the errors
    let error = [];
// Check if fullname is not empty.
    if(fullname.value){
        // If so:
       // Pass the collected value
       // to your object "data".
        data.fullname = fullname.value;
    } else{
        // Create a corresponding error-message
       // and add it to your array "errors".
        error.push("Enter your full name.");
         // End your conditional here.
    }
// Check if email is not empty.
    if(email.value){
        // Check if email is valid.
       // If so:
        if(expression.test(email.value)){
            // Pass the collected value to your object "data".
            data.email = email.value;
           // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
        } else {
            error.push("Enter a valid email");
        }
        // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    } else{
        error.push("Please enter your email");
        // End your outer conditional here.
    }

// Check if message is not empty.
    if(message.value){
        // If so:
       // Pass the collected value
       // to your object "data".
        data.message = message.value;
    } else{
        // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
        error.push("please enter a message");
    // End your conditional here.
    }
// Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    if (error.length === 0){
        console.log(data);
        // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
       document.getElementById("form").reset();
       //How to clean the input fields in a form?
    }else {
        console.log(error);
    // End your conditional here.
    }
// Close your function here
}

// Register your form to "click" event.
submitButton.addEventListener("click", validation);



   
    
    
