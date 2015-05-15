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

    $("#modal-link").click(function() {
      $("body, #my-modal").addClass("modal-showing");
    });

    $(".modal-close, .modal-fade-screen").click(function() {
      $("body, #my-modal").removeClass("modal-showing");
    });

    $("main").show();
  });
});