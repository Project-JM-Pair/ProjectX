// each
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}


// map
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}


// filter
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}


//reduce
 function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }
 //
// var i = 0
// function generateId() {
//     return i++
// }
// var emptyArray = [{
//     mail: "Mouhib@gmail.com@gmail.com",
//     pass: "mouhib123",
//     name: "mouhib",
//     id: 1,
//     balance: 200
// },{
//     mail: "jihed@gmail.com",
//     pass: "jihed123",
//     name: "jihed",
//     id: 2,
//     balance: 500
// },{
//     mail: "balkis@gmail.com",
//     pass: "balkis123",
//     name: "balkis",
//     id:3,
//     balance: 700
// }]
// localStorage.setItem("Sign-Ups", JSON.stringify(emptyArray))
var emptyArray2 = []
localStorage.setItem("Logins", JSON.stringify(emptyArray2))
$("#login").css("display", "none")
$("#sign-up").css("display", "none")
$("#log-in").click(function () {

    if ($("#login").css("display") === "block") {
        $("#login").css("display", "none")
    }
    else if ($("#sign-up").css("display") === "block") {
        $("#sign-up").css("display", "none")
    }

    else {
        $("#login").css("display", "block")
    }
})

$("#sign").click(function () {

    if ($("#sign-up").css("display") === "block") {
        $("#sign-up").css("display", "none")
    }
    else if ($("#login").css("display") === "block") {
        $("#login").css("display", "none")
    }
    else {
        $("#sign-up").css("display", "block")
    }

})
var UserMails = []
var UserPassword = []

$("#addAccount").click(function () {
var user = {
        mail: $("#e-mail-sign").val(),
        pass: $("#pass-sign").val(),
        name: $("#name").val(),
        source: $("#icon").val(),
        id: crypto.randomUUID(),
        balance: $("#balance-sign").val()
    }

var isExist = false;
if(!Sign_Ups){
    localStorage.setItem("Sign-Ups", JSON.stringify([]))
    var Sign_Ups = JSON.parse(localStorage.getItem("Sign-Ups"))
    Sign_Ups.push(user)
    localStorage.setItem("Sign-Ups", JSON.stringify(Sign_Ups))
}
else{
    each(Sign_Ups,function(element,i){
        if (user.mail===element.mail || user.pass===element.pass || user.name===element.name )
        { 
        $("#alert").text("These credentials Already Exist")
                console.log(element.mail)
                isExist = true;
                return;   
        }})
       if(!isExist ){
        Sign_Ups.push(user)
        localStorage.removeItem("Sign-Ups")
        localStorage.setItem("Sign-Ups", JSON.stringify(Sign_Ups))
        }
        
    }
})



    // localStorage.removeItem("Sign-Ups")
        
    // localStorage.setItem("imageSource",JSON.stringify(source))
    // localStorage.setItem("ProfileName",JSON.stringify(name))
    // localStorage.setItem("email",JSON.stringify(mail))
    // localStorage.setItem("password",JSON.stringify(pass))
    // UserMails.push(mail)
    // UserPassword.push(pass)
    // if (UserMails.includes(mail) || UserPassword.includes(pass)) {
    //     return "e-mail already have an account linked to"
    // }

$("#loginbtn").on('click', function () {
    var maillog = $("#e-mail-log").val()
    var passlog = $("#pass-log").val()
    user = {
        mail: $("#e-mail-log").val(),
        pass: $("#pass-log").val(),
        balance:$("#balance-log").val()
    }
    var Sign_Ups = JSON.parse(localStorage.getItem("Sign-Ups"))
    var Log_in = JSON.parse(localStorage.getItem("Logins"))
    for (var i = 0; i < Sign_Ups.length; i++) {
        const element = Sign_Ups[i];
        if (element.mail == maillog && element.pass == passlog){
          Log_in.push(user)  
        }}
    
    
    localStorage.setItem("Logins", JSON.stringify(Log_in))

    var Sign_Ups = JSON.parse(localStorage.getItem("Sign-Ups"))
    for (var i = 0; i < Sign_Ups.length; i++) {
        const element = Sign_Ups[i];
        if (element.mail == maillog && element.pass == passlog) {
            location.href = '../Main page/Main.html'
        }

    }
})
