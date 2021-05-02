class Board {
    constructor() {
        this.state = [ [null, null, null], [null, null, null], [null, null, null] ];
        this.isXTurn = true;
    }

    play(x, y) {
        if (this.state[y][x] !== null) {
            throw new Error("Space already taken, pick a vacant square!");
        }

        if (this.isXTurn) {
            this.state[y][x] = "X";
        } else {
            this.state[y][x] = "O";
        }

        this.isXTurn = !this.isXTurn;        
        return this.state;
    }
}