// konsep dalam FP yang merupakan teknik pada fungsi untuk memanggil dirinya sendiri

// const countDown = start => {
// 	do {
// 		console.log(start)
// 		start -=1
// 	}

// 	while(start > 1)
// }

// countDown(100)

// mengulang / menghitung mundur dari 100 sampai while berapa

// bentuk rekursifnya

const countDown = start => {
	console.log(start)
	if(start > 0) countDown(start-1)
}

countDown(10)

// kenapa terakhir 0, karena 0 didapat karena kondisi start = 1 atau start > 0
