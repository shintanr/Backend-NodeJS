// object composition adalah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class
// 1. Memisahkan fungsi-fungsi umum yang biasa digunakan 
// 2. Membuat class seperti biasa
// 3. simpan atribut yang dipunya ke dalam sebuah object, self atau state untuk menampung atribut
// 4. Menambahkan perilaku (method atau function) yang hanya ada di class tsb
// 5. Membuat kumpulan atribute, generik method, dan spesifik method menjadi satu objest






// list of abstractions
const canSendMessage = self => ({
	sendMessage: () => console.log('sent message: ', self.message)
})

const checkIsValidPhone = self => ({
	isValid:() => console.log ('valid phone', self.from)
})

// membuat objek komposisi / komposisi objek
const personalEnterprise = (from, message, store) => {
	// attributes
	const self = {
		from,
		message,
		store
	}

	// method
	const personalEnterpriseBehaviours = self => ({
		createCatalog: () => console.log('Catalog has created: ', self.store)
	})


	// membuat komposisi objek
	return objek.assign(self, personalEnterpriseBehaviours(self), canSendMessage(self), checkIsValidPhone(self))
}

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih','Dicoding store')
pe1.createCatalog()
pe1.sendMessage()