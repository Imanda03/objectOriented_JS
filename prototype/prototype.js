function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;

    this.login = function(){
        console.log(this.email , 'has been login');
    }
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email,'has been login')
}

User.prototype.logout= function(){
    this.online = false;
    console.log(this.email,'has been logout')
}

var userOne = new User('anish03@g.com','Anish');
var userTwo = new User('imanda@g.com','Imanda');



