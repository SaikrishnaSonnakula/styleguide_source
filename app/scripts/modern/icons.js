import $ from "jquery";
export function setIconClickHandler(){
  $('.-icon').click(function(event) {
    let iconName = $(event.delegateTarget).attr('data-name');
    let iconPrefix = "icon-";
    let iconClass = iconPrefix + iconName;
    let previousIcon = $('#usage i').attr('class').split(" ")[0];
    $('#usage i').each(function(index){
      $(this).removeClass(previousIcon);
      let size = $(this).attr('class');
      $(this).attr('class', iconClass + " " + size);
      ($('.token.attr-value').slice(index)).text(`="${$(this).attr('class')}"`);
    });
  });
}
