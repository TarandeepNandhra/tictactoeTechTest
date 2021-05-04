class Board {
    constructor() {
        this.boardState = [ [null, null, null], [null, null, null], [null, null, null] ];
        this.isXTurn = true;
        this.winner = null;
    }

    play(x, y) {
        if (this.boardState[y][x] !== null) {
            throw new Error("Space already taken, pick a vacant square!");
        }

        if (this.winner) {
            return this.winner;
        }

        this.updateState(x, y);

        if (this.playerWin()) {
            this.isXTurn ? this.winner = "Player X Wins!" : this.winner = "Player O Wins!"
            return this.winner;
        }

        if (this.isBoardFull()) {
            this.winner = "Draw! Board is full!";
            return this.winner;
        }

        this.isXTurn = !this.isXTurn;        
        return this.boardState;
    }

    updateState(x, y) {
        if (this.isXTurn) {
            this.boardState[y][x] = "X";
        } else {
            this.boardState[y][x] = "O";
        }
    }

    isBoardFull() {
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if (this.boardState[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    playerWin() {

        if (this.isDiagonalMatch() || this.isVerticalOrHorizontal()) {
            return true;
        } else {
            return false;
        }

        
    }

    isVerticalOrHorizontal() {
        for(var i = 0; i < 3; i++) {
            if (this.isHorizontalMatch(i) || this.isVerticalMatch(i)) {
                    return true;
                }
        }
        return false;
    }
    
    // If 3 in a row horizontally
    isHorizontalMatch(index) {
        return (this.boardState[0][index] == this.boardState[1][index] && 
                this.boardState[1][index] == this.boardState[2][index] &&
                this.boardState[1][index] !== null);
    }

    // If 3 in a row vertically
    isVerticalMatch(index) {
        return (this.boardState[index][0] == this.boardState[index][1] && 
                this.boardState[index][1] == this.boardState[index][2] &&
                this.boardState[index][1] !== null);
    }

    // If 3 in a row diagonally
    isDiagonalMatch() {
        return ((this.boardState[0][0] == this.boardState[1][1] && 
            this.boardState[1][1] == this.boardState[2][2] &&
            this.boardState[1][1] !== null) || 
            (this.boardState[0][2] == this.boardState[1][1] && 
            this.boardState[1][1] == this.boardState[2][0] &&
            this.boardState[1][1] !== null));
    }
}