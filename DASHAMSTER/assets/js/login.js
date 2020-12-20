function viewPassword() {
    var temp = document.getElementById("myPassword");
    if (temp.type === "password") {
        temp.type = "text";
    } else {
        temp.type = "password";
    }
}