// dalam pembuatan kue, callback tidak bisa digunakan, tapi bisa diatasi dengan callback-hell. hanya saja kodenya akan susah untuk di maintain di masa yang akan datang sebab tidak readable

// jika dibuat secara synchronous

// function makeACake(...rawIngredients) {
//     const ingredients = collectIngredients(rawIngredients);
//     dough = makeTheDough(ingredients);
//     pouredDough = pourDough(dough);
//     cake = bakeADough(pouredDough);
//     console.log(cake);
// }

// secara asynchronous
// function makeACake(...rawIngredients) {
//     collectIngredients(rawIngredients, function(ing redients) {
//         makeTheDough(ingredients, function(dough) {
//             pourDough(dough, function(pouredDough) {
//                 bakeACake(pourDough, function(cake) {
//                     console.log(cake);
//                 });
//             });
//         });
//     });
// }

// hal diatas bisa dihindari dengan promise

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients).then(makeTheDough).then(pourDough).then(bakeAcake).then(console.log);
}