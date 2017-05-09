  $(function() {
var start = $(".startButton");
    $(start).click(function () {
        alert("Click on a 'drop' button at the top of a column to drop your first chip!");
    });


$("#dropButtonOne").on('click', function () {
  var counter = 2;
  counter += 1;

      if (counter % 2 == 0) {
  $("#forty-three").append('<div class="chipYellow"></div>');
}  else{
        $("#forty-three").append('<div class="chipPink"></div>');
}
});







// $("#dropButtonTwo").on('click', function () {
//   var counter = 2;
//   counter += 1;
//
//       if (counter % 2 == 0) {
//   $("#forty-four").append('<div class="chipYellow"></div>');
// }  else{
//         $("#forty-four").append('<div class="chipPink"></div>');
// }
// });
//
// $("#dropButtonThree").on('click', function () {
//   var counter = 2;
//   counter += 1;
//
//       if (counter % 2 == 0) {
//   $("#forty-five").append('<div class="chipYellow"></div>');
// }  else{
//         $("#forty-five").append('<div class="chipPink"></div>');
// }
// });
// $("#dropButtonFour").on('click', function () {
//   var counter = 2;
//   counter += 1;
//
//       if (counter % 2 == 0) {
//   $("#forty-six").append('<div class="chipYellow"></div>');
// }  else{
//         $("#forty-six").append('<div class="chipPink"></div>');
// }
// });
// $("#dropButtonFive").on('click', function () {
//   var counter = 2;
//   counter += 1;
//
//       if (counter % 2 == 0) {
//   $("#forty-seven").append('<div class="chipYellow"></div>');
// }  else{
//         $("#forty-seven").append('<div class="chipPink"></div>');
// }
// });
// $("#dropButtonSix").on('click', function () {
//   var counter = 2;
//   counter += 1;
//
//       if (counter % 2 == 0) {
//   $("#forty-eight").append('<div class="chipYellow"></div>');
// }  else{
//         $("#forty-eight").append('<div class="chipPink"></div>');
// }
// });
// $("#dropButtonSeven").on('click', function () {
//   var counter = 2;
//   counter += 1;
//
//       if (counter % 2 == 0) {
//   $("#forty-nine").append('<div class="chipYellow"></div>');
// }  else{
//         $("#forty-nine").append('<div class="chipPink"></div>');
// }
// });

  });
