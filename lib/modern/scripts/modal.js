import $ from 'jquery';
export default function modalInit() {
  var focusedElementBeforeModal = null;
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';

  $('#modal-button').click(function(obj) {
    $('#my-modal').addClass('modal-showing');
    $('#my-modal').attr('aria-hidden', 'false');
    $('.styleguide-main, .current-breakpoint, .styleguide-header').attr('aria-hidden', 'true');
    focusedElementBeforeModal = $(':focus');
    var o = obj.find('*');
    o.filter(focusableElementsString).filter(':visible').first().focus();
  });

  $('#nothing, #do-something, .-close').click(function(ev) {
    $('#my-modal').removeClass('modal-showing');
    $('#my-modal').attr('aria-hidden', 'true');
    $('.styleguide-main, .current-breakpoint, .styleguide-header').attr('aria-hidden', 'false');
    $('.modal-inner #modal-description').removeAttr('tabindex');
    focusedElementBeforeModal.focus();
    ev.preventDefault();
  });

}
