// Empty
// TODO: Remove build-plugin requirement of this file

define(['jquery', 'add_colors', 'create_examples'], function($, addColors, createExamples) {
  $(function() {
    addColors();
    createExamples();
    $("main").show();
  });
});