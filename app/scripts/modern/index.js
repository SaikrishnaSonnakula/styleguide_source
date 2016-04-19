require('fixedsticky.css');
require('prism.css');
require('../../scss/modern/index.scss');

import $ from 'jquery';
import addColors from './add_colors';
import createExamples from '../create_examples';
import { addSpacing, addFontSizes } from './add_spacing';
import _prism from 'prism';
import _fixedSticky from 'fixedsticky';
import responsiveTable from './responsive_table';
import fancySelect from 'lib/modern/scripts/fancy_select';
import accordion from 'lib/modern/scripts/accordion';
import expandingItem from 'lib/modern/scripts/expanding-item';
import dropdown from 'lib/modern/scripts/dropdown';


$(function() {
  $('.fixedsticky').fixedsticky();
  if($('#colors-section') && $('#colors-section').length!==0){
    addColors();
  }
  createExamples();
  addSpacing();
  addFontSizes();
  responsiveTable();
  expandingItem();

  fancySelect($('#select-from'));
  fancySelect($('#select-from-with-default'));
  fancySelect($('#select-from-with-only-one'));
  fancySelect($('#select-from-with-default-but-selected'));

  $('#menu-button, #navbar a').click(function() {
    $('#navbar').toggleClass('hidden');
  });

  var focusedElementBeforeModal = null;
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';

  $('#modal-button').click(function() {
    $('#my-modal').addClass('modal-showing');
    $('#my-modal').attr('aria-hidden','false');
    $('.styleguide-main .current-breakpoint, .styleguide-header').attr('aria-hidden','true');
    focusedElementBeforeModal = $(':focus');
    var lastElem = $('#my-modal').find('*').filter(focusableElementsString).filter(':visible').last();
    lastElem.focus();
  });

  $('#nothing, #do-something').click(function(ev) {
    $('#my-modal').removeClass('modal-showing');
    $('#my-modal').attr('aria-hidden', 'true');
    $('.styleguide-main, .current-breakpoint, .styleguide-header').attr('aria-hidden','false');
    $('.modal-inner #modal-description').removeAttr('tabindex');
    $('#modal-button').attr('tabindex', '0');
    focusedElementBeforeModal.focus();
    ev.preventDefault();
  });

  var feedItemId = $('#my-collapsible-feed-item');
  var feedItemHeading = $('#my-collapsible-feed-item .-click-to-expand');
  var feedItemCollapsibleContent = $('#my-collapsible-feed-item .-collapsible');

  feedItemHeading.on('click', function() {
    feedItemId.toggleClass('-open');
    var expanded = feedItemId.hasClass('-open');
    feedItemId.attr('aria-expanded', expanded);
    feedItemCollapsibleContent.attr('aria-hidden', !expanded);
  });

  // $('#best-nba-team .-value').click(function() {
  //   $('#best-nba-team').toggleClass('-open');
  // });

  accordion($('#hipstaccordion'));

  // $('#neighborhood .-value').click(function() {
  //   $('#neighborhood').toggleClass('-open');
  // });

  $('#toggle-action-area-button').click(function() {
    $('#action-area-example').toggleClass('-hide-action-buttons');
  });

  $('#toggle-action-button-pair').click(function() {
    $('#action-button-pair').toggleClass('-hide-action-buttons');
  });

  $('#toggle-primary-action-button').click(function() {
    $('#action-button').toggleClass('-hide-action-buttons');
  });


  $('main').show();
  function bannerAlert() {
    var $el = $('.banner-alert');
    $el.show();
    setTimeout(function() {
      $el.hide();
    }, 5000);
  }
});
