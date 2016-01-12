import $ from 'jquery';

export default function accordion(nativeElement) {

  var accordionGroup = nativeElement.children('.-group');

  accordionGroup.click(function(el) {
    var currentGroup = $(el.delegateTarget);
    currentGroup.toggleClass("-open");

    var accordionContent = currentGroup.children('.-content');

    if (!currentGroup.hasClass("-open")) {
      accordionContent.attr('aria-hidden', true);
    } else {
      accordionContent.removeAttr('aria-hidden');
    }
  });
};
