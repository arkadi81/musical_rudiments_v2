from bottle import Bottle, run, route, template
import bottle

bottle.debug(True)
bottle.TEMPLATE_PATH.insert(0,'./app/views/') #make sure bottle simple templating engine knows where to search

# Bottle.debug(True)
app = Bottle()
# app.debug = True
# 




#routes must come before the server starts
@app.route('/')
@app.route('/index1')
def index():
	# return("<html><body>hello2</body></html>");
	return template('base')

@app.route('/moo')
def moo():
	return("test2")