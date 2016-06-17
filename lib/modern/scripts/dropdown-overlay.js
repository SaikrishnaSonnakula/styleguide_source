  import $ from 'jquery';
  export default function dropdownOverlay() {
    // For each dynamic dropdown 
    $(window).load(function() {
      $('.select-dropdown').each(function() {
        var $element = $(this);
        var $select = $element.find('select');
        var $value = $element.find('.select-value');
        // Bind event handlers to <select>
        $select.on({
          'change keyup': function() {
            $value.text($select.val());
          },
          'focus': function() {
            $element.addClass('focus');
          },
          'blur': function() {
            $element.removeClass('focus');
          }
        });
        $select.trigger('change');
      });

    });


  }
