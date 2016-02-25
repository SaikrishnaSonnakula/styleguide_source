import $ from 'jquery';
export default function accessibility(){
  
$('ul').attr({
  role:'listbox'
});

$('li').attr({
  role: "option",
  'aria-selected':"false"
});
  
$('li').click(function (e) {
  $('li').siblings().attr({
    'aria-selected': "false",
    tabindex:"-1",
    }).removeClass("-active");
  
  $(this).attr({
    'aria-selected': "true",
    tabindex:"0",
  }).addClass('-active');
});
};
  