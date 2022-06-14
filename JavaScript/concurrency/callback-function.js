// bagaimana menangani suatu nilai yang didapatkan secara asynchronous pada program yang berjalan secara synchronous

// awalnya

// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// };

// const coffee = orderCoffee();
// console.log(coffee);

// output
// Sedang membuat kopi, silakan tunggu...
// null

// pembetulannya

const orderCoffee = (callback) => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
};

orderCoffee((coffee) => {
    console.log(coffee);
});

// coffee yg ingin dijadikan callback'