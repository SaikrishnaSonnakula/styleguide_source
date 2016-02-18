# KP Styleguide

The styleguide to rule them all!
##Install
### NPM

The styleguide is NPM module. You can install it by running the following command in your project directory:

    npm install -D git+ssh://git@stash.kp.org/rwd/styleguide.git


##Usage

###Modern styles with Webpack
If you're using [build-plugin](https://stash.kp.org/projects/RWD/repos/build-plugin/browse) you'll be using webpack
If you are using modern styles and using webpack then import the following sass file:

    @import "~styleguide/modern-webpack";

Legacy:

    @import "~styleguide/main-webpack";


Reference this example [kp-header-component](https://stash.kp.org/projects/CDS/repos/kp-header-component/browse)

###Not on webpack or using our build-plugin

    //legacy
    @import "styleguide/main";

    //modern
    @import "styleguide/modern";

The node_modules directory will have to be in your SCSS build path. This is particularly important if you're not using [build-plugin](https://stash.kp.org/projects/RWD/repos/build-plugin/browse).

*Please note*, at some point we will be deprecating legacy - and `styleguide/main` will have the modern styles.

####Other options
Styleguide allows you to opt-in various SCSS elements. For example if you're developing a component where all you need are the fonts, you're allowed to reference just the `font.scss` like so:

```
    @import "~styleguide/lib/modern/stylesheets/fonts";

```
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


## What's in Styleguide

There is a lot that Styleguide comes with and does a lot so that you don't have to. Bootstrap and Bourbon are installed via Styleguide so your local projects need not include boostrap and bourbon.

### Bourbon / Neat

We're using [bourbon.io](http://bourbon.io/). It's not a framework like Bootstrap. Instead, it's a library of _Mixins_ that allow one to have more control over styles. It's minimalistic in nature, but offers additional features through [Neat](http://neat.bourbon.io/) which is a Bourbon add-on that offers grids and layout helpers.

### Bootstrap (deprecating)

When we started with this project, much of our work was started with bootstrap (SASS). With Stylegude we've been able to abstract the bootstrap classes to be KP specific classes by using `@extend`. With that said, we no longer supporting styleguide with bootstrap, but instead we are using [Bourbon](http://bourbon.io/).


## Contributing to Styleguide
We're following a pull request model for contribution. [Pull requests](https://www.atlassian.com/git/tutorials/making-a-pull-request/). You create a branch `git checkout -b [branch-name-that-makes-sense]`, then you make your changes and commit them then your'e ready to push to origin - `git push -u origin [branch-name-that-makes-sense]`

Go to: `https://stash.kp.org/projects/RWD/repos/styleguide/branches` to confirm that your branch is there (if you didn't already notice in your command prompt), then under 'action' request a pull request.

We're still figuring out this process but the important part is creating the pull requests and add approvers like [Tommy](https://stash.kp.org/users/i183632), [Linda](https://stash.kp.org/users/l151042), [Michael](https://stash.kp.org/users/k948046)

### Adding Icons

We have a whole suite of Icons approved by design and brand. We're working on displaying all 88+ Icons so you (designer/developer) can see what we have available. If you see an Icon that you think should be in styleguide please contact jennifer.m.beasley@kp.org. You can find her on hipchat.

Refer to `/modern.html#icons-section`



##<a name="#namespacing"></a>Namespacing your app
It is very important to name space your styles for your APP. This will avoid conflict of your app integrating into AEM. If you are using webpack version of modern [Styleguide](https://stash.kp.org/projects/RWD/repos/styleguide/browse/_modern-webpack.scss) then you will need to add an attribute to your webpack config.

Go into your Gruntfile.js for your app and add the following attribute.

        webpack: {
        ...
          cssNamespace: '#my-awesome-app'
        ...
        }

[https://stash.kp.org/projects/RWD/repos/my-medical-record/browse/ui.resources/Gruntfile.js#63](Reference this gruntfile from the appointment-center project) (thanks Duda).

What this will do is generate the styles of styleguide inside of your that CSS ID


        //exmaple
        #my-awesome-app {
          .button{...}
          ...
          //all the styles fall in here
        }


##Todo
- icons documentation
- Clean up this readme to make it purposeful and relevent for developers
- AEM export command?
- Pixel reference documented (automated) so designers can speak their language
- Gothom Light
- Change checkbox icon
