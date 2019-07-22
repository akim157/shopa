const User = function(name) {
    this.name = name || 'New User';
};

User.prototype = {
    age: 20,
    getName: function() {
        console.log('This name', this.name);
    },
    get: function(filed) {
        const self = this;
        setTimeout(function(){
            console.log('GET:', self[filed]);
        },1000);
    }
};

const user = new User('Maxim');
user.get('name');