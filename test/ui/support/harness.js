import Backbone from 'backbone';
import jQuery from 'jquery';
import $_autotype from './vendor/jquery-autotype';
import RSVP from 'rsvp';
import './vendor/blob';

var $ = window.$ || jQuery;
var state = {};
var settlingCount = 3;

var kilobyte = '';
for (var i = 0; i < 100; i += 1) {
  kilobyte += 'abcdefghij';
}
var createKBArray = function(kilobytes) {
  var array = [];
  for (var i = 0; i < kilobytes; i += 1) {
    array.push(kilobyte);
  }
  return array;
};

Backbone.on('start:route', function() {
  state.inRoute = true;
});

Backbone.on('end:route', function() {
  state.inRoute = false;
});

Backbone.on('start:async', function() {
  state.pendingAsync += 1;
});

Backbone.on('end:async', function() {
  state.pendingAsync -= 1;
});

export default function(init, harnessOptions) {
  var root = $('<div></div>');
  var options = harnessOptions || {};
  $(document.body).append(root);
  var app;

  this.stop = function() {
    app.stop();
    root.remove();
  };

  this.run = function(fn) {
    app = init(root);
    state = {
      inRoute: !options.noRoutes,
      pendingAsync: 0
    };
    var operations = [];

    var dsl = {
      wait: function() {
        return new RSVP.Promise(function(resolve) {
          var settledLeft = settlingCount;

          var interval = setInterval(function() {
            if (state.inRoute || state.pendingAsync > 0) {
              settledLeft = settlingCount;
              return;
            } else {
              settledLeft -= 1;
              if (settledLeft <= 0) {
                resolve();
                clearInterval(interval);
              }
            }
          }, 1);
        });
      },
      visit: function(path) {
        this.andThen(function() {
          app.router.navigate(path, {
            trigger: true
          });
        });

        this.verify(function() {
          return expect(root[0]).to.be.accessible;
        });
      },
      click: function(selector, nth) {
        this.andThen(function() {
          var $el = $(selector, root)[!!nth ? nth : 0];

          assert($el, `Could not find element with selector ${selector} to click.`);
          $el.click();
        });

        this.verify(function() {
          return expect(root[0]).to.be.accessible;
        });
      },

      // Triggers a change action on the a file input
      // Creates a Blob to stub file properties passed in fileAttrs
      // Returns the Blob file that was created.
      uploadFile: function(selector, fileAttrs) {
        var file = new Blob(createKBArray(fileAttrs.kb), {
          type: fileAttrs.mimeType
        });
        _.extend(file, fileAttrs);

        this.andThen(function() {
          $(selector, root).trigger('change', [
            [file]
          ]);
        });

        return file;
      },

      fillIn: function(selector, value) {
        this.andThen(function() {
          $(selector, root).val('');
          $(selector, root).autotype(value);
          $(selector, root).change();
        });
      },
      pasteText: function(selector, value) {
        this.andThen(function() {
          $(selector, root).val(value);
          $(selector, root).trigger('input');
        });
      },
      type: function(selector, value) {
        this.andThen(function() {
          $(selector, root).autotype(value);
        });
      },
      select: function(selector, value) {
        this.andThen(function() {
          $(selector, root).val(value);
          $(selector, root).change();
        });
      },
      andThen: function(fn) {
        var self = this;
        operations.push(function() {
          return self.wait().then(function() {
            return fn(root);
          });
        });
      }
    };
    dsl.verify = dsl.andThen;
    fn.apply(dsl);

    app.start();
    var promise = operations.shift().apply(null);
    return operations.reduce(function(memo, op) {
      return memo.then(op);
    }, promise);
  };
}
