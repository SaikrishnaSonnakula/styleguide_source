import $ from "jquery";

export function addSpacing() {
  $(".spacing-example").each(function(i, el){
    var $example = $(el);
    var value = $example.css("top"); //hack to get info to Javascript to display on html
    var $value = $("<div class='spacing-value'>" + value + "</div>");

    $example.append($value);
  });
}

export function addFontSizes() {
  $('#typography-section .font-variable').each(function(i, el){
    var $section = $(el);
    var $example = $section.children('[class$="font-size"], [class$="font-family"]');
    var value = $example.css('font-size');
    var $value = $("<div class='auxiliary-text'>Actual size: " + value + "</div>");
    $section.append($value);
  });
}
