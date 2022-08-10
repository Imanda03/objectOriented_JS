class User {
    constructor(email, name) {
        this.name = name;
        this.email = email;
        this.count = 0;
    }
    //Now this two are the methods
    login() {
        console.log(this.email, 'has been login');
        return this;
    }
    logout() {
        console.log(this.email, ' has been logiout');
        return this;
    }
    updateScore(){
        this.count++;
        console.log(this.email, 'count is ',this.count);
        return this;
    }
}

//Extends keywords is used to inheritnce the properties
class Admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email
        })
    }
} 

var userOne = new User('asis03ktm', 'Anish');
var userrTwo = new User('kakaNinja', 'Aashish');
var admin = new Admin ('shaun@g.com','Shaun')

var users = [userOne,userrTwo,admin];

admin.deleteUser(userOne)

console.log(users)
