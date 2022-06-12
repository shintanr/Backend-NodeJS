// first class function => memperlakukan fungsi dalam js selayaknya sebuah data

const hello = () => {
    console.log("Hello!");
};

const say = (someFunction) => {
    someFunction();
};

const sayHello = () => {
    return () => {
        return () => {
            console.log("Hello!");
        };
    };
};

hello();
say(hello);
sayHello()()();

// HOF adalah fungsi yang bisa menerima fungsi lain sebagai argumen, me-return sebuah fungsi/ keduanya
// teknik yang biasanya digunakan:
// mengabstrakti atau mengisolasi sebuah aksi, event, atau menangani alur asynchronus menggunakan callback, promise, dan lainnya
// membuat utilities yang dapat digunakan di berbagai tipe data
// membuah teknik currying atau function composition
// contoh Array map()

// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// const arrayMap = (arr, action) => {
//     const loopTrough = (arr, action, newArray = [], index = 0) => {
//         const item = arr[index];
//         if (!item) return newArray;
//         return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
//     }

//     return loopTrough(arr, action);
// }

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
    names,
    newNames,
});