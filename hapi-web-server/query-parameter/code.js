const { server } = require("@hapi/hapi");

server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
});