// const form = document.querySelector("#form");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const vehicle_make = document.querySelector("#vehicle_make");
// const vehicle_model = document.querySelector("#vehicle_model");

// form.addEventListener("submit", function check(e){
//     e.preventDefault();
//     validateForm();
// });

//email validations
// function isEmail(email){
//     var atSymbol = email.indexOf("@");
//     var dot = email.lastIndexOf(".");
//     if(atSymbol < 1){
//         return false;
//     }
//     if(dot <= atSymbol + 3){
//         return false;
//     }
//     return true;
// }

// function validate(){
//     const nameVal = name.value.trim();
//     const emailVal = email.value.trim();
//     const vehicle_makeVal = vehicle_make.value.trim();
//     const vehicle_modelVal = vehicle_model.value.trim();

//     if(nameVal === ""){
//         alert("Name cannot be Empty");
//     }else if (nameVal.length < 3) {
//         alert("Name cannot be less than 3 character");
//     }

//     if(emailVal === ""){
//         alert("name cannot be blank");
//     }else if (!isEmail(emailVal)) {
//         alert("Not a valid email.");
//     }
// }



function validateForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var vehicleMake = document.getElementById("vehiclemake").value;
    var vehicleModel = document.getElementById("vehiclemodel").value;
    var feedback = document.getElementById("feedback").value;

    // Validate name (required)
    if (name.trim() == "" || name.length <= 2) {
        alert("Please enter your name");
        return false;
    }

    // Validate email (required and valid format)
    if (email.trim() == "") {
        alert("Please enter your email");
        return false;
    } else {
        // Regular expression for email validation
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
    }

    // Validate vehicle company (required)
    if (vehicleMake == "") {
        alert("Please enter the vehicle company");
        return false;
    }

    // Validate vehicle model (required)
    if (vehicleModel == "") {
        alert("Please enter the vehicle model");
        return false;
    }

    // Validate feedback (required)
    if (feedback == "") {
        alert("Please enter your feedback");
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}
