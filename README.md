# KP Styleguide

The styleguide to rule them all! this document covers:

* [Installing Styleguide](#installing)
* [How to Use in your Projects](#usage)
* [What's in Styleguide](#contents-styleguide)
* [Setting up Namespacing in your project](#namespacing)
* [Contributing](#contributing)
* [Resources and Helpful Links](#resources)
* [Questions](#questions)

To view deployed examples of different components [see the online version](https://dev10.kaiserpermanente.org/styleguide/) 

<a name="installing"></a>

## Installing Styleguide
Make sure you are running [Node JS](https://nodejs.org/en/blog/release/v0.10.42/) to run npm and grunt commands

### NPM

The styleguide is NPM module.  You can install it by running the following command in your project directory:

    npm install -D git+ssh://git@stash.kp.org/rwd/styleguide.git

### Viewing the repository locally

* In Terminal/cmd  (if you cloned or forked the project) run npm` you@host:~ stylguide$ npm install`
* Then `you@host:~ stylguide$grunt serve`
* Open any browser type in your local host with port example: `localhost:4321`

<a name="usage"></a>
## How to Use Styleguide in your Projects
### Modern Styles with Webpack

If you're using [build-plugin](https://stash.kp.org/projects/RWD/repos/build-plugin/browse) you'll be using webpack
If you are using modern styles and using webpack then import the following sass file:

    @import "~styleguide/modern-webpack";

Note: Legacy has been deprecated.

Reference this example [kp-header-component](https://stash.kp.org/projects/CDS/repos/kp-header-component/browse)

### Not on webpack or using our build-plugin

    // modern
    @import "styleguide/modern";

The node_modules directory will have to be in your SCSS build path. This is particularly important if you're not using [build-plugin](https://stash.kp.org/projects/RWD/repos/build-plugin/browse).

You can view the list of SCSS styles in the repo: [Styleguide lib]:(https://stash.kp.org/projects/RWD/repos/styleguide/browse/lib/modern/stylesheets)

### Bower (deprecated)

Include this styleguide repo in your `bower.json`

    "dependencies": {
      "..." : "...",
      "styleguide": "git+ssh://git@stash.kp.org/rwd/styleguide.git"
    }

Then run `bower install` - watch all the front-end stuff bower installs. You should see something similar to the following in your output:

    bower styleguide#*  not-cached ssh://git@stash.kp.org/rwd/styleguide.git#*
    bower styleguide#*  resolve ssh://git@stash.kp.org/rwd/styleguide.git#*
    bower styleguide#*  checkout master
    bower styleguide#*  resolved ssh://git@stash.kp.org/rwd/styleguide.git#19b64a1850

### Gulp

Still figuring this out. You will experience import SASS errors when you import styleguide on a gulp project.

<a name="contents-styleguide"></a>
## What's in Styleguide
There is a lot that Styleguide comes with and does a lot so that you don't have to. Bootstrap and Bourbon are installed via Styleguide so your local projects need not include boostrap and bourbon.

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



<a name="contributing"></a>
## Contributing to Styleguide
We welcome all in the KP developer community contribute to styleguide, all edits/fixes/changes to the styleguide are on a voluntary basis.

### Before You begin
Make sure you have:

* Read the [Contributing documentation](https://stash.kp.org/projects/RWD/repos/styleguide/browse/CONTRIBUTING.md)
* Read the [Build-Plugin documentation](https://stash.kp.org/projects/RWD/repos/build-plugin/browse/README.md)
* [SSH Keys](https://stash.kp.org/plugins/servlet/ssh/account/keys) are setup in Stash
* [Node JS](https://nodejs.org/en/blog/release/v0.10.42/) is downloaded onto your machine to run the build plugin grunt taskrunner 
* Join the [Hipchat Styleguide Chat Room](https://hipchat.kp.org/chat/room/19) 
* Access to [jira](https://jira.kp.org/browse/STYLE)

### Process of Editing and Submitting a change​
Summary of the current contribution process is: 

* Fork the project to your Stash account ![Forking styleguide](https://sites.sp.kp.org/teams/dsg/creative/fed/SiteAssets/SitePages/Adding%20to%20the%20Style%20Guide/Screen%20Shot%202016-02-19%20at%2012.12.46%20PM.png)
* In the new forked copy make the code changes and push code changes to your forked master branch
* Create a [Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request/)![Create PullRequest](https://sites.sp.kp.org/teams/dsg/creative/fed/SiteAssets/SitePages/Adding%20to%20the%20Style%20Guide/Screen%20Shot%202016-02-19%20at%2012.19.39%20PM.png)
* have the RWD styleguide team review and recieve a minimum of 2 approvals
* Merge the Pull Request into the master branch.


### Detailed steps of How to Contribute
More detailed steps included in the [Contributing documentation](https://stash.kp.org/projects/RWD/repos/styleguide/browse/CONTRIBUTING.md)


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

If you have something to add, a bug fix, or make a change [contribute to the Styleguide](https://stash.kp.org/projects/RWD/repos/styleguide/browse/CONTRIBUTING.md)! The styleguide is maintained on a volunteer basis, any additional help is greatly welcomed. 

Check the [jira board](https://jira.kp.org/browse/STYLE) if you would like to see the currently open tasks and fixes that you can assign to yourself.

<a name="questions"></a>
###Questions?

If you're not completely clear on how to use the Styleguide in your project or got lost in the [documentation](https://stash.kp.org/projects/RWD/repos/styleguide/browse/CONTRIBUTING.md)  please  visit [Hipchat Styleguide Room](https://hipchat.kp.org/chat/room/19) and we'll help you out.