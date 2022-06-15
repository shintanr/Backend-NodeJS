const state = {
    stock: {
        coffeeBeans: 2,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 2000);
    });
};

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();

// penjelasan promise berantai

// pertama, mesin akan mengecek status ketersediaan. terdapat fungsi setTimeout untuk menyimulasikan proses asynchronous dan meunda selama 1000 milidetik. lalu memastikan stok biji kopi dan air. terakhir fungsi promise untuk mencampurkan kopi dan air lalu menghidangkannya ke dalam gelas.

// pembacaan program
/// untuk membuat espresso lakukan pengecekan ketersediaan mesin, kemudian periksa stok di dalam mesin, kemudian buat kopi.