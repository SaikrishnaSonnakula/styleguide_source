import $ from 'jquery';

export default function expandingItem() {
  var expandingItemId = $("#expandable-feed-item");
  var expandingItemContent = $(".expandable-feed-item__summary-content");
  var expandingItemCloseExpansion = $(".expandable-feed-item .icon-close");
  var expandingItemCollapsibleContent = $(".expandable-feed-item__hidden-content");

  expandingItemContent.on('click', function() {
<<<<<<< fc9f8e603ea409515722e6bf693cdedc90126a50
    expandingItemId.toggleClass("-open");
    var expanded = feedItemId.hasClass("-open");
    expandingItemId.attr("aria-expanded", expanded);
    expandingItemCollapsibleContent.attr("aria-hidden", !expanded);
=======
    if(!expandingItemId.hasClass("-open")){
      expandingItemId.toggleClass("-open");
      var expanded = expandingItemId.hasClass("-open");
      expandingItemId.attr("aria-expanded", expanded);
      expandingItemCollapsibleContent.attr("aria-hidden", !expanded);
    }
>>>>>>> Add accesibility to the JS code
  });

  expandingItemCloseExpansion.on('click', function() {
    expandingItemId.toggleClass("-open");
<<<<<<< fc9f8e603ea409515722e6bf693cdedc90126a50
    var expanded = feedItemId.hasClass("-open");
=======
    var expanded = expandingItemId.hasClass("-open");
>>>>>>> Add accesibility to the JS code
    expandingItemId.attr("aria-expanded", expanded);
    expandingItemCollapsibleContent.attr("aria-hidden", !expanded);
  });
}
