var spawn = require('child_process').spawn;
var conf = {};

conf.cwd = __dirname + '/node_modules/microgateway';
process.env.CONFIG_DIR = __dirname;

var mg = spawn('node', ['.'], conf);

mg.stdout.on('data', function (data){
   console.log(data);
});

mg.stderr.on('data', function(data) {
  console.log(data);
});


