import $ from 'jquery';
const dropdownButtonSelector = '.-value';
const currentSelectedOption = '.current-selection';
const optionListSelector = '.-options li';
const dropdownOpenClass = '-open';
const activeOptionClass = '-active';
const ENTER_KEY = 13;

const setupDropdown = (element) => {
  const dropdownButton = $(dropdownButtonSelector, element);
  const optionList = $(optionListSelector, element);
  const lastOptionIndex = optionList.length - 1;

  let currentOptionIndex = 0;
  let selectedOption = optionList[0];
  let focusedOption;

  const toggleDropdown = (focusElement) => {
    $(element).toggleClass(dropdownOpenClass);

    if(!isDropdownOpen()) {
      dropdownButton.attr('aria-expanded', false);
      $('ul', element).attr('aria-hidden', true);
      focusOn(focusElement);
    } else {
      dropdownButton.attr('aria-expanded', true);
      $('ul', element).attr('aria-hidden', false);
    }
  };

  const setActiveOption = () =>  {
    $(optionListSelector, element).each((index, option) => {
      const optionLink = $('a', option);

      if (option === selectedOption) {
        optionLink.attr('aria-selected', true);
        optionLink.attr('aria-checked', true);
        $(option).addClass(activeOptionClass);
      } else {
        optionLink.attr('aria-selected', false);
        optionLink.attr('aria-checked', false);
        $(option).removeClass(activeOptionClass);
      }
    });
  };

  const select = (option) => {
    selectedOption = option;
    $(currentSelectedOption, element).text($(option).text());
    setActiveOption();
    toggleDropdown(dropdownButton);
  };

  const focusOn = (optionToFocusOn) => {
    $(optionToFocusOn).focus();
  };

  const isDropdownOpen = () => {
    return $(element).hasClass(dropdownOpenClass);
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

  const handleArrowKey = (newOptionIndex) => {
    focusedOption = optionList[newOptionIndex];
    currentOptionIndex = newOptionIndex;
    focusOn($('a', optionList[newOptionIndex]));
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
    $('a', option).attr('role', 'option');

    $('a', option).on('click keydown', ($event) => {
      if(!$event.keyCode || $event.keyCode === ENTER_KEY) {
        const optionSelected = $event.target.parentElement;
        $event.preventDefault();

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
    };
  });

  $(document).on('click', ($event) => {
    let target = $event.target;
    if($(element).has(target).length <= 0 && isDropdownOpen()){
      toggleDropdown(target);
    }
  });
};

$(document).ready(() => {
  setTimeout(() => {
    $('.dropdown').each((index, dropdown) => {
      setupDropdown(dropdown);
    });
  }, 2000);
});
