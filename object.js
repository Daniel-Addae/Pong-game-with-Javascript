var script = document.getElementById("script");
/*console.log("happy");

var userOne = {

email : "daniel50@gmail.com",
name : "daniel",
login : function()  {
    console.log(this.email, 'has logged in');
},
logout : function() {
    console.log(this.email, "has logged out");
}
};

console.log(userOne.name);

userOne.name = "Gosh";
userOne.age = 54;*/

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, "has just logged in");
        return this;
    }
    logout(){
        console.log(this.email, "has just logged out");
        return this;
    }
    Updatescore(){
        this.score ++;
        console.log(this.email, "the score is now", this.score);
        return this;

    }
}

var userOne = new User("money@gmail.com", "ganayao"); 
var userTwo = new User("gagaga@gmail.com", "daniel");

console.log(userOne);

userOne.login();
userOne.login().Updatescore().Updatescore().logout();


class Admin extends User {
    deleteUser(user){
        users= users.filter( u => {
            return u.email != user.email
        })
    }
}
var admin = new Admin("agag@gmail.com", "gada");

var users = [userOne, userTwo, admin]
admin.deleteUser(userTwo);

console.log(users);