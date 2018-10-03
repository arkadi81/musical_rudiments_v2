from bottle import Bottle, run, route, template, static_file
import bottle
# import os
# import sys

bottle.debug(True)
bottle.TEMPLATE_PATH.insert(0,'./app/views/') #make sure bottle simple templating engine knows where to search

# Bottle.debug(True)
app = Bottle()
# app.debug = True
# 


data = {
	'version_num': 2.01
}

#routes must come before the server starts
@app.route('/')
# @app.route('/index')
def index():
	# return("<html><body>hello2</body></html>");
	return template('base', data=data)

@app.route('/moo')
def moo():
	return("test2")

# @app.route('/<filename>.css')
# def stylesheets(filename):
# 	print("static styles route fired")
# 	return static_file('{}.css'.format(filename), root='app/static/css') #app/static/css works... not sure how to remove it

@app.route('/<filepath:path>')
def static_server(filepath):
	print("static server fired: {}".format(filepath))
	return static_file(filepath, root='app/static') #app/static/css works... not sure how to remove it
