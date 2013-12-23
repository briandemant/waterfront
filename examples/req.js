var zmqp = require("../").connect()
var sock = zmqp.socket('req')

sock.send({ req : +new Date }, function(rep) {
	console.log(rep)
	process.exit()
});