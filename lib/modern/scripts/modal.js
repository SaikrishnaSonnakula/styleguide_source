import $ from 'jquery';
export default function modalInit() {
  var focusedElementBeforeModal = null;
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
  var contentBehindModal = '.styleguide-main, .current-breakpoint, .styleguide-header';
  $('#modal-button').click(function(obj) {
    $('#my-modal').addClass('modal-showing');
    $('#my-modal').attr('aria-hidden', 'false');
    $(contentBehindModal).attr('aria-hidden', 'true');
    $(contentBehindModal).attr("tabindex","-1");
    focusedElementBeforeModal = $(':focus');
    var o = obj.find('*');
    o.filter(focusableElementsString).filter(':visible').first().focus();
  });

  $('#nothing, #do-something, .-close').click(function(ev) {
    $('#my-modal').removeClass('modal-showing');
    $('#my-modal').attr('aria-hidden', 'true');
     $(contentBehindModal).attr('aria-hidden', 'false');
    $('.modal-inner #modal-description').removeAttr('tabindex');
    $(contentBehindModal).removeAttr('tabindex');
    focusedElementBeforeModal.focus();
    ev.preventDefault();
  });

}
