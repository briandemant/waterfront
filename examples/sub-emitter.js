var zmqp = require('../').connect()
var sock = zmqp.socket('sub-emitter')

sock.on('*', function(channel, data) {
	console.log(channel, data)
})