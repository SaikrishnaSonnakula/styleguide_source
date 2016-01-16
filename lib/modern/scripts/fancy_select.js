import $ from 'jquery';

export default function fancySelect($nativeSelect) {
  var $fancySelect;

  function init(){
    $nativeSelect.wrap("<div class='fancy-select'></div>");
    $fancySelect = $nativeSelect.parent();
    var selectedValue = null;
    var defaultSelection = false;
    var textSelector = $("label[for="+ $nativeSelect.attr("id")+"]");
    var description = textSelector.attr('title');
    selectedValue = $nativeSelect.children('option:selected').html();

    if(description){
      _.each($nativeSelect.children(),function(item){
        defaultSelection = defaultSelection || $(item).attr('selected');
      });
      selectedValue = defaultSelection ? selectedValue : description;

      textSelector.removeAttr("title");
    }

    var label = textSelector.html();

    if($nativeSelect.children('option').length === 1){
      var label = $("label[for="+ $nativeSelect.attr("id")+"]").html();
      $fancySelect.append("<div class='-item'><label>"+label+"</label><span class='name'>"+selectedValue+"</span></div>");
      $nativeSelect.trigger('change');
      return;
    }

    $fancySelect.append("<button class='-value'>" + label + " " + selectedValue + "</button>");
   	$fancySelect.append("<div class='-options'></div>");

    _.each($nativeSelect.children('option'), function(option) {
      var $optionButton = $("<button value= '"+ $(option).val() + "' class='-option'>" + $(option).html()+ "</button>");

		  if(selectedValue === $(option).html()){
			  setSelect($optionButton);
		  }

		  $optionButton.on('click', function() {
		  	$fancySelect.find(".-option").removeClass("-active");
		  	setSelect($optionButton);
		  	$nativeSelect.trigger('change');
		  });

      $fancySelect.find(".-options").append($optionButton);
    });

    $fancySelect.on('click', function() {
      $fancySelect.toggleClass('-open');
    });
	}

	function setSelect($button){
    var label = $("label[for="+ $nativeSelect.attr("id")+"]").html();
 		$nativeSelect.val($button.val());
 		$fancySelect.find(".-value").html(label + " "+ $button.html());
 		$button.addClass('-active');
	}

	init();
}