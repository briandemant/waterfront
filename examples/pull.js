var zmqp = require('../').connect()
var sock = zmqp.socket('pull')

sock.on("message", function(data) {
	console.log(data)
})
