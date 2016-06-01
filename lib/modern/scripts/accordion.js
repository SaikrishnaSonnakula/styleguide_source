import $ from 'jquery';

export default function accordion(nativeElement) {

  const accordionId = nativeElement.attr('id');
  const headingSelector = '[role="link"]';
  const panelSelector = '[data-content="true"]';
  const accordionGroups = nativeElement.children('.-group');
  const accordionHeadings = nativeElement.children('.-group').children(headingSelector);

  let currentOptionIndex = 0;
  let lastOptionIndex = accordionHeadings.length-1;
  let selectedOption = accordionHeadings[0];

  const handleArrowKey = (newOptionIndex) => {
    currentOptionIndex = newOptionIndex;
    accordionHeadings[newOptionIndex].focus();
  };

  const handleUpKey = () => {
    let isOnFirstOption = currentOptionIndex === 0;
    let prevOptionIndex = isOnFirstOption ? lastOptionIndex : currentOptionIndex - 1;

    handleArrowKey(prevOptionIndex);
  };

  const handleDownKey = () => {
    let isOnLastOption = currentOptionIndex === lastOptionIndex;
    let nextOptionIndex = isOnLastOption ? 0 : currentOptionIndex + 1;

    handleArrowKey(nextOptionIndex);
  };

  const KEY_HANDLERS = {
    40: handleDownKey,
    38: handleUpKey
  };

  nativeElement.on('keydown', (event) => {
    const keyCode = event.keyCode;
    if(keyCode && KEY_HANDLERS[keyCode]){
      event.preventDefault();
      KEY_HANDLERS[keyCode]();
    }
  });

  accordionGroups.each((index, group) => {
    const heading = $(group).children(headingSelector);
    const panel = $(group).children(panelSelector);

    heading.attr('id', `${accordionId}-heading-${index}`);
    heading.attr('aria-controls', `${accordionId}-panel-${index}`);
    panel.attr('id', `${accordionId}-panel-${index}`);
    panel.attr('aria-labelledby', `${accordionId}-heading-${index}`);

    heading.click(function(el) {
      var currentGroup = $(el.delegateTarget.parentElement);
      currentGroup.toggleClass('-open');

      const accordionHeading = currentGroup.children(headingSelector);
      const accordionContent = currentGroup.children(panelSelector);

      if (!currentGroup.hasClass('-open')) {
        accordionContent.attr('aria-hidden', true);
        accordionHeading.attr('aria-selected', false);
        accordionHeading.attr('aria-expanded', false);
      } else {
        accordionContent.removeAttr('aria-hidden');
        accordionHeading.attr('aria-selected', true);
        accordionHeading.attr('aria-expanded', 'true');
      }
    });
  });
}
