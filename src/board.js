class Board {
    constructor() {
        this.state = [ [null, null, null], [null, null, null], [null, null, null] ];
        this.isXTurn = true;
    }

    play(x, y) {
        if (this.isXTurn) {
            this.state[y][x] = "X";
        } else {
            this.state[y][x] = "O";
        }

        this.isXTurn = !this.isXTurn;        
        return this.state;
    }
}