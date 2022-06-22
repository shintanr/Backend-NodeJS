// // function dengan pendekatan prototype

// function Mail(){
// this.form = 'pengirim@dicoding.com';
// };

// Mail.prototype.sendMessage = function(msg, to){
// 	console.log(`you send: ${msg} to ${to} from ${this.from}`);

// };

// // pemanggilan
// const mail1 = new Mail();
// mail1.sendMessage('halo', 'penerima@dicoding.com');






// // function tanpa pendekatan prototype
// function Mail(){
// 	this.form = 'pengirim@dicoding.com';
// 	this.sendMessage = function(msg, to){
// 		console.log(`You send: ${msg} to ${to} from ${this.from}`);
// 	}
// }

// const mail = new Mail();
// mail;



// menggunakan class

class Mail{
	constructor(){
		this.from = 'pengirim@dicoding.com';
	}

	sendMessage(msg, to){
		console.log(`You send: ${msg} to ${to} from ${this.from}`);

	}

	address(addr){
		console.log(`Her address in ${addr}`);
	}
}

const mail1 = new Mail();
mail1.sendMessage('Hallo', 'penerima@dicoding.com');
mail1.address('Banyumas');