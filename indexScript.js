
$(document).ready(function(){

  //initial check to make sure jquery loaded
  //alert('jquery loaded');

  //set style for the navigation brand and home navigation icon
  $("a:parent").css({'color': '#fff', 'font-weight': 'bold', 'font-style': 'italic'});
  $(".fa-home").css({'color': '#fff','font-weight': 'bold', 'font-style': 'normal'});

  //change fontawesome icon color on hover
  $(".fa-home").hover(function(){
    $(this).css("color", "green");
    }, function(){
    $(this).css("color", "#fff");
});

});
