# KP Styleguide

The styleguide to rule them all!

To view deployed examples of different components bookmark [this page](https://wppdev1.kaiserpermanente.org/styleguide/) or deploy this repository locally with ``` grunt serve ```.

## Install
### NPM

The styleguide is NPM module. You can install it by running the following command in your project directory:

    npm install -D git+ssh://git@stash.kp.org/rwd/styleguide.git

## Usage

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

## What's in Styleguide

There is a lot that Styleguide comes with and does a lot so that you don't have to. Bootstrap and Bourbon are installed via Styleguide so your local projects need not include boostrap and bourbon.

### Bourbon / Neat

We're using [bourbon.io](http://bourbon.io/). It's not a framework like Bootstrap. Instead, it's a library of _Mixins_ that allow one to have more control over styles. It's minimalistic in nature, but offers additional features through [Neat](http://neat.bourbon.io/) which is a Bourbon add-on that offers grids and layout helpers.

## Contributing to Styleguide
We're still figuring out this process but the important part is creating the pull requests and having at least two other developers approve.
For more information on how to contribute. Read the [Contributing](https://stash.kp.org/projects/RWD/repos/styleguide/browse/CONTRIBUTING.md) documentation.

## Namespacing your app
<a name="#namespacing"></a>
It is very important to name space your styles for your APP. This will avoid conflict of your app integrating into AEM. If you are using webpack version of modern [Styleguide](https://stash.kp.org/projects/RWD/repos/styleguide/browse/_modern-webpack.scss) then you will need to add an attribute to your webpack config.

Go into your Gruntfile.js for your app and add the following attribute 

        require('build-plugin/webpack')(
          grunt, {
            webpack: { ... },
            cssNamespace: '#my-awesome-app'
            }
        )

[Reference this gruntfile from the appointment-center project](https://stash.kp.org/projects/RWD/repos/my-medical-record/browse/ui.resources/Gruntfile.js#63) (thanks Duda).

What this will do is generate the styles of styleguide inside of your that CSS ID

        #my-awesome-app {
          .button{...}
          ...
          //all the styles fall in here
        }
