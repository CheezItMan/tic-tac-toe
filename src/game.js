

const Game = function() {
  this.playerX = 'Player-X';
  this.playerO = 'Player-O';
  this.currentTurn = 1;
  this.board = [];



  for (var i = 0; i <= Game.MAX_SPACE; i++) {
    this.board[i] = Game.BLANK_SPACE;
  }
};

// constants
Game.MIN_SPACE = 0;
Game.MAX_SPACE = 8;
Game.MAX_ROWS_COLS = 2;
Game.MIN_ROWS_COLS = 0;
Game.MIN_SPACE = 0;
Game.MAX_SPACE = 8;
Game.MAX_ROWS_COLS = 2;
Game.MIN_ROWS_COLS = 0;
Game.BLANK_SPACE = ' ';
Game.NO_WINNER = 'none';

// instance functions
Game.prototype.currentPlayer = function() {
  return this.currentTurn % 2 ? this.playerX: this.playerY;
};

Game.prototype.play = function(row, col) {
  var square = row * 3 + col;
  if (row < Game.MIN_ROWS_COLS || row > Game.MAX_ROWS_COLS) {
    throw "Square Outside the board!";
  }
  if (col < Game.MIN_ROWS_COLS || col > Game.MAX_ROWS_COLS) {
    throw "Square Outside the board!";
  }
  if (this.board[square] == Game.BLANK_SPACE) {
    this.board[square] = this.currentPlayer() == this.playerX ? 'X': 'O';
    this.currentTurn++;
  }
};

Game.prototype.getBoard = function() {
  var returnMe = '';
  for(var i = 0; i <= Game.MAX_SPACE; i++) {
    returnMe += this.board[i];
    if(i % 3 == 2) {
      returnMe += "\n";
    }
  }
  return returnMe;
};

Game.prototype.getWinner = function() {
  // Check each row
  for(var i = 0; i <= Game.MAX_ROWS_COLS; i++) {
    if (this.board[i * 3 + 0] ==  this.board[i * 3 + 1] && this.board[i * 3 + 0] == this.board[i * 3 + 2] && this.board[i * 3 + 0] != Game.BLANK_SPACE) {
      return this.board[i*3 + 0] == 'X' ? this.playerX : this.playerO;
    }
  }
    // Check across the columns
    for(i = 0; i <= Game.MAX_ROWS_COLS; i++) {
      if (this.board[0 * 3 + i] ==  this.board[1 * 3 + i] && this.board[0 * 3 + i] == this.board[2 * 3 + i] && this.board[0 * 3 + i] != Game.BLANK_SPACE) {
        return this.board[0*3 + i] == 'X' ? this.playerX : this.playerO;
      }
    }
      // Check Diagonals
      if(this.board[0*3 + 0] == this.board[1*3 + 1] && this.board[0*3+0] == this.board[2*3 + 2] &&
      this.board[0*3 + 0] != Game.BLANK_SPACE) {
        return this.board[0*3 + 0] == 'X' ? this.playerX : this.playerO;
      }
      else if(this.board[0*3 + 2] == this.board[1*3 + 1] && this.board[0*3+2] == this.board[2*3 + 0] &&
            this.board[0*3 + 2] != Game.BLANK_SPACE) {
              return this.board[0*3 + 2] == 'X' ? this.playerX : this.playerO;
      }

      return Game.NO_WINNER;

  };

  // Static Methods

Game.isValidPosition = function(row, col) {
  if (row % 1 !== 0 || col % 1 !== 0)
    throw "Only numeric arguments supported";

    // return true if the row & col are within the max row and col.
  return row >= Game.MIN_ROWS_COLS && row <= Game.MAX_ROS_COLS &&
          col >= Game.MIN_ROWS_COLS && col <= Game.MAX_ROS_COLS;
};

export default Game;
