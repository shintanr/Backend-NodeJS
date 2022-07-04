server.route({
    method: "GET",
    path: "/users/{username}",
    handler: (request, h) => {
        const { username } = request.params;
        return `Halo, ${username}`;
    },
});

// dengan hapi framework, cukup dengan membungkus path dengan tanda {}

// server.route({
//     method: 'GET',
//     path: '/users/{username?}', // menambahkan ? untuk membuat path parameter bersift opsional
//     handler: (request, h) => {
//         const { username = 'stranger' } = request.params;
//         return `Hello, ${username}!`;
//     },
//  });

// /users/dicoding, tanggapan server adalah Hello, dicoding, jika /users saja, maka akan tampil nilai default