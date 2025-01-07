const { log } = require("node:console");
const http = require("node:http");
const { json } = require("node:stream/consumers");

const server = http.createServer((request, response) => {
    const {method, statusCode, url} = request
    const sports = ["basketball", "tennis", "volley", "soccer"]

    if (url == "/") {
        response.write("<div><h2>Server Node HTTP</h2> <small>Server running</small></div>")
        response.end()
        return
    }

    if (url == "/api/sports") {
        response.write(JSON.stringify(sports))
        response.end()
        return
    }
})

server.listen(3000, "localhost", () => {
    console.log("Server running on http://localhost:3000");
})