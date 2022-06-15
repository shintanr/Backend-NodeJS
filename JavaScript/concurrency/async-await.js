// contoh program dengan sync

function makeCoffee() {
    const coffee = getCoffee();
    console.log(coffee);
}

makeCoffee();

// contoh program dengan async
// dengan promise

function makeCoffee() {
    getCoffee().then((coffee) => {
        console.log(coffee);
    });
}

// dengan callback

function makeCoffee() {
    getCoffee(function(coffee) {
        console.log(coffee);
    });
}

makeCoffee();

// semenjak ES8 (js 2017), bisa menuliskan asynchronous process selayaknya synchronous dengan bantuan keyword async dan await

// async dan await tidak dapat digunakan jika tidak ada promise

// fungsi getCoffee() dan bagaimana ia mengembalikan promise.

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    });
};

// untuk dapetin nilai dari fungi getCooffe() menggunakan .then()

function makeCoffee() {
    getCoffee().then((coffee) => {
        console.log(coffee);
    });
}

makeCoffee();

// Async await memungkinkan menuliskan proses asynchronous layaknya proses synchronous

function makeCoffee() {
    const coffee = getCoffee();
    console.log(coffee);
}

makeCoffee();

// Namun, ketika kode di atas dijalankan hasilnya tidak akan sesuai yang kita harapkan karena fungsi getCoffee() merupakan object Promise. Untuk menunggu fungsi getCoffee() yang berjalan secara asynchronous, tambahkan keyword await sebelum pemanggilan fungsi getCoffee().

const coffee = await getCoffee();

// Kemudian, karena fungsi makeCoffee() sekarang menangani proses asynchronous, maka fungsi  tersebut juga menjadi fungsi asynchronous. Tambahkan async sebelum deklarasi fungsi untuk membuatnya menjadi asynchronous.

async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
}

makeCoffee();

// Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous. Lalu, keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.

// await hanya akan mengembalikan nilai promise jika berhasil dilakukan(onfulfilled). jika promise gagal atau onrejected maka bisa dengan menggunakan try...catch

// biasakan hasil diletakkan di blok try, maka nanti onrejected ditempatkan di blok catch

async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeCoffee();

// kode mesin kopi, dengan pendekatan async-await

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspresso();