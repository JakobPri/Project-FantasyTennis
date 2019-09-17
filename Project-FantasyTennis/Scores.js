class ScoreBoard {
    constructor(game) {
        this.game = game;
        this.players = [
            [],
            []
        ]; // [{name: "Marco", score: 0}, {name: "Jacob", score: 0}, {name: "Patrick", score: 0}]
    }
    populateScoreBoard() {
        this.playerName = prompt("Please enter your name", "TennisGott");
        if (this.game.guessedResultDraw.length === 15) {
            this.players[0].push(this.playerName);
            this.players[1].push(this.game.pointCounter);
            for (let i = 0; i < this.players[0].length; i++) {
                let tr = document.createElement("tr")
                let td1 = document.createElement("td")
                td1.innerHTML = this.players[0][i];
                let td2 = document.createElement("td")
                td2.innerHTML = this.players[1][i];
                Scoreboard.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                document.getElementById("Scoreboard").appendChild(tr);

        
            }

        }

    }
    

}