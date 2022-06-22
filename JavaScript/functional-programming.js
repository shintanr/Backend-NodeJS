// penulisan gaya imperatif

mahasiswa = ['john', 'mike', 'alfa', 'roney']

mahasiswaModif = []

for(let i = 1; i < mahasiswa.length; i++){
	mahasiswaModif.push(`${mahasiswa[i]} ?`)

}

console.log(mahasiswaModif)


// // dibanding

// mahasiswa = ['john', 'mike', 'alfa', 'roney']

// mahasiswaModif = []

// for(let i = 1; i < mahasiswa.length; i++){
// 	console.log(mahasiswaModif.push(`${mahasiswa[i]} ?`))

// }


// kenapa hasil beda antara atas dan bawah
// karena .push  di Array itu mengembalikan nilai panjang array setelah dimasukkan
// yang bawah kenapa outputnya 1 2 3 soalnya kamu ngeprintnya bukan ngeprint array, tapi ngeprint method push(). Nah method push() itu dia ngereturn panjang array yang baru.




// deklaratif

const animal = ['anjing', 'kambing', 'kuda nil', 'jerapah', 'hyena']

const newAnimal = animal.map((anml) => `${anml} ><`)

console.log(newAnimal)