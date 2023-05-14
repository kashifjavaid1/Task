var user=[]
function sub1() {
    var username=document.getElementById("name").value;
    var useremail=document.getElementById("email").value;
    var userphone=document.getElementById("phone").value;

    var data = {
        name:username,
        email:useremail,
        phone:userphone,
        
    }
    user.push(data);
    resltdata()
}
function resltdata() {
    var result=""
    for (var  index = 0; index < user.length; index++) {
        const user1 = user[index];
        console.log("user",user1);
        result= result +'<div> <h1>Name:${user1.name} </h1> <p>Email: ${user1.email}</P> <span{user1.phone}</span></div>' 
    }
    console.log("result",result);
    document.getElementById("result").innerHTML=result
}
