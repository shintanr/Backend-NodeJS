try {
    console.log("Awal blok try"); // (1)
    errorCode; // (2)
    console.log("Akhir blok try"); // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

// $ node try-catch.js
// Awal blok try
// ReferenceError
// errorCode is not defined
// ReferenceError: errorCode is not defined
//     at Object.<anonymous> (E:\Backend-NodeJS\JavaScript\introdu
// ce-error\try-catch.js:3:5)
//     at Module._compile (node:internal/modules/cjs/loader:1101:1
// 4)
//     at Object.Module._extensions..js (node:internal/modules/cjs
// /loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:
// 822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:intern
// al/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47