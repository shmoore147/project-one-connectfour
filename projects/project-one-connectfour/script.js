$(function() {
    var start = $(".startButton");
    $(start).click(function () {
        alert("Flip your laptop upside down to play! Player one: Click on a 'drop' button at the top of a column to drop your first chip. The first player to get four of the same color chips in a row is the winner!");
    });

    var playerTurn = 1




    $('.board').on('click', function(event){
        $(event.target).addClass(`player${currentPlayer}` );
        if(currentPlayer === 1){
            currentPlayer = 2
        } else if (currentPlayer === 2){
            currentPlayer = 1
        }

    });



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


    $("#dropButtonTwo").on('click', function () {
        var chipColor = null
        if (playerTurn === 1) {
          chipColor = "pink";
          playerTurn = 2
          $('#forty-four').append('<div class="chipPink"></div>')

        }
        else if (playerTurn === 2) {
          chipColor = "yellow";
          playerTurn = 1
          $('#forty-four').append('<div class="chipYellow"></div>')
        }
    });

    $("#dropButtonThree").on('click', function () {
        var chipColor = null
        if (playerTurn === 1) {
          chipColor = "pink";
          playerTurn = 2
          $('#forty-five').append('<div class="chipPink"></div>')

        }
        else if (playerTurn === 2) {
          chipColor = "yellow";
          playerTurn = 1
          $('#forty-five').append('<div class="chipYellow"></div>')
        }
    });
    $("#dropButtonFour").on('click', function () {
        var chipColor = null
        if (playerTurn === 1) {
          chipColor = "pink";
          playerTurn = 2
          $('#forty-six').append('<div class="chipPink"></div>')

        }
        else if (playerTurn === 2) {
          chipColor = "yellow";
          playerTurn = 1
          $('#forty-six').append('<div class="chipYellow"></div>')
        }
    });
    $("#dropButtonFive").on('click', function () {
        var chipColor = null
        if (playerTurn === 1) {
          chipColor = "pink";
          playerTurn = 2
          $('#forty-seven').append('<div class="chipPink"></div>')

        }
        else if (playerTurn === 2) {
          chipColor = "yellow";
          playerTurn = 1
          $('#forty-seven').append('<div class="chipYellow"></div>')
        }
    });


    $("#dropButtonSix").on('click', function () {
        var chipColor = null
        if (playerTurn === 1) {
          chipColor = "pink";
          playerTurn = 2
          $('#forty-eight').append('<div class="chipPink"></div>')

        }
        else if (playerTurn === 2) {
          chipColor = "yellow";
          playerTurn = 1
          $('#forty-eight').append('<div class="chipYellow"></div>')
        }
    });


    $("#dropButtonSeven").on('click', function () {
        var chipColor = null
        if (playerTurn === 1) {
          chipColor = "pink";
          playerTurn = 2
          $('#forty-nine').append('<div class="chipPink"></div>')

        }
        else if (playerTurn === 2) {
          chipColor = "yellow";
          playerTurn = 1
          $('#forty-nine').append('<div class="chipYellow"></div>')
        }
    });



})
