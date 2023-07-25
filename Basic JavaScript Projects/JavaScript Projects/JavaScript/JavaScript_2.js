function validateForm() {
    let x = document.forms["validate_me"]["fname"].value;
    let y = document.forms["validate_me"]["lname"].value;
    let z = document.forms["validate_me"]["email"].value;
    let p = document.forms["validate_me"]["phone"].value;
    if (x == "") {
        alert("First Name field must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last Name field must be filled out");
        return false;
    }
    if (z == "") {
        alert("Email field must be filled out");
        return false;
    }
    if (p == "") {
        alert("Phone number field must be filled in");
        return false;
    }
}