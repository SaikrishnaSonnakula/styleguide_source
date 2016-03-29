define(['jquery'], function($){
  return function() {
    var trimMarkup = function(markup) {
      var firstTab;

      return $.trim($.map(markup.split('\n'), function(line){
        if($.trim(line) && !firstTab) {
          firstTab = line.search(/[^\s]/);
        }
        return line.substring(firstTab);
      }).join('\n'));
    };

    $('.example').each(function(i, el) {
      var $el = $(el);
      var $exampleNote = $el.find('.example-note');
      $exampleNote.remove();

      var $code = $('<div class=\'code\'></div>');

      var $extraCodeEl = $el.find('.code');
      var $extraCode = '';
      $extraCodeEl.removeClass('code');
      $extraCodeEl.remove();
      if($extraCodeEl.html()) {
	$extraCode = $('<pre></pre>').append($('<code></code>').text(trimMarkup($extraCodeEl.html())));
	$extraCode.attr('class', $extraCodeEl.attr('class'));
      }

      $code.append($extraCode);
      $code.append($('<pre></pre>').append($('<code class=\'language-markup\'></code>').text(trimMarkup($el.html()))));

      var $result = $el.clone();
      $result.removeClass();
      $result = $('<div class=\'result-pane\'></div>').append($result);
      $result = $('<div class=\'result\'></div>').append($result);
      $result.append($exampleNote);

      $el.html('');
      $el.append($result);
      $el.append($code);

      Prism.highlightAll();
    });
  };
});
