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

1. Create venv
2. clone the repo into venv
3. activate venv: in project root: virtualenv venv && source venv/bin/activate
3. install backend dependences: pip install -r requirements.txt
4. install front end dev stuff: npm install
5. run python strawberry.py
6. activate front end monitoring: (will watch for file changes and initiate browser sync) gulp

git is predefined with gitignore stuff already
add, commit, push, repeat from project root
 
FEATURES AND TODO ITEMS
- incorporate testing
- incorporate db (SQLite) and crud capacity / ORM stuff
- incorporate front end routing + history (may need middleware for browsersync to work properly)

to start browsersync/autoreload/watch:
go to homedir
gulp


20180927
ideas for quicker development: ideally (maybe), logic could move to back end. for the time being, keep logic on front end, and just refactor the introduction of templating (server / client?!), knockout and event handler bootstrapping