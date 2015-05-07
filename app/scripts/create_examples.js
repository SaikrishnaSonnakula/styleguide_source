define(['jquery'], function($){
  return function() {
    var trimMarkup = function(markup) {
      var firstTab;

      return $.trim($.map(markup.split("\n"), function(line){
        if($.trim(line) && !firstTab) {
          firstTab = line.search(/[^\s]/);
        }
        return line.substring(firstTab);
      }).join("\n"));
    };

    $(".example").each(function(i, el) {
      var $el = $(el);
      var $exampleNote = $el.find(".example-note");
      $exampleNote.remove();

      var $code = $("<div class='code'></div>");
      $code.append($("<pre></pre>").append($("<code class='language-markup'></code>").text(trimMarkup($el.html()))));
      //$code.prepend("<h4>Code</h4>");

      var $result = $el.clone();
      $result.removeClass();
      $result = $("<div class='result-pane'></div>").append($result);
      $result = $("<div class='result'></div>").append($result);
      //$result.prepend("<h4>Result</h4>");
      $result.append($exampleNote);

      $el.html("");
      $el.append($result);
      $el.append($code);

      Prism.highlightAll();
    });
  }
});