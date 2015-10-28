require('fixedsticky.css');
require('prism.css');
require('../../scss/modern/index.scss');

import $ from 'jquery';
import addColors from './add_colors';
import createExamples from '../create_examples';
import _prism from 'prism';
import _fixedSticky from 'fixedsticky';

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
