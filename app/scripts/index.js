define(['jquery', 'add_colors', 'create_examples'], function($, addColors, createExamples) {

  require(['fixedsticky'], function() {
    $(function() {
      $(".fixedsticky").fixedsticky();
      addColors();
      createExamples();
      $("main").show();
    });
  })
});