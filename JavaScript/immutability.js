const ilmiahNama = {
	genus : "Aurelia",
	spesies : "aurits"

}

const namaBenar = (spesiesBaru, ilmiahNama) => {
	ilmiahNama.spesies = spesiesBaru
}


namaBenar('aurita', ilmiahNama)
console.log(ilmiahNama)


const namaku = {
	awal: 'Shinta',
	akhir: 'Nurrohmah'
}

const namakuYangBenar = (awalNama, namaku) => {
	namaku.awal = awalNama
}

namakuYangBenar('Shinnnn', namaku )
console.log(namaku)
console.log(namakuYangBenar)

// imutability

const user = {
	firtName: 'Shinta',
	lastName: 'Potter'
}

const createUserWithNewLastName = (newLastName, user) => {
	return {...user, lastName: newLastName}
}

const newUser = createUserWithNewLastName('Nurrohmah', user)
console.log(newUser)


const kambing = {
	badan: 'gemuk',
	kaki: 'empat'
}

const gantiUkuranBadan = (ukuranBadanBaru, kakiBaru, kambing) => {
	return {...kambing, badan : ukuranBadanBaru, kaki: kakiBaru}
}

const newKambing = gantiUkuranBadan('kurus', 'tiga', kambing)
console.log(newKambing)