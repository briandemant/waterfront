var should = require("should")
var zmqp = require("../")
var port = 9100
var host = "localhost"
var connection = zmqp.connect(port, host)

describe("pub/sub", function() {

	before(function(done) {
		zmqp.listen(port, host, function(err) {
			done()
		})
	})

	it("should be recieve messages", function(done) {
		var pub = connection.socket('pub')
		var sub = connection.socket('sub')
		var count = 0

		var poll = setInterval(function() {
			pub.send("message", { "location" : "vancouver" })
		}, 1)

		sub.on("message", function() {
			count++
			if (count == 100) {
				clearInterval(poll)
				done()
			}
		})
	})

	it("should be able to use different channel", function(done) {
		var pub = connection.socket('pub')
		var sub = connection.socket('sub')
		var count = 0

		var poll = setInterval(function() {
			pub.send("city", { "name" : "vancouver" })
		}, 1)

		sub.on("city", function(msg) {
			count++
			if (count == 100) {
				clearInterval(poll)
				done()
			}
		})

	})

})