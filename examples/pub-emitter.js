var zmqp = require('../').connect()
var sock = zmqp.socket('pub-emitter')

setInterval(function() {
	process.stdout.write('.')
	sock.emit("vancouver", { "date" : (+new Date) })
}, 500)