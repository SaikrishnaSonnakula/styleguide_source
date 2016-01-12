import $ from 'jquery';

export default function accordion(nativeElement) {

  var accordionHeadings = nativeElement.children('.-group').children('.-heading');

  accordionHeadings.click(function(el) {
    var currentGroup = $(el.delegateTarget.parentElement);
    currentGroup.toggleClass("-open");

    var accordionContent = currentGroup.children('.-content');

    if (!currentGroup.hasClass("-open")) {
      accordionContent.attr('aria-hidden', true);
      accordionContent.attr('aria-expanded', false);
    } else {
      accordionContent.removeAttr('aria-hidden');
      accordionContent.attr('aria-expanded', true);
    }
  });
};
