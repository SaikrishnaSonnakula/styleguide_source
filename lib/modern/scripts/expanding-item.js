import $ from 'jquery';

export default function expandingItem() {
  var expandingItemId = $("#expandable-feed-item");
  var expandingItemContent = $(".expandable-feed-item__summary-content");
  var expandingItemCloseExpansion = $(".expandable-feed-item .icon-close");
  var expandingItemCollapsibleContent = $(".expandable-feed-item__hidden-content");

  expandingItemContent.on('click', function() {
    if(!expandingItemId.hasClass("-open")){
      expandingItemId.toggleClass("-open");
      expandingItemCollapsibleContent.toggleClass("-open");
      var expanded = expandingItemId.hasClass("-open");
      expandingItemContent.attr("aria-expanded", expanded);
      expandingItemCollapsibleContent.attr("aria-hidden", !expanded);
      expandingItemCloseExpansion.focus();
    }
  });

  expandingItemCloseExpansion.on('click', function() {
    expandingItemId.toggleClass("-open");
    expandingItemCollapsibleContent.toggleClass("-open");
    var expanded = expandingItemId.hasClass("-open");
    expandingItemContent.attr("aria-expanded", expanded);
    expandingItemCollapsibleContent.attr("aria-hidden", !expanded);
  });
}
