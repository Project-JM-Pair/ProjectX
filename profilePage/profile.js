$(document).ready(function() {
    var loggedInUser = JSON.parse(localStorage.getItem("Logins"))[0];
    var allUsers = JSON.parse(localStorage.getItem("Sign-Ups"));

    var user = allUsers.find(function(u) {
        return u.id === loggedInUser.id;
    });

    $(".profile-info.name").text(user.name);
    $(".profile-info.email").text(user.mail);
    $(".profile-info.password").text(user.password)
    (".profile-info.place").text(user.place)
    (".profile-info.image").text(user.image)
    
});