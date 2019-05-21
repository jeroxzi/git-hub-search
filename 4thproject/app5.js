//// Prototype explaned
/// Object.prototype
/// Person.prototype


//// Person constructor
function Person(firstName, lastName, dob){

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = dob;

}


/// -- calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)

}

///---- Get full name
Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;

}

Person.prototype.getMarried = function(newLastName) {
       this.lastName = newLastName;

}


const john = new Person('John', 'Doe', '05-13-1983');
const mary = new Person('Mary', 'Johnson', '05-13-1980');

console.log(mary);

console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));