var zmqp = require("../").connect()
var sock = zmqp.socket("pub")

setInterval(function() {
	sock.send({ pub : +new Date })
}, 200)