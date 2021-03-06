# KP Styleguide

The styleguide to rule them all! this document covers:

* [Installing Styleguide](#installing)
* [How to Use in your Projects](#usage)
* [Command Documentation](#commands)
* [What's in Styleguide](#contents-styleguide)
* [Setting up Namespacing in your project](#namespacing)
* [Contributing](https://stash.kp.org/projects/RWD/repos/styleguide/browse/contributing.md)
* [Resources and Helpful Links](#resources)
* [Questions](#questions)

To view deployed examples of different components [see the online version](https://dev10.kaiserpermanente.org/styleguide/)

<a name="installing"></a>
## Installing Styleguide
Make sure you are running [Node JS](https://nodejs.org) to run npm and grunt commands. Consider installing [Node Version Manager](https://github.com/creationix/nvm)

### NPM

The styleguide is an NPM module.  It also has dependencies on other NPM modules.  We now store these and other modules in an NPM repository on Artifactory.  Artifactory also acts as a proxy for other dependencies normally found on the Internet.  By using Artifactory hosted on KP network, the installation should be much quicker for these modules.  To use the repository, you must update your local ~/.npmrc file.  Do this by running the following command in a terminal:

    cat > ~/.npmrc <<- EOM
    registry= https://artifactory-fof.appl.kp.org/artifactory/api/npm/npm-virtual
    always-auth=false
    EOM

You can now install styleguide by running the following command in your project directory: (note that the version could change with future updates)

    npm install -D http://artifactory-fof.appl.kp.org/artifactory/npm-release/styleguide/-/styleguide-0.0.1.tgz

### Viewing the repository locally

* In Terminal/cmd  (if you cloned or forked the project) run npm` npm install`
* Then `npm start`
=======
* In Terminal/cmd  (if you cloned or forked the project) run npm` you@host:~ stylguide$ npm install`
* Then `you@host:~ stylguide$npm start`
* Open any browser type in your local host with port example: `localhost:4321`

<a name="usage"></a>
## How to Use Styleguide in your Projects
### Modern Styles with Webpack

If you are using modern styles and using webpack then import the following sass file. Reference this example [kp-header-component](https://stash.kp.org/projects/CDS/repos/kp-header-component/browse):

    @import "styleguide/modern-lib";

You can view the list of SCSS styles in the repo: [Styleguide lib]:(https://stash.kp.org/projects/RWD/repos/styleguide/browse/lib/modern/stylesheets)

Note: Legacy has been deprecated.


### Gulp

Still figuring this out. You will experience import SASS errors when you import styleguide on a gulp project.

<a name="commands"></a>
## Commands to Develop
The styleguide has moved over to use NPM scripts to make building, serving and linting the project easier for new contributors. There are currently three commands that can be run but more can be added to the package.json as needed.

### Linting the Project
  This command will lint the scss files in lib/modern.

    npm run lint

### Building the Project
  This command will lint and build the project.

    npm run build

### Serving the Project
  This command will lint and serve the project on port :4321.

    npm start


<a name="contents-styleguide"></a>
## What's in Styleguide
There is a lot that Styleguide comes with and does a lot so that you don't have to. Babel and Bourbon are installed via Styleguide so your local projects need not include Babel and bourbon.


### Node / NPM

The styleguide is NPM module, allowing users to consume and distribute JavaScript modules that are available on the [NPM Registry](https://www.npmjs.com/) . Packages on the NPM registry are in CommonJS format and include a metadata file in JSON format and can be included in project's Package.json.


### Bourbon / Neat

We're using [bourbon.io](http://bourbon.io/). It's not a framework like Bootstrap. Instead, it's a library of _Mixins_ that allow one to have more control over styles. It's minimalistic in nature, but offers additional features through [Neat](http://neat.bourbon.io/) which is a Bourbon add-on that offers grids and layout helpers.

<a name="namespacing"></a>
## Namespacing your app
It is very important to name space your styles for your APP. This will avoid conflict of your app integrating into AEM. Example, in your main.scss

        #my-awesome-app {
          // include styleguide and what else
          .button{...}
          ...
          //all the styles fall in here
        }

<a name="resources"></a>
## Resources and Helpful Links

* [Styleguide's jira board](https://jira.kp.org/browse/STYLE)
* [Online Version](http://dev10.kaiserpermanente.org/styleguide)
* [AEM Build](http://xlzxdap0035x.lvdc.kp.org:8888/job/rwd-styleguide-AEM/)
* [Dev10 Build](http://xlzxdap0035x.lvdc.kp.org:8888/job/rwd-styleguide-deploy-DEV10/)
* [Hipchat Styleguide Room](https://hipchat.kp.org/chat/room/19)
* [Build Plugin](https://stash.kp.org/projects/RWD/repos/build-plugin/browse)
* [Current Styleguide PullRequests](https://stash.kp.org/projects/RWD/repos/styleguide/pull-requests)


## Didn't Find what you are looking for?

If you have something to add, a bug fix, or make a change [contribute to the Styleguide](https://stash.kp.org/projects/RWD/repos/styleguide/browse/contributing.md)! The styleguide is maintained on a volunteer basis, any additional help is greatly welcomed.

Check the [jira board](https://jira.kp.org/browse/STYLE) if you would like to see the currently open tasks and fixes that you can assign to yourself.

<a name="questions"></a>
###Questions?

If you're not completely clear on how to use the Styleguide in your project or got lost in the [documentation](https://stash.kp.org/projects/RWD/repos/styleguide/browse/contributing.md)  please  visit [Hipchat Styleguide Room](https://hipchat.kp.org/chat/room/19) and we'll help you out.
