import Game from 'game';

describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe ('Constructor', function() {
    it('Game constructor exists', function() {
      expect(Game).toBeFunction();
    });

    it('Game constructor sets xPlayer and yPlayer defaults', function() {
      expect(game.playerO).toEqual('Player-O');
      expect(game.playerX).toEqual('Player-X');
    });

    it('Game constructor sets the current turn', function() {
      expect(game.currentTurn).toEqual(1);
    });

    it('Game constructor sets the board to empty squares', function() {
      for (var i = 0; i < 9; i++) {
        expect(game.board[i]).toEqual(' ');
      }
    });
  });

  describe('current Player', function() {
    it('currentPlayer function exists', function() {
      expect(game.currentPlayer).toBeFunction();
    });

    it('CurrentPlayer function starts off returning PlayerX', function() {
      expect(game.currentPlayer()).toBe(game.playerX);
    });
  });

  describe('play', function() {

    it('play is a function', function() {
      expect(game.play).toBeFunction();
    });
    it('play outside the board throws an error', function() {
      expect(function() {game.play(-1, 0);}).toThrow("Square Outside the board!");
    });
    it('play outside the board throws an error', function() {
      expect(function() {game.play(3, 0);}).toThrow("Square Outside the board!");
    });
    it('play outside the board throws an error', function() {
      expect(function() {game.play(0, 3);}).toThrow("Square Outside the board!");
    });
    it('play outside the board throws an error', function() {
      expect(function() {game.play(0, -1);}).toThrow("Square Outside the board!");
    });
    it('play changes the board correctly', function() {
      game.play(1, 1);
      expect(game.board[1*3 + 1]).toEqual('X');
      game.play(0, 0);
      expect(game.board[0]).toEqual('O');
      game.play(2, 0);
      expect(game.board[2*3 + 0]).toEqual('X');
      game.play(0,2);
      expect(game.board[0*3 + 2]).toEqual('O');
    });

  });

  describe('getBoard', function() {
    it('gets the initial board', function() {
      expect(game.getBoard()).toEqual("   \n   \n   \n");
    });
    it('gets board changes', function() {
      game.play(0,0);
      game.play(1,1);
      expect(game.getBoard()).toEqual("X  \n O \n   \n");
    });
  });

  describe('getWinner', function() {
    it('getWinner exists', function() {
      expect(game.getWinner).toBeFunction();
    });

    it('If no winner, just say so', function() {
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(0,0); // X
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(1,1); // O
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(2,2); // X
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(0,1); // O
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(0,2); // X
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(1,0); // O
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(2,1); // X
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
      game.play(2,0); // O
      expect(game.getWinner()).toEqual(Game.NO_WINNER);
    });

    it('Winner indicates the proper winner - diagonal across', function() {
      game.play(0,0);
      game.play(0,1);
      game.play(1,1);
      game.play(0,2);
      game.play(2,2);
      expect(game.getWinner()).toEqual(game.playerX);
    });
    it('Winner indicates the proper winner - diagonal reverse', function() {
      game.play(0,2);
      game.play(0,1);
      game.play(1,1);
      game.play(0,0);
      game.play(2,0);
      expect(game.getWinner()).toEqual(game.playerX);
    });
    it('Winner indicates the proper winner - horizontal', function() {
      game.board[0*3 + 0] = 'O';
      game.board[0*3 + 1] = 'O';
      game.board[0*3 + 2] = 'O';
      expect(game.getWinner()).toEqual(game.playerO);

      game = new Game();
      game.board[1*3 + 0] = 'O';
      game.board[1*3 + 1] = 'O';
      game.board[1*3 + 2] = 'O';
      expect(game.getWinner()).toEqual(game.playerO);

      game = new Game();
      game.board[2*3 + 0] = 'O';
      game.board[2*3 + 1] = 'O';
      game.board[2*3 + 2] = 'O';
      expect(game.getWinner()).toEqual(game.playerO);
    });
    it('Winner indicates the proper winner - Vertical', function() {
      game.board[0*3 + 0] = 'O';
      game.board[1*3 + 0] = 'O';
      game.board[2*3 + 0] = 'O';
      expect(game.getWinner()).toEqual(game.playerO);

      game = new Game();
      game.board[0*3 + 1] = 'O';
      game.board[1*3 + 1] = 'O';
      game.board[2*3 + 1] = 'O';
      expect(game.getWinner()).toEqual(game.playerO);

      game = new Game();
      game.board[0*3 + 2] = 'O';
      game.board[1*3 + 2] = 'O';
      game.board[2*3 + 2] = 'O';
      expect(game.getWinner()).toEqual(game.playerO);
    });
  });
});
