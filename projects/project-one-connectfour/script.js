$(function() {
    var start = $(".startButton");
    $(start).click(function () {
        alert("Click on a 'drop' button at the top of a column to drop your first chip!");
    });

    var playerTurn = 1


    $("#dropButtonOne").on('click', function () {
        var chipColor = null
        if (playerTurn === 1) {
          chipColor = "pink";
          playerTurn = 2
          $('#forty-three').append('<div class="chipPink"></div>')
        }
        else if (playerTurn === 2) {
          chipColor = "yellow";
          playerTurn = 1
          $('#forty-three').append('<div class="chipYellow"></div>')
        }
    });

})
