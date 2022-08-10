//Contructor is used under hood
function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;

    this.login = function(){
        console.log(this.email , 'has been login');
    }
}

var userOne = new User('anish03@g.com','Anish');
var userTwo = new User('imanda@g.com','Imanda');

console.log(userOne);

userTwo.login();