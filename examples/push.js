var zmqp = require('../').connect()
var sock = zmqp.socket('push')

setInterval(function() {
	process.stdout.write('.')
	sock.send({ "date" : (+new Date) })
}, 200)
