//// Prototype Inheritance
/// Person constructor

function Person(firstName, lastname) {

    this.firstName = firstName;
    this.lastname = lastname;


}

//// Greeting
Person.prototype.greeting = function () {

    return `Hello there ${this.firstName} ${this.lastname}`;
    
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());


////Customer constructor
function Customer(firstName, lastname, phone, membership) {
        Person.call(this, firstName, lastname);

        this.phone = phone;
        this.membership = membership;

}

//// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);


/// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;


//// Create customer
const customer1 = new Customer('Tom', 'Smith', '332-222-222', 'Standard');


//// Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastname} welcome to our company`;
}

console.log(customer1.greeting());

// console.log(customer1);
