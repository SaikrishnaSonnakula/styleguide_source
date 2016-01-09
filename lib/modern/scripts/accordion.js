import $ from 'jquery';

export default function accordion(nativeElement) {
    nativeElement.click(function(el) {
	var accordionBody = $(el.target).children('.-content');
	var accordionHeading = $(el.target).children('.-heading');

	accordionHeading.toggleClass("-open");
	accordionBody.toggleClass("-open");

	if (!accordionBody.hasClass("-open")) {
	    accordionBody.attr('aria-hidden', true);
	} else {
	    accordionBody.removeAttr('aria-hidden');
	}
    });
};
