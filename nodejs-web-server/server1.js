// const http = require("http");

// const requestListener = (request, response) => {
//     response.setHeader("Content-Type", "text/html");

//     response.statusCode = 200;
//     response.end("<h1>Halo HTTP server!</h1>");
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`server berjalan pada http://${host}:${port}`);
// });

// method/verb request

// const http = require("http");

// const requestListener = (request, response) => {
//     response.setHeader("Content-Type", "text/html");

//     response.statusCode = 200;

//     const { method } = request;
//     if (method === "GET") {
//         response.end("<h1>Hello</h1>");
//     }

//     if (method === "POST") {
//         // response.end("halo");
//         let body = [];

//         request.on("data", (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString()
//             response.end(`<h1>Hai, ${body}!</h1>`)
//         })
//     }

//     // if (method === "PUT") {
//     //     response.end("hai");
//     // }

//     // if (method === "DELETE") {
//     //     response.end("yhh");
//     // }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";

// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });

// Sabtu, 2 Juli 2022

const http = require("http"); // mengimpor dari http

const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text-html"); //

    response.statusCode = 200;
    const { method } = request;
    if (method === "GET") {
        response.end("<h1>Hello</h1>");
    }

    if (method === "POST") {
        // response.end("halo");
        let body = [];

        request.on("data", (chunk) => {
            body.push(chunk);
        });

        request.on("end", () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }

    // if (method === "PUT") {
    //     response.end("hai");
    // }

    // if (method === "DELETE") {
    //     response.end("yhh");
    // }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});