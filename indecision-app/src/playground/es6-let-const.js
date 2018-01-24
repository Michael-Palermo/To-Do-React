var nameVar = "Andrew";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';

console.log('nameLet', nameLet);


const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}
// Block Scoping

const fullName = 'Mike Smith';
let firstName;

if (fullName) {
    let firstName = fullName.split(' ')[0];
}