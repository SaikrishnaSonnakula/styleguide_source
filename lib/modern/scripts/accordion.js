import $ from 'jquery';

export default function accordion(nativeElement) {

  var accordionHeading = nativeElement.children('.-heading');

  accordionHeading.click(function(el) {
    var accordionBody = $(el.delegateTarget).next('.-content');
    $(el.delegateTarget).toggleClass("-open");
    accordionBody.toggleClass("-open");

    if (!accordionBody.hasClass("-open")) {
      accordionBody.attr('aria-hidden', true);
    } else {
      accordionBody.removeAttr('aria-hidden');
    }
  });
};
