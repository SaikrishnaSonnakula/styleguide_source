require.config({
  shim: {
    'vendor/fixedsticky': { deps: ['jquery'] }
  }
});

define(['jquery', 'add_colors', 'create_examples', 'vendor/fixedsticky'], function($, addColors, createExamples) {
  var easterEgg = function() {
    $("#name-field").keyup(function() {
      if($('#name-field').val().trim() === "vlad") {
        $(".example, h2, h3, p").addClass("animate-spin");
        $("nav ul").html("VLAD MODE<br>WELCOME TO STYLETOWN!");
      }
    });
  };

  $(function() {
    $(".fixedsticky").fixedsticky();
    addColors();
    createExamples();
    easterEgg();

    $("#modal-link").click(function() {
      $("body, #my-modal").addClass("modal-showing");
    });

    $(".modal-close, .modal-fade-screen").click(function() {
      $("body, #my-modal").removeClass("modal-showing");
    });

    $("main").show();
  });
});