define(['jquery'], function($){
  return function() {
    var trimMarkup = function(markup) {
      var firstTab;

      return $.map(markup.split("\n"), function(line){
        if(line && !firstTab) {
          firstTab = line.search(/[^\s]/);
        }
        return line.substring(firstTab);
      }).join("\n");
    };

    $(".example").each(function(i, el) {
      var $code = $("<div class='code'></div>");
      $code.append($("<pre></pre>").append($("<code class='language-markup'></code>").text(trimMarkup(el.innerHTML))));
      $code.prepend("<h4>Code</h4>");

      var $el = $(el);
      var $result = $el.clone();
      $result.prepend("<h4>Result</h4>");

      $el.html("");
      $el.append($code);
      $el.append($result);

      Prism.highlightAll();
    });
  }
});