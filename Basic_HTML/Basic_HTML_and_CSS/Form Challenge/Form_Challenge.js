function validateForm() {
    let x = document.forms["myForm"]["flname"].value;
    let y = document.forms["myForm"]["pnumber"].value;
    if (x =="") {
        alert("First and last name MUST be filled out";
            return false;
        )
    }
    if (y =="") {
        alert("Phone number MUST be filled out";
            return false;
        )
    }