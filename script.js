const logon = document.querySelector("#logon");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const remember = document.querySelector("#remember");


function check() {

    const users = JSON.parse(localStorage.getItem('users'));

    var userName = document.getElementById('username').value;
    var password= document.getElementById('password').value;
    const filteredUser = users.find((user) => user.email == userName);
    if(filteredUser){
        if(filteredUser.password == password){
            alert("Welcome "+ filteredUser.username);
        } else{
            alert("Please enter valid password");
        } 
    } else {
        alert("Please enter valid user name");
    }

   
}
