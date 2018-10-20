# Musical Rudiments V2

A web application for practice and testing of music theory
This project is an expansion of the orignal musical rudiments project, found at https://github.com/arkadi81/musical_rudiments a production version of the original web application can be viewed at https://finearts.uvic.ca/music/rudiments .

## Goals for this iteration
### User features
* Mobile first design
* Better cross browser compatibility and accessibility support
* An admin panel to allow for access and modification of options / types / amounts of questions, ability to monitor testing and download test results.
* Expanded UI which will allow for faster and more approachable interaction with the application, including handheld devices.

### Development features
The first version of this application relied on HTML/JS/JQuery/PHP. Due to the use of pure Javascript to produce dynamic GUI, and the lack of templating support, much of the code must be reiterated in various sections, rendering the application harder to maintain, expand in debug. In this version, goals include:
* [x] Incorporate automated build tools to allow for easier development and maintenance (currently using Gulp, autoprefixer for css, linter for js code)
* [x] Refactoring of the directory structure to better support separation of concerns, testing and scalability
* [x] Incorporation of a more robust web server and framework (currently using Python/bottle, with future support for relational database to store exam results and options for admin access)
* [x] BrowserSync and livereload for easier development
* [ ] Incorporate templates to enhanse ability to reuse UI code and logic (currently using bottle simple templating engine)
* [ ] Incorporate client side routing so as to make the application reload less pages while in practice mode
* [ ] Incorporate code unit testing (and hopefully E2E, eventually)
* [ ] Add more robus session and login control
* [ ] Clean up the code related to the music theory engine, originally in theory.js
* [ ] Update dependencies to modern(er) versions as needed
* [ ] Use this project as a learning tool and boilerplate for future, small MVC/SPA work.  be cloned as a boilerplate

## Setup on development machine

### Prerequisites
* Have node/npm installed to help with tooling
* npm install -g sass
* Sudo npm install --global gulp
* Have Python/Pip/virtualenv installed


### Installation 
1. clone repo
2. from project root, create venv: virtualenv venv
3. activate venv: in project root: source venv/bin/activate
3. install backend dependences: pip install -r requirements.txt
4. install front end dev stuff: npm install
5. run python server ./run.sh (or directly: python strawberry.py)
6. activate front end monitoring: (will watch for file changes and initiate browser sync) gulp

### Acknowledgements and support
The graphical ability in this project relies heavily on 0fxe's Vexflow and Vextab projects (http://www.vexflow.com/). I am using a modified version of Vexflow, to which I added some extra options (e.g. API for rendering notes in various colors)

## Misc
* as of 20180927, python/bottle/livereload/browser sync works (no css injection just yet, but the refresh functions). As of right now, the processes for server start and gulp are separate (start server using python strawberry.py), then start dev tool loop using gulp.

* if the runserver event is added to default, its easy to merge the two items, but its nice to keep them separate for debugging
 

* to start browsersync/autoreload/watch:
* go to homedir
* gulp