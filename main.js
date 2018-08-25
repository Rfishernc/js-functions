const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter += 1;
counter++;

console.log('counter: ', counter);

const greetingElement = document.getElementById('greeting');
const firstName = 'Rich';
const lastName = 'Fisher';
// greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

let name = 'callan';
let age = '10000000000000';

// let person = {
//     name: name,
//     age: age
// };

let person = {
    name,
    age
};

console.log('person: ', person.name);