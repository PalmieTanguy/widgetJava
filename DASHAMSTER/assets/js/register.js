function viewPassword() {
    var temp1 = document.getElementById("myPassword1");
    var temp2 = document.getElementById("myPassword2");
    if (temp1.type === "password") {
        temp1.type = "text";
    } else {
        temp1.type = "password";
    }
    if (temp2.type === "password") {
        temp2.type = "text";
    } else {
        temp2.type = "password";
    }
}