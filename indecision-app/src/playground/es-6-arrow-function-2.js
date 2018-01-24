
// arguments object no longer bound by arrow function
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Boston', 'Dublin', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// challenge

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 2, 3],
    // multiplyBy - single number
    multiplyBy: 2,
    // multiply - returns new array of numbers multiplied
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }

};

console.log(multiplier.multiply());