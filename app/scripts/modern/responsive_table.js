import $ from "jquery";
import _ from "underscore";

var breakPoints = {
  '$mobile': {
    mobile: true,
  },
  '$tablet': {
    tablet: true
  },
  '$desktop-small':{
    desktopSmall: true
  },
  '$desktop-medium': {
    desktopMedium: true
  },
  '$desktop-large': {
    desktopLarge: true
  },
  '$desktop': {
    desktopSmall: true,
    desktopMedium: true,
    desktopLarge: true
  },
  '$handheld': {
    mobile: true,
    tablet: true
  },
  '$tablet-up': {
    tablet: true,
    desktopSmall: true,
    desktopMedium: true,
    desktopLarge: true
  },
  '$desktop-medium-up': {
    desktopMedium: true,
    desktopLarge: true
  }
};

export default function responsiveTable(args) {
  var $table = $('<table class="table"></table>');
  var $headingRow = $('<tr>');
  $headingRow.append('<th></th>');
  $headingRow.append('<th>Mobile</th>');
  $headingRow.append('<th>Tablet</th>');
  $headingRow.append('<th>Small <br> Desktop</th>');
  $headingRow.append('<th>Medium <br> Desktop</th>');
  $headingRow.append('<th>Large <br> Desktop</th>');
  $table.append($headingRow);


  _.each(breakPoints, function(breakpointsAffected, cssVar){
    var $tr = $('<tr>');
    $tr.append(`<td><code>${cssVar}</code></td>`);

    function breakpointTD(breakpoint) {
      var $td = $('<td>');
      if(breakpointsAffected[breakpoint]) {
        $td.addClass('leaf');
        return $td.html('Yes');
      }
      return $td.addClass('rose').html('No');
    };

    $tr.append(breakpointTD('mobile'));
    $tr.append(breakpointTD('tablet'));
    $tr.append(breakpointTD('desktopSmall'));
    $tr.append(breakpointTD('desktopMedium'));
    $tr.append(breakpointTD('desktopLarge'));

    $table.append($tr);
  });

  $('#responsive-table').append($table);
}