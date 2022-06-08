// // contoh

// class Monster {
// 	constructor(name){
// 		this.name = name
// 	}

// 	attack(){
// 		console.log(`${this.name} attacked`)
// 	}

// 	walk(){
// 		console.log(`${this.name} walked`)
// 	}

// 	fly(){
// 		return
// 	}
// }

// class FlyingMonster extends Monster {
// 	fly(){
// 		console.log(`${this.name} flew`)
// 	}
// }

// class SwimmingMonster extends Monster {
// 	swim(){
// 		console.log(`${this.name} swam`)
// 	}
// }


// class FlyingSwimmingMonster extends SwimmingMonster {
// 	fly(){
// 		console.log(`${this.name} flew`)
// 	}
// }


// const bear = new Monster('bear')
// bear.walk()
// bear.attack()

// const gagak = new FlyingMonster('gagak')
// gagak.walk()
// gagak.attack()
// gagak.fly()

// const hiu = new SwimmingMonster('hiu')
// hiu.walk()
// hiu.attack()
// hiu.swim()


function swimmer({ name }){
	return{
		swim: () => console.log(`${name} swam`)
	}
}

function attackerAndWalker({ name }){
	return{
		attack: () => console.log(`${name} attacked`),
		walk: () => console.log(`${name} walked`)
	}
}

function flyer({ name }){
	return{
		fly: () => console.log(`${name} flew`)
	}
}

// function swimmingMonsterCreator(name){
// 	const monster = {name: name}

// 	return {
// 		...monster,
// 		...attackerAndWalker(monster),
// 		...swimmer(monster)
// 	}
// }
// ini tidak berdampak apa2 jika dihapus


function flyingSwimmingMonsterCreator(name){
	const monster = {name: name}

	return {
		...monster,
		...attackerAndWalker(monster),
		...swimmer(monster),
		...flyer(monster)

	}
}

const obj = flyingSwimmingMonsterCreator('Monster')
obj.walk()
obj.attack()
obj.swim()
obj.fly()