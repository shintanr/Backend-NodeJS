console.log("hello");

console.log("Shinta");

let x;
x = 7;
x = "JS is great";
console.log(x);

function calculate(value) {
    return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
}

console.log(calculate(3));

let myString = "";

try {
    myString += "a";
    throw Error();
} catch (e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);