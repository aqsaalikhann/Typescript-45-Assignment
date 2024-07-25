var current_users = ["ali", "sana", "fariyal", "danish", "zarron"];
var new_users = ["ayan", "MARIA", "zarron", "ariba", "SANA"];
new_users.forEach(function (new_user) {
    var user = current_users.some(function (current_users) { return current_users.toLowerCase() === new_user.toLowerCase(); });
    if (user) {
        console.log("sorry ".concat(new_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_user, " is available"));
    }
});
