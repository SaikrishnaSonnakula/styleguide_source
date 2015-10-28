import $ from "jquery";

var colorSections = [
  {
    name: "KP Colors",
    colors: [
      'kp-blue',
      'interactive-blue',
      'interactive-blue-dark',
      'interactive-blue-darker',
      'inky-blue',
      'dolphin',
      'graphite-dark',
      'graphite',
      'graphite-light',
      'pebble'
    ]
  }, 
  {
    name: "Feature Colors",
    colors: [
      'moss',
      'grass',
      'leaf',
      'ocean',
      'aqua',
      'robin-egg',
      'midnight',
      'dusk',
      'sky',
      'plum',
      'lilac',
      'lavender',
      'acai',
      'fuchsia',
      'rose',
      'burnt-sienna',
      'tiger-lily',
      'tangerine',
    ]
  }
];

var getHex = function($el) {
  var rgb = $el.css('backgroundColor').match(/\d+/g);
  var r   = parseInt(rgb[0], 10);
  var g   = parseInt(rgb[1], 10);
  var b   = parseInt(rgb[2], 10);
  return '#'+ r.toString(16) + g.toString(16) + b.toString(16);
};

export default function() {
  colorSections.forEach(function(section){
    var $section = $('<div class="color-section"></div>');

    $('#colors').append($section);
    $section.before('<h3 class="styleguide-subheading">' + section.name + '</h3>');

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
