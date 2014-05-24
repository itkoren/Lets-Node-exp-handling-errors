// Include The 'http' Module
var http = require("http");

// Create the HTTP Server
var server = http.createServer(function(req, res) {
    // Handle HTTP Request
    var result = decodeURIComponent(req.url);

    // chop off / at the beginning
    result = result.slice(1);
    result = result.toUpperCase(); // SHOUT

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(result + "\n");
}).listen(process.env.PORT || 8000, process.env.HOST || "0.0.0.0", function() {
    console.log("HTTP Server Started. Listening on " + server.address().address + " : Port " + server.address().port);
});