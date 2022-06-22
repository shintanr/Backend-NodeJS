class Mail{
	constructor(author){
		this._contact = [];
		this.from = author;
	}
}

sendMessage = function(msg, to){
	console.log(`You send: ${msg} to ${to} from ${this.from}`);
	this_contact.push(to);
}

showAllContact {
	return this._contact;
}

// // cara membuat kelas turunan atau inheritance 

// class ChildClassName extends ParentClassName{

// }


// // atau

// ChildClassName.prototype = new ParentClassName();


class Whatsapp extends Mail{
	constructor(){
		super();
		this.username = 'dicoding';
		this.isBussinessAccount = true;
	}

	myProfile(){
		return `my name ${this.username}, is ${this.isBussinessAccount ? 'Bussines' : 'Personal'}`;

	}
}

const wa1 = new Whatsapp(081234567890);
console.log(wa1.myProfile());

// memanggi l atribute dari parent class

wa1.sendMessange('halo', 085123789654);