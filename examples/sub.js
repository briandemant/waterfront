var zmqp = require('../').connect()
var sock = zmqp.socket("sub")

sock.on("message", function(msg) {
	console.log(msg)
})