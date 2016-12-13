

var Game = function() {
  this.playerX = 'Player-X';
  this.playerO = 'Player-O';
  this.currentTurn = 1;
  this.board = [];

  this.MIN_SPACE = 0;
  this.MAX_SPACE = 8;
  this.MAX_ROWS_COLS = 2;
  this.MIN_ROWS_COLS = 0;

  for (var i = 0; i <= this.MAX_SPACE; i++) {
    this.board[i] = ' ';
  }
};



Game.prototype.currentPlayer = function() {
  return this.currentTurn % 2 ? this.playerX: this.playerY;
};

Game.prototype.play = function(row, col) {
  var square = row * 3 + col;
  if (row < this.MIN_ROWS_COLS || row > this.MAX_ROWS_COLS) {
    throw "Square Outside the board!";
  }
  if (col < this.MIN_ROWS_COLS || col > this.MAX_ROWS_COLS) {
    throw "Square Outside the board!";
  }
  if (this.board[square] == ' ') {
    this.board[square] = this.currentPlayer() == this.playerX ? 'X': 'O';
    this.currentTurn++;
  }
};

Game.prototype.getBoard = function() {
  var returnMe = '';
  for(var i = 0; i <= this.MAX_SPACE; i++) {
    returnMe += this.board[i];
    if(i % 3 == 2) {
      returnMe += "\n";
    }
  }
  return returnMe;
};

Game.prototype.getWinner = function() {
  // Check each row
  for(var i = 0; i <= this.MAX_ROWS_COLS; i++) {
    if (this.board[i * 3 + 0] ==  this.board[i * 3 + 1] && this.board[i * 3 + 0] == this.board[i * 3 + 2] && this.board[i * 3 + 0] != ' ') {
      return this.board[i*3 + 0] == 'X' ? this.playerX : this.playerO;
    }
  }
    // Check across the columns
    for(i = 0; i <= this.MAX_ROWS_COLS; i++) {
      if (this.board[0 * 3 + i] ==  this.board[1 * 3 + i] && this.board[0 * 3 + i] == this.board[2 * 3 + i] && this.board[0 * 3 + i] != ' ') {
        return this.board[0*3 + i] == 'X' ? this.playerX : this.playerO;
      }
    }
      // Check Diagonals
      if(this.board[0*3 + 0] == this.board[1*3 + 1] && this.board[0*3+0] == this.board[2*3 + 2] &&
      this.board[0*3 + 0] != ' ') {
        return this.board[0*3 + 0] == 'X' ? this.playerX : this.playerO;
      }
      else if(this.board[0*3 + 2] == this.board[1*3 + 1] && this.board[0*3+2] == this.board[2*3 + 0] &&
            this.board[0*3 + 2] != ' ') {
              return this.board[0*3 + 2] == 'X' ? this.playerX : this.playerO;
      }

      return 'none';

  };

export default Game;
