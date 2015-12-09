require('fixedsticky.css');
require('prism.css');
require('../../scss/modern/index.scss');

import $ from 'jquery';
import addColors from './add_colors';
import createExamples from '../create_examples';
import addSpacing from './add_spacing';
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
  addSpacing();

  $("#menu-button, #navbar a").click(function() {
    $("#navbar").toggleClass("hidden");
  })

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

  $("#my-collapsible-feed-item .-click-to-expand").click(function() {
    $("#my-collapsible-feed-item").toggleClass("-open");
  });

  $("#best-nba-team .-value").click(function() {
    $("#best-nba-team").toggleClass("-open");
  });

  $("#best-nfl-team .-heading").click(function(el) {
    $("#best-nfl-team .-heading").parent().removeClass("-open");
    $(el.target).parent().toggleClass("-open");
  });

  $("#neighborhood .-value").click(function() {
    $("#neighborhood").toggleClass("-open");
  });

  $("#toggle-action-button-pair").click(function() {
    $("#action-button-pair").toggleClass("-hide-action-buttons");
  })

  $("main").show();
});
