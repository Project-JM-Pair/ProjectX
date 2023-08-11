var dfoo = 
[
{mail:"Mouhib@gmail.com@gmail.com",pass:"mouhib123",name:"mouhib",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"1",balance:"200"},
{mail:"jihed@gmail.com",pass:"jihed123",name:"jihed",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"2",balance:"500"},
{mail:"balkis@gmail.com",pass:"balkis123",name:"balkis",source:"https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",id:"3",balance:"700"},
{mail:"khalil@gmail.com",pass:"khalil123",name:"khalil",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"4",balance:"1000"},
{mail:"ala@gmail.com",pass:"ala123",name:"ala",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"5",balance:"300"},
{mail:"dhia@gmail.com",pass:"dhia123",name:"dhia",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"6",balance:"400"},
{mail:"farouk@gmail.com",pass:"faouk123",name:"farouk",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"7",balance:"150"},
{mail:"yessin@gmail.com",pass:"yessin123",name:"yessin",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"8",balance:"900"},
{mail:"zaineb@gmail.com",pass:"zaineb123",name:"zaineb",source:"https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",id:"9",balance:"800"},
{mail:"cyrine@gmail.com",pass:"cyrine123",name:"cyrine",source:"https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",id:"10",balance:"600"},
{mail:"fedi@gmail.com",pass:"fedi123",name:"fedi",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"11",balance:"100"},
{mail:"belhssan@gmail.com",pass:"belhssan123",name:"belhssan",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"12",balance:"260"},
{mail:"amine@gmail.com",pass:"amine123",name:"amine",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"13",balance:"780"},
{mail:"aymen@gmail.com",pass:"aymen123",name:"aymen",source:"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",id:"14",balance:"940"}
]
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
 function set(needy) {
    console.log("needy",needy)
    localStorage.setItem("inNeed",JSON.stringify(needy))
}
 function displayData(arr) {
each(arr, function(e,index) {
    console.log(e)
    set(e.name)
$(".container1").append(`
    <div class="card">
            <div>
                <img class="project-image" alt="" src="${e.source}">
            </div>
            <h3 class="project-title">${e.name}</h3>
            <div class="project-details"> 
                <div class="amount-pledged">${e.balance} dollars</div>
         
            </div><div>
            <button onclick="set('${e.name}')" class="support" >support This Post</button>
            </div>
    </div>                 
     `)
    ;console.log(e.name)
    });

    console.log(arr)
    
    
  }
 displayData(dfoo);

function help() {
    /*add to inNeed*/
 var balancechange = $("#howMuch").val()
var allUsers = JSON.parse(localStorage.getItem("Sign-Ups"))

var filtered=filter(allUsers,function(element,i){
            return element.name===JSON.parse(localStorage.getItem("inNeed"))
        })
console.log(filtered)
 filtered[0].balance =Number(filtered[0].balance)+Number(balancechange)
 allUsers.push(filtered[0])
console.log(filtered[0])
 localStorage.removeItem("Sign-Ups")
 localStorage.setItem("Sign-Ups",JSON.stringify(allUsers))
    /*remove from helper*/
var helper = JSON.parse(localStorage.getItem("Logins"))
helper[0]= Number(helper[0].balance)-Number(balancechange)
helper.push(helper[0])
console.log(helper[0])
localStorage.removeItem("Logins")
localStorage.setItem("Logins",JSON.stringify(helper))
}

function addCard(){
var desc = $("#description").val()
var username = $("#UserName").val()
var image = $("#imageSource").val()
$(".container1").append(`
    <div class="card">
            <div>
                <img class="project-image" alt="" src="${image}">
            </div>
            <h3 class="project-title">${username}</h3>
            <h5 class="project-desc">${desc}</h5>
            <div class="project-details"> 
                <div class="amount-pledged">0 dollars </div>
         
            </div><div>
            <button onclick="set('${username}')" class="support" >support This Post</button>
            </div>
    </div>`)
}

