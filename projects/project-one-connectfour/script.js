  $(function() {
// begins the game by telling the players what to do next
var start = $(".startButton");
    $(start).click(function () {
        alert("Click on any box to drop your first chip!");
    });

// when you click on a cell, the pink circle shows up there

 $(".board").on('click', function (event) {
  //  console.log("hi!");
   $(event.target).append('<div class="chipPink"><div>');
 });









 //Start game function. Puts 'pink' or 'yellow' in box. Switches from 'pink' to 'yellow' on each turn, plus incrementing the turn counter.
     function startGame() {
         $($gameCells).one('click', function() {
             $(this).html(turn);
             moves[this.id] = turn;
             count++;
             if (count % 2 === 0) {
                 turn = 'pink'; //pink turn
                 checkWinner('pink');
             } else {
                 turn = 'yellow'; //yellow turn
                 checkWinner('yellow');
             }
         });
         console.log(moves, turn, count);
     }


  });
