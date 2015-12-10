# KP Styleguide

The styleguide to rule them all!

## Usage

### NPM

The styleguide is NPM module. You can install it by running the following command in your project directory:

    npm install -D git+ssh://git@stash.kp.org/rwd/styleguide.git

Then, include the styles your sass file:

    @import "styleguide/modern"

### Bower

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

### Bootstrap (deprecating)

When we started with this project, much of our work was started with bootstrap (SASS). With Stylegude we've been able to abstract the bootstrap classes to be KP specific classes by using `@extend`. With that said, we no longer supporting styleguide with bootstrap, but instead we are using [Bourbon](http://bourbon.io/).

### Bourbon / Neat

We're using [bourbon.io](http://bourbon.io/). It's not a framework like Bootstrap. Instead, it's a library of _Mixins_ that allow one to have more control over styles. It's minimalistic in nature, but offers additional features through [Neat](http://neat.bourbon.io/) which is a Bourbon add-on that offers grids and layout helpers.

## Contributing to Styleguide

### Adding Icons

We have a whole suite of Icons approved by design and brand. We're working on displaying all 88+ Icons so you (designer/developer) can see what we have available. If you see an Icon that you think should be in styleguide please contact jennifer.m.beasley@kp.org. You can find her on hipchat.

Refer to `/modern.html#icons-section`


##Todo
- icons documentation
- Clean up this readme to make it purposeful and relevent for developers
- AEM export command?