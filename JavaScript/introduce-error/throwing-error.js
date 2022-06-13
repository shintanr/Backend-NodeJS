// // throwing error, case benar

// let json = '{"name" : "Shinta", "age" : 19}';

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// throwing error dengan json tidak sesuai

// let json = "{bad json}";

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// throwing error dengan ada nilai yg undefined

// let json = '{"age": 20';

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
// secara sintaks tidak timbul error, tp karena tidak ada properti name maka sama saja dianggap sebagai errornya program. bisa ditangani dengan sebagai berikut:

// let json = '{"age" : 19}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required."); // untuk menjelaskan error yang terjadi bukan hanya syntaxerror
//     }

//     console.log(user.name); // undefined
//     console.log(user.age); // 19
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

let json = '{"name": "Shinta", "age" : 19}';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required");
    }

    // errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

// dengan instanceOf, bisa mendapatkan tipe dari error yang terjadi. bisa membuat percabangan bagaimana cara menangani errornya