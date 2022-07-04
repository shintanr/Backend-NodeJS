const init = async() => {
    const server = hapi.server({
        port: 5000,
        host: "localhost",
    });

    // server.route({
    //     method: "GET",
    //     path: "/",
    //     handler: (request, h) => {
    //         return "Hello, World!";
    //     },
    // });

    // server.route() dapat menerima array

    server.route([{
            method: "GET",
            path: "/",
            handler: (request, h) => {
                return "Homepage";
            },
        },
        {
            method: "GET",
            path: "/about",
            handler: (request, h) => {
                return "About Page";
            },
        },
    ]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

// request handler ada di dalam route configuration
// rekomendasi: memisahkan seluruh routes configuration pada berkas JavaSccript berbeda.