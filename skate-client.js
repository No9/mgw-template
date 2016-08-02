var http = require("https");

// Required to override the self signed cert.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var options = {
  "method": "GET",
  "hostname": "127.0.0.1",
  "port": 1337,
  "path": "/skate",
  "headers": {
    "x-ibm-client-id": "default"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();