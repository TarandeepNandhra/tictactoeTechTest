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

        if (this.isXTurn) {
            this.state[y][x] = "X";
        } else {
            this.state[y][x] = "O";
        }

        if (this.playerWin()) {
            this.isXTurn ? this.winner = "Player X Wins!" : this.winner = "Player O Wins!"
            return this.winner;
        }

        this.isXTurn = !this.isXTurn;        
        return this.state;
    }

    playerWin() {
        for(var i = 0; i < 3; i++) {
            if (this.state[0][i] == this.state[1][i] && 
                this.state[1][i] == this.state[2][i] &&
                this.state[1][i] !== null) {
                    return true;
                }
        }
        return false;
    }
}