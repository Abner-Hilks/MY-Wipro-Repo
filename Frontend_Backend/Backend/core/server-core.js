// Q7 Nodejs core Modules

const fs = require("fs");
const path = require("path");
const http = require("http");

// Log directory + file
const logDir = path.join(__dirname, "../logs");
const logFile = path.join(logDir, "app.log");

// Ensure directory exists
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Write startup log
fs.appendFileSync(logFile, "App started\n");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "running" }));
});

server.listen(4001, () => {
    console.log("Core HTTP server (Q7) running at http://localhost:4001");
});
