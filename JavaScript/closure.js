// Closure adalah sebuah fungsi yang dapat mengekses variabel di dalam lexical scope-nya
// Lexical scope adalah sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingup induknya

// function sayName(){
// 	var name = 'Shinta';

// 	function hai(){
// 		console.log(`Halo, ${name}`);
// 	}
// 	hai();
// }
// sayName();

// function sayName(){
// 	var name = "aku";

// 	function Hai(){
// 		console.log(`hai, nama saya ${name}`);
// 	}

// 	return hai;
// }

// let variabelBaru = sayName();
// sayName();


// menggunakan counter
let add = () => {
	let counter = 0;
	return () => {
		return ++counter;

	};
}

let addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());