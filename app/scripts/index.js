require.config({
  shim: {
    'vendor/fixedsticky': { deps: ['jquery'] }
  }
});

define(['jquery', 'add_colors', 'create_examples', 'vendor/fixedsticky'], function($, addColors, createExamples) {

  $(function() {
    $(".fixedsticky").fixedsticky();
    addColors();
    createExamples();
    $("main").show();
  });
});