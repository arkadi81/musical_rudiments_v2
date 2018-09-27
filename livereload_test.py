from bottle import Bottle, run, route, template
# from twisted import server, wsgi
# from livereload import Server
import bottle

# Without this line templates won't auto reload because of caching.
# http://bottlepy.org/docs/dev/tutorial.html#templates
bottle.debug(True)

app = Bottle()

@app.route('/')
def index():
	# return("<html><body>hello234</body></html>")
	return template('base')

# server = Server(app)
# server.watch
# server.serve()
if __name__== "__main__":
	app.run(host="0.0.0.0",debug=True, reloader=True, port=5500)