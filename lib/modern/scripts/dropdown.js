import $ from 'jquery';
const dropdownButtonSelector = '.-value';
const currentSelectedOption = '.current-selection';
const optionListSelector = '.-options li';
const dropdownOpenClass = '-open';
const activeOptionClass = '-active';
const ENTER_KEY = 13;

const setupDropdown = (element) => {
  const dropdownButton = $(element).find(dropdownButtonSelector);
  const optionList = $(element).find(optionListSelector);
  const lastOptionIndex = optionList.length - 1;

  let currentOptionIndex = 0;
  let selectedOption = optionList[0];
  let focusedOption;

  const toggleDropdown = () => {
    $(element).toggleClass(dropdownOpenClass);

    if(!isDropdownOpen()) {
      dropdownButton.attr('aria-expanded', false);
      $(element).find('ul').attr('aria-hidden', true);
      focusOn(dropdownButton);
    } else {
      dropdownButton.attr('aria-expanded', true);
      $(element).find('ul').attr('aria-hidden', false);
    }
  };

  const setActiveOption = () =>  {
    $(optionListSelector).each((index, option) => {
      const optionLink = $(option).find('a');

      if (option === selectedOption) {
        optionLink.attr('aria-selected', true);
        optionLink.attr('aria-checked', true);
        $(option).toggleClass(activeOptionClass);
      } else {
        optionLink.attr('aria-selected', false);
        optionLink.attr('aria-checked', false);
      }
    });
  };

  const select = (option) => {
    $(selectedOption).toggleClass(activeOptionClass);
    selectedOption = option;
    $(element).find(currentSelectedOption).text($(option).text());
    setActiveOption();
    toggleDropdown();
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
    focusOn($(optionList[newOptionIndex]).find('a'));
  };

  const handleSpace = () => {
    select(optionList[currentOptionIndex]);
  };

  const handleCloseKeys = () => {
    toggleDropdown();
    focusOn(dropdownButton);
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
    $(option).find('a').attr('role', 'option');

    $(option).find('a').on('click keydown', ($event) => {
      if(!$event.keyCode || $event.keyCode === ENTER_KEY) {
        const optionSelected = $event.target.parentElement;
        $event.preventDefault();

        select(optionSelected);
      }
    });
  });

  dropdownButton.on('click', () => {
    toggleDropdown();
    if(isDropdownOpen()){
      currentOptionIndex = 0;
      focusedOption = optionList[0];
      focusOn($(focusedOption).find('a'));
    }
  });

  $(element).on('keydown', ($event) => {
    const keyCode = $event.keyCode;

    if(isDropdownOpen() && KEY_HANDLERS[keyCode]){
      $event.preventDefault();

      KEY_HANDLERS[keyCode]();
    };
  });
};

$(document).ready(() => {
  setTimeout(() => {
    $('.dropdown').each((index, dropdown) => {
      setupDropdown(dropdown);
    });
  }, 2000);
});
