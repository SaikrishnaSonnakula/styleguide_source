import $ from "jquery";



export default function() {
	$(".spacing-example").each(function(i, el){
		var $example = $(el);
		var value = $example.css("top"); //hack to get info to Javascript to display on html
		var $value = $("<div class='spacing-value'>" + value + "</div>");

		$example.append($value);
	});
};