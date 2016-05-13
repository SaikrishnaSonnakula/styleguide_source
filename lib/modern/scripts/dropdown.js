const dropdownButtonSelector = '.-value';
const currentSelectedOption = '.current-selection';
const optionListSelector = '.-options li';
const dropdownOpenClass = '-open';
const activeOptionClass = '-active';
const ENTER_KEY = 13;
const setupDropdown = (element) => {
  var $ = require('jquery');
  const dropdownButton = $(dropdownButtonSelector, element);
  const optionList = $(optionListSelector, element);
  const lastOptionIndex = optionList.length - 1;

  let currentOptionIndex = 0;
  let selectedOption = optionList[0];
  let focusedOption;


  const focusOn = (optionToFocusOn) => {
    $(optionToFocusOn).focus();
  };

  const isDropdownOpen = () => {
    return $(element).hasClass(dropdownOpenClass);
  };

  const toggleDropdown = (focusElement) => {
    $(element).toggleClass(dropdownOpenClass);
    let ariaExpandedValue = 'true';
    let ariaHiddenValue = 'false';
    if(!isDropdownOpen()) {
      ariaExpandedValue = 'false';
      ariaHiddenValue = 'true';
      focusOn(focusElement);
    }
    dropdownButton.attr('aria-expanded', ariaExpandedValue);
    $('ul', element).attr('aria-hidden', ariaHiddenValue);
  };

  const setActiveOption = () =>  {
    $(optionListSelector, element).each((index, option) => {
      const optionLink = $('a', option);
      let ariaSelectedValue = 'false';
      let ariaCheckedValue = 'false';
      if (option === selectedOption) {
        ariaSelectedValue = 'true';
        ariaCheckedValue  = 'true';
        $(option).addClass(activeOptionClass);
      } else {
        $(option).removeClass(activeOptionClass);
      }
      optionLink.attr('aria-selected', ariaSelectedValue);
      optionLink.attr('aria-checked', ariaCheckedValue);
    });
  };

  const select = (option) => {
    selectedOption = option;
    $(currentSelectedOption, element).text($(option).text());
    setActiveOption();
    toggleDropdown(dropdownButton);
  };

  const handleArrowKey = (newOptionIndex) => {
    focusedOption = optionList[newOptionIndex];
    currentOptionIndex = newOptionIndex;
    focusOn($('a', optionList[newOptionIndex]));
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

  const handleSpace = () => {
    select(optionList[currentOptionIndex]);
  };

  const handleCloseKeys = () => {
    toggleDropdown(dropdownButton);
  };

  const KEY_HANDLERS = {
    40: handleDownKey,
    38: handleUpKey,
    32: handleSpace,
    27: handleCloseKeys, //Escape Key Handler
    9: handleCloseKeys   //Tab Key Handler
  };

  optionList.each((index, option) => {
    $(option).attr('role', 'presentation');
    var optionAnchor = $('a', option);
    optionAnchor.attr('role', 'option');

    optionAnchor.on('click keydown', ($event) => {
      if(!$event.keyCode || $event.keyCode === ENTER_KEY) {
        const optionSelected = $event.target.parentElement;

        select(optionSelected);
      }
    });
  });

  dropdownButton.on('click', () => {
    toggleDropdown(dropdownButton);

    if(isDropdownOpen()){
      currentOptionIndex = 0;
      focusedOption = optionList[0];
      focusOn($('a', focusedOption));
    }
  });

  $(element).on('keydown', ($event) => {
    const keyCode = $event.keyCode;

    if(isDropdownOpen() && KEY_HANDLERS[keyCode]){
      $event.preventDefault();
      KEY_HANDLERS[keyCode]();
    }
  });

  $(document).on('click', ($event) => {
    let target = $event.target;
    if($(element).has(target).length <= 0 && isDropdownOpen()){
      toggleDropdown(target);
    }
  });
};

export default setupDropdown;
