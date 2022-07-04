// const routes = [{
//         method: "GET",
//         path: "/",
//         handler: (request, h) => {
//             return "Homepage";
//         },
//     },
//     {
//         method: "GET",
//         path: "/about",
//         handler: (request, h) => {
//             return "About Page";
//         },
//     },
// ];

// module.exports = routes;

// LATIHAN

const routes = [{
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Homepage";
        },
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About Page";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method";
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "Halaman tidak ditemukan";
        },
    },
];

module.exports = routes;

// keterangan
// *, route dapat diakses menggunakan semua jenis method yang ada dalam HTTP
// /{any*}, untuk menangani permintaan masuk pada path yang belum ditentukan. ---routing dinamis menggunakan hapi, tapi akan kalah kuat dengan route yang ditetapkan secara spesifik