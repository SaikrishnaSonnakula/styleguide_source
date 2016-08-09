var $ = require('jquery');
export default function dropdownOverlay() {
  // For each dynamic dropdown
  $(document).ready(function() {
    $('.select-dropdown').each(function() {
      var $element = $(this);
      var $select = $element.find('select');
      var $value = $element.find('.select-value');
      var focusClass = 'focus';
      // Bind event handlers to <select>
      $select.on({
        'change keyup': function() {
          $value.text($select.find('option:selected').text());
        },
        'focus': function() {
          $element.addClass(focusClass);
        },
        'blur': function() {
          $element.removeClass(focusClass);
        }
      });
      $select.trigger('change');
    });
  });
}
