import $ from 'jquery';

export default function expandingItem() {
  var expandingItemId = $("#expandable-feed-item");
  var expandingItemContent = $(".expandable-feed-item__summary-content");
  var expandingItemCloseExpansion = $(".expandable-feed-item .icon-close");

  expandingItemContent.on('click', function() {
    expandingItemId.toggleClass("-open");
  });

  expandingItemCloseExpansion.on('click', function() {
    expandingItemId.toggleClass("-open");
  });
}
