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
      $("#my-modal").addClass("modal-showing");
      $("#my-modal").attr('aria-hidden','false');
      $(".modal-inner" ,"#my-modal").attr('tabindex', '0').focus();
    });

    $(".modal-close, .modal-fade-screen").click(function() {
      $("#my-modal").removeClass("modal-showing");
      $("#my-modal").attr('aria-hidden','true');
      $(".modal-inner" ,"#my-modal").removeAttr('tabindex');
    });

    $("main").show();
  });
});