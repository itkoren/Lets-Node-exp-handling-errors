var http = require("http");
var domain = require("domain");

var server = http.createServer(function(request, response) {
  var d = domain.create();
  
  d.on("error", function(err) {
    console.log(err);
  });
  
  d.run(function() {
	var result = decodeURIComponent(request.url);
	
	// chop off / at the beginning
	result = result.slice(1);
	result = result.toUpperCase(); // SHOUT
	
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.end(result + "\n");
  });
  
}).listen(3000, function(){
	console.log("HTTP Server listening on port", server.address().port);
});