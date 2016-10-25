import $ from 'jquery';
import dropdownOverlay from 'lib/modern/scripts/dropdown-overlay';
import addColors from './add_colors';
import createExamples from '../create_examples';
import { addSpacing, addFontSizes } from './add_spacing';
import _prism from 'prism';
import _fixedSticky from 'fixedsticky';
import responsiveTable from './responsive_table';
import fancySelect from 'lib/modern/scripts/fancy_select';
import accordion from 'lib/modern/scripts/accordion';
import expandingItem from 'lib/modern/scripts/expanding-item';
import modalInit from 'lib/modern/scripts/modal';


$(function() {
  dropdownOverlay();
  createExamples();
  addSpacing();
  addFontSizes();
  responsiveTable();
  expandingItem();
  modalInit();
  $('.fixedsticky').fixedsticky();
  if($('#colors-section') && $('#colors-section').length!==0){
    addColors();
  }


  fancySelect($('#select-from'));
  fancySelect($('#select-from-with-default'));
  fancySelect($('#select-from-with-only-one'));
  fancySelect($('#select-from-with-default-but-selected'));

  $('#menu-button').click(function() {
    $('#navbar').toggleClass('hidden');
    $('#navbar').toggleClass('fixedsticky');
  });

 

  accordion($('#hipstaccordion'));

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

