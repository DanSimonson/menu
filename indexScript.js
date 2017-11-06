

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

//arrays for comparison
//var buttonId =['zero', 'one', 'two', 'three', 'four']
//var pid = ['pzero', 'pone', 'ptwo', 'pthree', 'pfour']

//--- this worked
//var identifier = document.getElementById("one");
//identifier.addEventListener("click", function(){
  //alert("Hello World!");
//}); this worked---->

//identifier.addEventListener("click", showup());



  //alert('here');
  //console.log('here');

  /*var btnOne = document.getElementById("one").addEventListener('click', showup);
  var btnTwo = document.getElementById("two").addEventListener('click', showup);
  var btnThree = document.getElementById("three").addEventListener('click', showup);
  var btnFour = document.getElementById("four").addEventListener('click', showup);

  function showup(){
    var btnArray = ['one', 'two', 'three', 'four'];
    var pArray = ['pzero', 'pone', 'ptwo', 'pthree', 'pfour'];
    //var attribute = element.getAttribute(attributeName);
    //var attribute = this.getAttribute('id');

    let pElementOne = document.querySelector('#pone');
    let pElementTwo = document.querySelector('#two');
    let pElementThree = document.querySelector('#three');
    let pElementFour = document.querySelector('#four');
    console.log(pElementOne.classList);
    //loop through array of strings to look for matching button string id's
    btnArray.find(function(item, index) {
      if (index === 0){
        //pElementOne.classList.remove("hideMe");

      }
      if(index === 1){
        console.log('here');
        pElementTwo.classList.remove("hideMe")
      }
    });

    //btnArray.forEach(function(item, index) {
      //if button id array index equals then removeClass
      //-- make corresponding paragraph id display(removeClass)
      //--else
      // make the make paragraph id not display(addClass)
      //if(index === 0){
        //pElementOne.classList.remove("hideMe");
        //pElementTwo.classList.add("hideMe");
      //}
      /*if(index === 1){
        pElementTwo.classList.remove("hideMe");
      }
      /if(index === 2){
        pElementThree.classList.toggle("hideMe");
      }
      if(index === 3){
        pElementFour.classList.toggle("hideMe");
      }
    //});
  }
});
  //identifier.addEventListener('click', showup())
  //function showup () {
    //alert('why is this happening');
  //}

  /*$('#one').click(function() {
      buttonId.forEach(item) {
        if(item === 'one') {
          $('#pone').removeClass('hideMe');
        } else {
          pid.forEach(item) {
          $('#pone').addClass('hideMe');
        }
      }
    }*/
    //loop through array of strings mmatching button string id's
    //if button id equals the string array id then
    //-- make corresponding paragraph id display
    //--else
    // make the make paragraph id not display


    //alert('here');

    //$('#pone').removeClass('hideMe');
    //$('#pone').toggle();
    //traversing the DOM to access proper element property for manipulation
    //console.log(event.target.parentNode.id);
      //console.log(event.target);
  //});



  //$('#one').clicked(function(){
    //alert('here');
    //var btnId = this.id;
  //});




/*$('#one').click(function() {

  $('#pone').removeClass('hideMe');
});

$('#two').click(function() {

  $('#ptwo').removeClass('hideMe');

});*/
