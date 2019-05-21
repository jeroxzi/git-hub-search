//// ES6 Classes

class Person {

    constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello ther ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }

}


const mary = new Person('Mary', 'william', '05-13-1983');

mary.getMarried('Thompson');

console.log(mary);
console.log(Person.addNumbers(1,2));