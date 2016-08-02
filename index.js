var spawn = require('child_process').spawn;
var conf = {};
// This can be configured to any port you would like but the sample will stop working.
process.env.PORT=1337;
conf.cwd = __dirname + '/node_modules/microgateway';
process.env.CONFIG_DIR = __dirname;

var mg = spawn('node', ['.'], conf);

mg.stdout.on('data', function (data){
   console.log(data);
});

mg.stderr.on('data', function(data) {
  console.log(data);
});


