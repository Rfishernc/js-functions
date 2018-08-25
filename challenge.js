function printToDom(string, divId) {
    const div = document.getElementById(divId);
    div.innerHTML += string;
}

let counter = 0;

function bandNumber(band) {
    counter++;
    printToDom((`<h2>${counter}. ${band}</h2>`), 'band'); 
}

bandNumber("big jerks");
bandNumber("normally proportioned jerks");