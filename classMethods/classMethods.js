class User {
    constructor(email, name) {
        this.name = name;
        this.email = email;
    }
    //Now this two are the methods
    login() {
        console.log(this.email, 'has been login');
    }
    logout() {
        console.log(this.email, ' has been logiout');
    }
}
var userOne = new User('asis03ktm', 'Anish');
var userrTwo = new User('kakaNinja', 'Aashish');

userOne.login();
userrTwo.logout();