define(['jquery'], function($){
  var colorSections = [
    {
      name: "Primary Colors",
      colors: [
        'kp-blue',
        'dark-grey',
        'mid-grey',
        'light-grey',
        'white',
        'interactive-blue',
        'dark-blue',
        'pale-blue',
        'light-blue',
        'red-error'
      ]
    },
    {
      name: "Secondary Colors",
      colors: [
        'mid-green',
        'deep-orange',
        'mid-teal',
        'deep-blue',
        'deep-green',
        'mid-violet'
      ]
    },
  ];

  var getHex = function($el) {
    var rgb = $el.css('backgroundColor').match(/\d+/g);
    var r   = parseInt(rgb[0], 10);
    var g   = parseInt(rgb[1], 10);
    var b   = parseInt(rgb[2], 10);
    return '#'+ r.toString(16) + g.toString(16) + b.toString(16);
  };

  return function() {
    colorSections.forEach(function(section){
      var $section = $('<div class="color-section"></div>');

      $('#colors').append($section);
      $section.before('<h3>' + section.name + '</h3>');

      section.colors.forEach(function(color){
        var $color = $('<div class="color"></div>');
        $section.append($color);

        var $swatch = $('<div class="swatch '+ color +'"></div>');
        $color.append($swatch);

        $color.append('<code>$' + color + '</code><br/>');
        $color.append('<code>' + getHex($swatch) + '</code>');
      })

    })
  };
});
