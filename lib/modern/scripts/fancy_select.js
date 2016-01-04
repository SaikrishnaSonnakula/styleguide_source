import $ from 'jquery';

export default function fancySelect($nativeSelect) {
	var $fancySelect;

	function init(){
    $nativeSelect.wrap("<div class='fancy-select'></div>");
    $fancySelect = $nativeSelect.parent();

    var selectedValue = null;
    selectedValue = $nativeSelect.children('option:selected').html();
    $fancySelect.append("<button class='-value'>" + selectedValue + "</button>");
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
/*
<!--hidden-->
<label for="select-from" class="screenreader-only">
  Select from:
</label>
<!--hidden end-->

<div class="fancy-select">
	<!--hidden-->
  <select id="select-from" class="screenreader-only">
    <option value="" selected="true"></option>
    <option value="A">Apple</option>
    <option value="B">Banana</option>
  </select>
  <!--hidden end-->

  <button class="-value">Select from: </button>
  <div class="-options">
    <button value="" class="-option -active"></button>
    <button value="A" class="-option">Apple</button>
    <button value="B" class="-option">Banana</button>
  </div>
</div>
*/