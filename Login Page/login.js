var i = 0
function generateId() {
    return i++
}
var emptyArray =[]
localStorage.setItem("Sign-Ups",JSON.stringify(emptyArray))
$("#login").css("display","none")
$("#sign-up").css("display","none")
$("#log-in").click(function() {
    
    if ($("#login").css("display")==="block") {
        $("#login").css("display","none")
    }
    else if ($("#sign-up").css("display")==="block") {
        $("#sign-up").css("display","none")
    }

    else{
        $("#login").css("display","block")
    }
})
    
$("#sign").click(function() {
   
    if ($("#sign-up").css("display")==="block") {
        $("#sign-up").css("display","none")
    }
    else if ($("#login").css("display")==="block") {
        $("#login").css("display","none")
    }
    else{
        $("#sign-up").css("display","block")
    }
    
})
var UserMails =[]
var UserPassword=[]
$("#addAccount").click(function() {
    user={
    mail : $("#e-mail-sign").val(),
    pass : $("#pass-sign").val(),
    name : $("#name").val(),
    source :$("#icon").val(),
    id:generateId()
    }
var Sign_Ups= JSON.parse(localStorage.getItem("Sign-Ups"))
Sign_Ups.push(user)
// localStorage.removeItem("Sign-Ups")
localStorage.setItem("Sign-Ups",JSON.stringify(Sign_Ups))
// localStorage.setItem("imageSource",JSON.stringify(source))
// localStorage.setItem("ProfileName",JSON.stringify(name))
// localStorage.setItem("email",JSON.stringify(mail))
// localStorage.setItem("password",JSON.stringify(pass))
// UserMails.push(mail)
// UserPassword.push(pass)
// if (UserMails.includes(mail) || UserPassword.includes(pass)) {
//     return "e-mail already have an account linked to"
// }
})
$("#login").on('click',function(){
    var maillog = $("#e-mail-log").val()
    var passlog = $("#pass-log").val()
    var Sign_Ups=JSON.parse(localStorage.getItem("Sign-Ups"))
    for (var i = 0; i < Sign_Ups.length; i++) {
        const element = Sign_Ups[i];
        if(element.mail==maillog && element.pass==passlog) {
        location.href='../Main page/Main.html'
    }
    
}
})
