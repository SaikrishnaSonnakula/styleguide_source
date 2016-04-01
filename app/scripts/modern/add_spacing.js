import $ from 'jquery';

export function addSpacing() {
  $('.spacing-example').each(function(i, el){
    var $example = $(el);
    let value;
    let $value;
    setTimeout(function(){
      value = $example.css('top'); //hack to get info to Javascript to display on html
      $value = $('<div class="spacing-value">').html(value);
      $example.append($value);
    }, 200);
  });
}

export function addFontSizes() {
  $('#typography-section .font-variable').each(function(i, el){
    var $section = $(el);
    var $example = $section.children('[class$="font-size"], [class$="font-family"]');
    var value = $example.css('font-size');
    var $value = $('<div class="auxiliary-text">Actual size: ' + value + ' or ' + toEm(value) + 'em.</div>');
    $section.append($value);
  });
}

function toEm(px){
  let value = parseFloat(px);
  let emSize = parseFloat($('body').css('font-size'));
  return Math.round((value / emSize) * 100)/100;
}
