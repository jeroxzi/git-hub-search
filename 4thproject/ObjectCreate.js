//// using object.create

const personPrototype = {

    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`
    },

    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }


};

const mary = Object.create(personPrototype);

mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.agen = 30;


mary.getsMarried('Thomson');
console.log(mary.greeting());



const bob = Object.create(personPrototype, {
    firstName: { value: 'Bobby'},
    lastName: { value: 'Ferrer'},
    age: { value: 26}
});


console.log(bob);
console.log(bob.greeting());