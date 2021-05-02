describe('Board', () => {

    var game;

    beforeEach(() => {
        game = new Board;
    })

   it('Contains the initial state of tictactoe game', () => {
       expect(game.state).toEqual([ [null, null, null], [null, null, null], [null, null, null] ])
   });

   describe('Play', () => {

       it('Player X moves first, game state returned', () => {
            expect(game.play(0,0)).toEqual([ ["X", null, null], [null, null, null], [null, null, null] ])
       });

       it('Player O moves second', () => {
            game.play(0,0)
            expect(game.play(2,0)).toEqual([ ["X", null, "O"], [null, null, null], [null, null, null] ])
       });
   });
});