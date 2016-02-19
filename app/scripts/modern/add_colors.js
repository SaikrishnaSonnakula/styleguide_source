import $ from "jquery";

var colorSections = [
  {
    name: "KP Colors",
    colors: [
      [
        'interactive-blue'
      ],
      [
        'interactive-blue-dark',
        '$button-hover-color'
      ],
      [
        'interactive-blue-darker',
        '$link-hover-color'
      ],
      [
        'disable-blue',
        '$button-disable-color'
      ],
      [
        'inky-blue',
        '$text-dark'
      ],
      [
        'dolphin',
        '$text-light'
      ],
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

function appendColor(color, $section) {
  var $color = $('<div class="color"></div>');
  var colors = [].concat(color);
  $section.append($color);

  var $swatch = $('<div class="swatch '+ colors[0] +'"></div>');
  $color.append($swatch);

  colors.forEach(function(color) {
    $color.append('<code>' + color + '</code><br/>');
  });
  $color.append('<code>' + getHex($swatch) + '</code>');
}

export default function() {
  colorSections.forEach(function(section){
    var $section = $('<div class="color-section"></div>');

    $('#colors').append($section);
    $section.before('<h3 class="styleguide-subheading">' + section.name + '</h3>');

    section.colors.forEach(function(color){
      appendColor(color, $section);
    });
  });
}
