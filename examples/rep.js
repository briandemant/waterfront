var zmqp = require('../').connect()
var sock = zmqp.socket('rep')

sock.on('message', function(data, callback) {
	data.rep = +new Date
	callback(data)
})