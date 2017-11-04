
$(document).ready(function(){

  //initial check to make sure jquery loaded
  //alert('jquery loaded');
  $("span:parent").css({'color': '#fff', 'font-weight': 'bold', 'font-style': 'italic'});
  $(".fa-home").css('color', '#fff');

  $(".fa-home").hover(function(){
    $(this).css("color", "green");
    }, function(){
    $(this).css("color", "#fff");
});

});
