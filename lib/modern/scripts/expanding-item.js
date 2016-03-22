import $ from 'jquery';

export default function expandingItem() {
  var expandingItemId = $("#expandable-feed-item");
  var expandingItemCloseExpansion = $(".expandable-feed-item .icon-close");
  var expandingItemCollapsibleContent = $(".expandable-feed-item__hidden-content");

  expandingItemId.on('click', function() {
    if(!expandingItemId.hasClass("-open")){
      expandingItemId.toggleClass("-open");
      var expanded = expandingItemId.hasClass("-open");
      expandingItemId.attr("aria-expanded", expanded);
      expandingItemCollapsibleContent.attr("aria-hidden", !expanded);
    }
  });

  expandingItemCloseExpansion.on('click', function(event) {
    expandingItemId.toggleClass("-open");
    var expanded = expandingItemId.hasClass("-open");
    expandingItemId.attr("aria-expanded", expanded);
    expandingItemCollapsibleContent.attr("aria-hidden", !expanded);
    event.preventDefault();
  });
}
