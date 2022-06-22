// //perbedaan function declaration dan function expression

// //function declaration
// function sayHello(greet) {
//     console.log(`${greet}`);
// }


// //function expression
// const sayName = function(name) {
//     console.log(`Nama saya ${name}`);
// }

// sayHello("Shinta");
// sayName("Shinta juga");


// //Arrow function
// const sayHai = (name) => {
//     console.log(`Nama saya ${name}`);
// }

// sayHai("Shin");


// // Jika funngsi hanya punya satu parameter, maka tanda kurung dapat tidak disertakan dalam penulisan parameter
// const sayHai = name => {
//     console.log(`Nama saya ${name}`);
// }

// sayHai("Shin");


// // jika tidak butuh parameter maka tetap menuliskan tanda kurung
// const sayHelo = () => {
//     console.log("selamat malam semuanya");
// };

// sayHelo();


// // bisa juga
// const sayName = name => console.log(`Nama saya ${name}`);

// const sayHelo = () => console.log(`Selamat pagi semuanya! Ayo tidur`);


// // tidak perlu mengembalikan nilai (return)

// const multiply = (a, b) => a * b;
// console.log(multiply(4, 5));