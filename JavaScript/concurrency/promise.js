// ciri khas dari promise .then

// 3 kondisi prommise
// 1. pending (sedang dalam proses)
// 2. fullfiled (terpenuhi)
// 3. rejected (gagal terpenuhi)

// keadaan promise awal adalah pending

const executeFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
};

const makeCoffee = () => {
    return new Promise(executeFunction);
};

const coffeePromise = makeCoffee();
console.log(coffeePromise);

// promise biasa digunakan untuk menjalankan proses asynchronous seperti mengambil data dari internet/API. hasil dapat terpenuhi (fullfiled) atau gagal (reject)