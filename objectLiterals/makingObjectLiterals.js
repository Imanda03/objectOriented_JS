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
console.log(userOne.email);



//Updating properties
userOne['name'] = 'Anish';
userOne['email'] = 'asis03ninja.com';

console.log(userOne.name);
console.log(userOne.email);

var pops = 'name';
console.log(userOne[pops])

//Creating properties
userOne.age = 25;
console.log(userOne.age);

//creating function
userOne.info = function(){}
