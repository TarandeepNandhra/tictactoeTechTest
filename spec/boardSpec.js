describe('Board', () => {
  var game;

  beforeEach(() => {
    game = new Board;
  })

  it('Contains the initial state of tictactoe game', () => {
    expect(game.boardState).toEqual([ [null, null, null], [null, null, null], [null, null, null] ])
  });

  describe('Play', () => {

    it('Player X moves first, game state returned', () => {
      expect(game.play(0,0)).toEqual([ ["X", null, null], [null, null, null], [null, null, null] ])
    });

    it('Player O moves second', () => {
      game.play(0,0)
      expect(game.play(2,0)).toEqual([ ["X", null, "O"], [null, null, null], [null, null, null] ])
    });

    it('Only allows players to select empty spaces', () => {
      game.play(0,0)
      expect(function() { game.play(0,0); } ).toThrow(new Error("Space already taken, pick a vacant square!"))
      expect(game.boardState).toEqual([ ["X", null, null], [null, null, null], [null, null, null] ])
    });
    it('Returns Player X wins if they get 3 in a row vertically', () => {
      game.play(0,0)
      game.play(1,0)
      game.play(0,1)
      game.play(1,1)
      expect(game.play(0,2)).toEqual("Player X Wins!")
    });
    it('Returns Player O Wins! if they get 3 in a row horizontally', () => {
      game.play(2,2)
      game.play(0,0)
      game.play(1,1)
      game.play(0,1)
      game.play(1,2)
      expect(game.play(0,2)).toEqual("Player O Wins!")
    });
      it('Returns Player X wins if they get 3 in a row diagonally', () => {
      game.play(0,0)
      game.play(1,0)
      game.play(1,1)
      game.play(1,2)
      expect(game.play(2,2)).toEqual("Player X Wins!")
      });
    it('Returns Player O if the get 3 in a row left diagonal', () => {
      game.play(0,0)
      game.play(0,2)
      game.play(1,0)
      game.play(1,1)
      game.play(1,2)
      expect(game.play(2,0)).toEqual("Player O Wins!")
      // If player tries to continue game, returns win message
      expect(game.play(2,2)).toEqual("Player O Wins!")
    });
    it('Returns a draw if all spaces are filled and no winners', () => {
      game.play(0,0)
      game.play(0,1)
      game.play(1,1)
      game.play(1,2)
      game.play(0,2)
      game.play(2,0)
      game.play(2,1)
      game.play(2,2)
      expect(game.play(1,0)).toEqual("Draw! Board is full!")
    });
  });
});