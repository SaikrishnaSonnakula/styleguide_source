require('fixedsticky.css');
require('prism.css');
require('../../scss/modern/index.scss');

import $ from 'jquery';
import addColors from './add_colors';
import createExamples from '../create_examples';
import addSpacing from './add_spacing';
import _prism from 'prism';
import _fixedSticky from 'fixedsticky';
import responsiveTable from './responsive_table';
import fancySelect from 'lib/modern/scripts/fancy_select';

$(function() {
  $(".fixedsticky").fixedsticky();
  if($("#colors-section") && $("#colors-section").length!==0){
    addColors();
  }
  createExamples();
  addSpacing();
  responsiveTable();

  fancySelect($("#select-from"));

  $("#menu-button, #navbar a").click(function() {
    $("#navbar").toggleClass("hidden");
  });

  var focusedElementBeforeModal = null;
  var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

  $("#modal-button").click(function() {
    $("#my-modal").addClass("modal-showing");
    $("#my-modal").attr('aria-hidden','false');
    $(".styleguide-main .current-breakpoint, .styleguide-header").attr('aria-hidden','true');
    focusedElementBeforeModal = $(':focus');
    var firstElem = $("#my-modal").find('*').filter(focusableElementsString).filter(':visible').first();
    firstElem.focus();
  });

  $("#nothing").click(function(ev) {
    $("#my-modal").removeClass("modal-showing");
    $("#my-modal").attr("aria-hidden", 'true');
    $(".styleguide-main, .current-breakpoint, .styleguide-header").attr('aria-hidden','false');
    $(".modal-inner #modal-description").removeAttr('tabindex');
    $("#modal-button").attr('tabindex', '0');
    focusedElementBeforeModal.focus();
    ev.preventDefault();
  });

  $("#my-collapsible-feed-item .-click-to-expand").click(function() {
    $("#my-collapsible-feed-item").toggleClass("-open");
  });

  $("#best-nba-team .-value").click(function() {
    $("#best-nba-team").toggleClass("-open");
  });

  $("#best-nfl-team .-heading").click(function(el) {
    if ($(el.target).parent().hasClass("-open")) {
	$(el.target).attr('aria-hidden','false');
	$(el.target).parent().toggleClass("-open");
    } else {
	$("#best-nfl-team .-heading").parent().removeClass("-open");
	$(el.target).attr('aria-hidden','true');
	$(el.target).parent().toggleClass("-open");
    }
  });

  $("#neighborhood .-value").click(function() {
    $("#neighborhood").toggleClass("-open");
  });

  $("#toggle-action-button-pair").click(function() {
    $("#action-button-pair").toggleClass("-hide-action-buttons");
  });

  $("#toggle-primary-action-button").click(function() {
    $("#action-button").toggleClass("-hide-action-buttons");
  });

  $("main").show();
});
