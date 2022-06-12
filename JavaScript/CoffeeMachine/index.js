const coffeeStock = require("./state");

// nama variabel bebas, require untuk memberikan parameter lokasi berkas state.js

console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
console.log();
console.log();

const makeCoffee = (jenis, miligrams) => {
    if (coffeeStock[jenis] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
};

makeCoffee("robusta", 80);

// 'jenis' digunakan untuk mewakilkan index dari array