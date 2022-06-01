// function minimal(a, b){
// 	if(a < b){
// 		return a;
// 	} else if(a>b){
// 		return b;
// 	} else {
// 		return a;
// 	}

// }

// function power(a, b){
// 	return a**b;
// }

// let min = minimal();
// console.log(minimal(3,4));

// let hasil = power();
// console.log(power(3,4));

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);