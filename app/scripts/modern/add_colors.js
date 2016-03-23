import $ from "jquery";

const colorSections = [
  {
  name: "Typography and Interactive Colors",
  colors: [
    [
    'interactive-blue',
    '$link-color'
  ],
  [
    'interactive-blue-dark',
    '$link-hover-color',
    '$button-hover-color'
  ],
  [
    'graphite-dark',
    '$button-disable-color'
  ],
  [
    'inky-blue',
    '$text-dark'
  ],
  [
    'dolphin',
    '$text-light'
  ]
  ]
},
{
  name: "Main Section Colors",
  colors: [
    'midnight',
    'kp-blue',
    'sky',
    'moss',
    'grass',
    'leaf',
    'burnt-sienna',
    'tiger-lily',
    'tangerine',
    'ocean',
    'aqua',
    'robin-egg',
    'acai',
    'fuchsia',
    'rose',
    'plum',
    'lilac',
    'lavender'
  ]
},
{
  name: 'Decorative Element Colors',
  colors: [
    'graphite-dark',
    'graphite',
    'graphite-light',
    'pebble'
  ]
},
{
  name: 'Supplemental Colors',
  colors: [
    'black',
    'deep-chalk',
    'mid-chalk',
    'light-chalk',
    'mid-aqua',
    'light-aqua'
  ]
}
];

const getHex = ($el) => {
  const background = $el.css('backgroundColor');
  const rgb = background.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  function parseHexSinglet(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }

  return ("#" + parseHexSinglet(rgb[1]) + parseHexSinglet(rgb[2]) + parseHexSinglet(rgb[3])).toUpperCase();
};

const appendColor = (color, $section) => {

  const $color = $('<div class="color"></div>');
  let colors = [].concat(color);
  $section.append($color);

  const $swatch = $('<div class="swatch '+ colors[0] +'"></div>');
  $color.append($swatch);

  colors.forEach(function(color) {
    $color.append('<code>' + color + '</code><br/>');
  });

  $color.append('<code>' + getHex($swatch) + '</code>');
};

export default () => {
  colorSections.forEach(function(section){
    const $section = $('<div class="color-section"></div>');

    $('#colors').append($section);
    $section.before('<h3 class="styleguide-subheading">' + section.name + '</h3>');

    section.colors.forEach(function(color){
      appendColor(color, $section);
    });
  });
};
