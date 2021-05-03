class Board {
    constructor() {
        this.state = [ [null, null, null], [null, null, null], [null, null, null] ];
        this.isXTurn = true;
        this.winner = null;
    }

    play(x, y) {
        if (this.state[y][x] !== null) {
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

        this.isXTurn = !this.isXTurn;        
        return this.state;
    }

    updateState(x, y) {
        if (this.isXTurn) {
            this.state[y][x] = "X";
        } else {
            this.state[y][x] = "O";
        }
    }

    playerWin() {
        
        for(var i = 0; i < 3; i++) {
            if (this.isHorizontalMatch(i) || this.isVerticalMatch(i)) {
                    return true;
                }
        }

        // if (this.isDiagonalMatch) {
        //     return true;
        // }

        if ((this.state[0][0] == this.state[1][1] && 
            this.state[1][1] == this.state[2][2] &&
            this.state[1][1] !== null) || 
            (this.state[0][2] == this.state[1][1] && 
            this.state[1][1] == this.state[2][0] &&
            this.state[1][1] !== null)) {
                return true;
            }
        return false;
    }

    // If 3 in a row horizontally
    isHorizontalMatch(index) {
        return (this.state[0][index] == this.state[1][index] && 
                this.state[1][index] == this.state[2][index] &&
                this.state[1][index] !== null);
    }

    // If 3 in a row vertically
    isVerticalMatch(index) {
        return (this.state[index][0] == this.state[index][1] && 
                this.state[index][1] == this.state[index][2] &&
                this.state[index][1] !== null);
    }

    // If 3 in a row diagonally
    // isDiagonalMatch() {
    //     var leftDiagonal = 
    //         (this.state[0][0] == this.state[1][1] && 
    //         this.state[1][1] == this.state[2][2] &&
    //         this.state[1][1] !== null);
    //     var rightDiagonal = 
    //         (this.state[0][2] == this.state[1][1] && 
    //         this.state[1][1] == this.state[2][0] &&
    //         this.state[1][1] !== null);

    //     if (leftDiagonal === true || rightDiagonal === true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}