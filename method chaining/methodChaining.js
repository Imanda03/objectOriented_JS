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
var userOne = new User('asis03ktm', 'Anish');
var userrTwo = new User('kakaNinja', 'Aashish');

//Now this is call chain methods
userOne.login().updateScore().updateScore().logout();