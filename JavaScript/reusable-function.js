const newArray = ['shinta', 'nur', 'rohmah'].map((name) => {return `${name}!`})

console.log(newArray)

const hewan = ['anjing', 'kucing', 'harimau'].map((hew) => {return `${hew}`})
console.log(hewan)


// array filter. nilai callback harus boolean

const thrutyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item))

console.log(thrutyArray)


// contoh lain

const students = [
{
	name: 'shinta',
	score: 100
},
{
	name: 'nur',
	score: 80
},
{
    name: 'Ron',
    score: 90,
 },
 {
    name: 'Bethy',
    score: 75,
 }
]

const eligibleScholarshipStudents = students.filter((student) => student.name != 'shinta')
console.log(eligibleScholarshipStudents)
const eligibleScholarshipStudent = students.filter((student) => student.score > 90)

console.log(eligibleScholarshipStudent)


// Array Reduce 

const totalScore = students.reduce((acc, student) => acc + student.score, 0)

console.log(totalScore)


// 1) Jika acc dan student adalah accumulator dan current value, untuk apa arrow function ini ( => acc + student.score)?

// Karena menurut dokumentasi resmi untuk fungsi reduce, fungsi yang kita gunakan sebagai callback harus mengembalikan (return) sebuah nilai, Nilai tersebut lalu akan digunakan sebagai nilai parameter acc ketika elemen kedua diproses. Kurang lebih jika tidak menggunakan fungsi reduce, maka kode bisa ditulis sebagai berikut:

//     const students = [ ... ]
//     let acc = 0;
//     for (student of students){
//         acc = acc + student.score
//         // perhatikan bahwa saya terus menambahkan nilai acc sebelumnya dengan nilai students[i].score
//         // dan menyimpannnya kembali ke variabel acc untuk digunakan di iterasi berikutnya.
//     }
//     console.log(acc)


// 2) Apakah (acc, student) => acc + student.score  disebut Callback Function?

// Iyes benar, kode tersebut adalah callback function yang digunakan di fungsi reduce di atas.





// Array Some

// mengambalikan nilai boolean

const array = [1,2,3,4,5]
const even = array.some(arr => arr % 2 === 1)

console.log(even)

// digunakan untuk mengecek ada tidak nilai yang lolos kriteria





// Array find
// digunakan untuk  mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yg ada dalam callback function. misal ada akan mengembalikan nilainya, jika tidak maka akan undefined

// pendefinisian array.find()

// arr.find(callback(element, [index], [thisArg]))

const findShinta = students.find(student => student.name === 'shinta')
console.log(findShinta)

const findScore80 = students.find(student => student.score === 8)
console.log(findScore80)






// Array sort
// digunakan dalam pengurutan nilai

const months = ['March', 'Jan', 'Feb', 'Jun']
months.sort()
console.log(months)

// const array1 = [1,23,45,12,1,12]
// array1.sort()
// console.log(array1)


const jumlahKutuKucing = [2, 1, 45, 4, 41, 12, 32, 21]

const pembanding = (a, b) => {
	return a - b
}

const urutan = jumlahKutuKucing.sort(pembanding)
console.log(urutan)





// Array every
// mengecek apakah SEMUA nilai sesaui dg yg didefinisikan, return boolean

    // arr.every(callback(element, [index], [array])

const scores = [78,89,76]
const minimumScore = 80


const examPassed = scores.every(score => score >= minimumScore)
console.log(examPassed)




// Array forEach
// buat manggil callback func pada tiap iterasi index array
// ngga ada return
const pemalas = ['shan', 'shin', 'shun']


// imperatif
for (let i = 0; i < pemalas.length; i++){
	console.log(`heh ${pemalas[i]}, belajar!`)
}

// dengan forEach / declaratif 
pemalas.forEach((nama) => {
	console.log(`iya huu, dasar ${nama}`)
})

// continue dan break ngga bisa dipakai di forEach, map, filter
// break menghentikan
// continue melompati

for (let i = 0; i < pemalas.length; i++){
	if (pemalas[i] === 'shan') continue
	if(pemalas[i] === 'shun') break

	console.log(`hmm ${pemalas[i]}, mending turu`)
}

// pemalas.forEach((nama) => {
// 	if(nama === 'shan') continue
// })

// console.log(`hehheh ${nama}`)
// kagak bisa ye


console.log()
console.log('segini dulu, lanjut besok')







