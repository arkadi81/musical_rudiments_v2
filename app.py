#!/usr/bin/python
from livereload import Server
from bottle import Bottle, run, route
import os


# app.debug(True)
# Without this line templates won't auto reload because of caching.
# http://bottlepy.org/docs/dev/tutorial.html#templates

app = Bottle()
app.debug = True



#routes must come before the server starts
@app.route('/')
def index():
	return("sasdasad")

# app.debug(True()
# server = Server(app.wsgi)
# server.watch
server = Server(app)
# server.serve(open_url=False, debug=True)# debug = True

if __name__ == '__main__':
	port = int(os.environ.get('PORT', 8080))
	run(host='0.0.0.0', port=port, debug=True)
	# server.serve(debug=True)
	# run(host='localhost', port=8080, debug=True, reloader =True)
    # run(port=5500, debug=True, reloader=True)
	