// untuk menghitung umur

const umurku = hariLahir => {
	const harlah = new Date(hariLahir)
	const hariIni = Date.now()

	const selisih_ms = hariIni - harlah.getTime()
	const bedaTanggal = new Date(selisih_ms)

	return bedaTanggal.getFullYear() - 1970
}



console.log(umurku('2003-04-10'))



// coontoh build in class lainnya

const listofContent = [2,5, 'saya', {}]
console.log(Array.isArray(listofContent))

const splitText = "12:20:00".split(':');
console.log(splitText)

console.log('shinta nurrohmah'.split(" "))
console.log('shinta'.split(""))