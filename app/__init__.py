from bottle import Bottle, run, route, template
import bottle

bottle.debug(True)

# Bottle.debug(True)
app = Bottle()
# app.debug = True
# 




#routes must come before the server starts
@app.route('/')
@app.route('/index')
def index():
	# return("<html><body>hello2</body></html>");
	return template('base')

@app.route('/moo')
def moo():
	return("test2")