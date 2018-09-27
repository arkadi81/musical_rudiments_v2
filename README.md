# strawberry front and back end tools

have node/npm installed to help with tooling


npm install -g sass

sudo npm install --global gulp
npm install postcss-cli autoprefixer
npm install --save-dev gulp-postcss
npm install --save-dev gulp-sourcemaps

now with all dev dependencies in package.json, and all tasks in gulpfile.js based on marsbq project

browsersync funnel works!

20180925 incorporating python/flask backend - the goal is to just have node/front end for development purposes (linting, browsersync, autoprefixing etc)

workflow:
there after clone, there are two tools to install - front and back
get into venv:
reqs: python, pip, venv installed on system

1. clone repo
2. from project root, create venv: virtualenv venv
3. activate venv: in project root: source venv/bin/activate
3. install backend dependences: pip install -r requirements.txt
4. install front end dev stuff: npm install
5. run python server ./run.sh (or directly: python strawberry.py)
6. activate front end monitoring: (will watch for file changes and initiate browser sync) gulp

git is predefined with gitignore stuff already
add, commit, push, repeat from project root

as of 20180927, python/bottle/livereload/browser sync works (no css injection just yet, but the refresh functions). As of right now, the processes for server start and gulp are separate (start server using python strawberry.py), then start dev tool loop using gulp.

if the runserver event is added to default, its easy to merge the two items, but its nice to keep them separate for debugging
 

to start browsersync/autoreload/watch:
go to homedir
gulp

git is predefined with gitignore stuff already
add, commit, push, repeat from project root
 
FEATURES AND TODO ITEMS
- incorporate testing
- incorporate db (SQLite) and crud capacity / ORM stuff
- incorporate front end routing + history (may need middleware for browsersync to work properly)
- refactor directory structure
- establish templates
- incorporate session and login control
- admin panel
- testing
- rewrite theory.js
- mobile first design
- update dependencies to modern(er) versions as needed
- port generic part into a "stock version of a project" that can be cloned as a boilerplate
