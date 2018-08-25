function nuggetizer(animal) {
    return `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`;
}

console.log('fish: ', nuggetizer('fish'));
console.log('fish: ', nuggetizer('cat'));
console.log('fish: ', nuggetizer('bear'));

console.log('fish: ', nuggetizer2('deer'));

const bearSticks = nuggetizer('bear');

function nomnom(name, food) {
    return `${name} eats ${food}`;
}

console.log(nomnom('zoe', bearSticks));

function numberAdder(num) {
    const finalNum = (num + 3);
    printToDom(`<h2>${finalNum}</h2>`, 'allTheNumbers');
}

function printToDom(string, divId) {
    const div = document.getElementById(divId);
    div.innerHTML += string;
}

numberAdder(18);
numberAdder(4);
numberAdder(4);
numberAdder(4);
numberAdder(4);

printToDom('I am ready for lunch', 'feelings');