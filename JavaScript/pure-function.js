let Pi = 3.14

// const hitungLuasLingkaran = (jarijari) => {
// 	return Pi * (jarijari * jarijari)
// } 

// Pi = 1
// console.log(hitungLuasLingkaran(4))
// console.log(hitungLuasLingkaran(2))


const hitungLuasKerucut = (jarijari) => {
	return Pi * 1/3 * jarijari * jarijari * (pelukis = 7)}

console.log(Math.ceil(hitungLuasKerucut(2)))  // pembulatan ke atas
console.log(Math.round(hitungLuasKerucut(2))) // pembulatan terdekat
console.log(Math.floor(hitungLuasKerucut(2))) // pembulatan ke bawah 



// inpure

const hitungLuasPersegi = (sisi) => {
	return sisi * sisi
}

console.log(hitungLuasPersegi(3))
console.log(hitungLuasPersegi(8))

const sayHelo = (hai, nama) =>{
	return `${hai} namaku ${nama}`
}

console.log(sayHelo('hai', 'shinta'))


const createPersonWithAge = (age, person)=> {
	person.age = age
	return person
}

const person = {
	name: 'Shinta'
}

const newPerson = createPersonWithAge(18, person)

console.log({person, newPerson})


// yang di atas bukan pure function

// di bawah ini merupakan contoh dari pure function
	// syarat dari pure function
	// mengembalikan nilai yang sama bila inputannya (nilai parameter) sama
	// hanya bergantung pada argumen yang diberikan
	// tidak menimbulkan efek samping

const buatOrangDenganUsia = (usia, orang) =>{
	return {...orang, usia}
}

const orang = {
	nama: 'shin'
}

const orangBaru = buatOrangDenganUsia(18, orang)

console.log({orang, orangBaru})


const namaDenganNim = (nim, nama) => {
	return {...nama, nim}
}

const nama = {
	name : 'shin'
}

const namaBaru = namaDenganNim(1234, nama)

console.log(nama, namaBaru)


const animalWithTaring = (nama, jumlah) =>{
	return {...jumlah, nama}
}

const jumlah = {
	total : 35
}

const jumlahBaru = animalWithTaring('shin', jumlah)

console.log({jumlah, jumlahBaru})