import { coffeeStock, isCoffeeMachineReady } from "./state.js";

const displayStock = (stock) => {
    for (const type in stock) {
        console.log(type);
    }
};

displayStock(coffeeStock);

// untuk mendapatkan nilai eksport melalui named export, gunakan destructuring object

// named import pakai destructuring object maka untuk mendapatkan nilai, pastikan penamaan variabel sesuai dengan nama variabel yg diekspor. kecuali menggunakan keyword as, misal

// import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";