const stock = {
    coffeeBeans: 250,
    water: 1000,
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

checkStock().then(handleSuccess, handleFailure);