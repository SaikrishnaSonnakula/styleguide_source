define([], function(){
  var colorSections = [
    {
      name: "Basic Colors",
      colors: [
        'default-color',
        'kp-blue',
        'bg-dark',
        'bg-med',
        'bg-light',
        'bg-invert'
      ]
    },
    {
      name: "Feature Colors",
      colors: [
        'message-center-dark',
        'message-center-light',
        'appointment-center-dark',
        'appointment-center-light',
        'signin-dark',
        'signin-light',
        'pharmacy-center-dark',
        'pharmacy-center-light',
        'mmr-dark',
        'mmr-light'
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
      var $section = $('<div class="color-section"><h3>' + section.name + '</h3></div>');

      $('#colors').append($section);

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