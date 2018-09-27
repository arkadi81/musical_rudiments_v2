from app import app
from livereload import Server
import os


# from app import routes

server = Server(app)
server.watch('./') # the . is SUPER IMPORTANT!!!
server.serve(debug=True)
# app.run(reloader=True)


# if __name__ == '__main__':
	# port = int(os.environ.get('PORT', 8080))
	# server.serve(debug=True)
	# app.run(host='0.0.0.0', port=port, debug=True)
	
	# run(host='localhost', port=8080, debug=True, reloader =True)
    # run(port=5500, debug=True, reloader=True)

