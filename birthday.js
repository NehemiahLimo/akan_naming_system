// script.js

function validateDate() {
    var dobValue = document.getElementById("dob").value;
    var dateObject = new Date(dobValue);
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1;

    if ((day <= 0 || day > 31) || (month <= 0 || month > 12)) {
        alert("Invalid date. Please enter a valid day (1-31) and month (1-12).");
    } else {
        alert("Valid Date of Birth: " + dobValue);
    }
}
