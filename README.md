#KP Styleguide

The styleguide to rule them all!

##Usage

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

##Gulp project usage
Still figuring this out. You will experience import SASS errors when you import stylguide on a gulp project.



##What's in Styleguide

There is a lot that Styleguide comes with and does a lot so that you don't have to. Bootstrap and Bourbon are installed via Styleguide so your local projects need not include boostrap and bourbon.

###Bootstrap (deprecating)

When we started with this project, much of our work was started with bootstrap (SASS). With Stylegude we've been able to abstract the bootstrap classes to be KP specific classes by using `@extend`. With that said, we no longer supporting styleguide with bootstrap, but instead we using Bourbon. 

###Bourbon / Neat / other stuff

We're using [bourbon.io](http://bourbon.io/). It's not a framework like Bootstrap. Instead, it's a library of Mixins that allow one to decide what to use. It's minimalistic in nature, but offers additional features through NEAT which is a bourbon framework that offers grids and layout helpers.

##Contributing to Styleguide

###Adding Icons
We use http://fontello.com/ to help us generate icon sets. You must first import the `config.json` under `/app/icon/config.json` into Fontello. This will ensure that we have the latest icon set from fontello.

Make you selection of new icons, then download the zip file.
