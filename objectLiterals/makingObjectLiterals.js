var userOne = {
    email : 'ryu@ninjas.com',
    name : 'Ryn',
    login(){
        console.log(this.email, 'has been login...');
    },
    logout(){
        console.log(this.email, 'has been logout...');
    }
}

console.log(userOne.name);