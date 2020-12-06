function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

var args = process.argv.slice(2);
switch (args[0]) {
    case "add":
        console.log(add(args[1], args[2]));
        break;
    case "subtract":
        console.log(subtract(args[1], args[2]));
        break;
    case "multiply":
        console.log(multiply(args[1], args[2]));
        break;
    case "divide":
        console.log(divide(args[1], args[2]));
        break;
}