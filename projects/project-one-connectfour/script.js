  $(function() {
// begins the game by telling the players what to do next
var start = $(".startButton");
    $(start).click(function () {
        alert("Click on a 'drop' button at the top of a column to drop your first chip!");
    });

// when you click on a cell, the pink circle shows up there

 // $(".board").on('click', function (event) {
 //  //  console.log("hi!");
 //   $(event.target).append('<div class="chipPink"><div>');
 // });

$(".dropButtonOne").on('click', function () {
  var counter = 2;
  counter += 1;

      if (counter % 2 == 0) {
  $("#forty-three").append('<div class="chipYellow"></div>');
}  else{
        $("#forty-three").append('<div class="chipPink"></div>');
}
});




$(".dropButtonTwo").on('click', function () {
  // console.log("hi!");
  $("#forty-four").append('<div class="chipPink"></div>')
});

$(".dropButtonThree").on('click', function () {
  // console.log("hi!");
  $("#forty-five").append('<div class="chipPink"></div>')
});

$(".dropButtonFour").on('click', function () {
  // console.log("hi!");
  $("#forty-six").append('<div class="chipPink"></div>')
});

$(".dropButtonFive").on('click', function () {
  // console.log("hi!");
  $("#forty-seven").append('<div class="chipPink"></div>')
});

$(".dropButtonSix").on('click', function () {
  // console.log("hi!");
  $("#forty-eight").append('<div class="chipPink"></div>')
});

$(".dropButtonSeven").on('click', function () {
  // console.log("hi!");
  $("#forty-nine").append('<div class="chipPink"></div>')
});
//
// $(".dropButtons").css("background-color", "yellow");
//
//
//
// $('#green').on('click', function () {
//   $('#black').css('background-color', 'green');
// });


// $(“button”).click(function(){
//     $(“p”).css(“color”, “red”);
// });



  });
