class FantasyTennis {
    constructor() {
        this.tournamentName = document.getElementById("chooseTournament").value;
        this.drawSize = 0;
        this.guessedResultDraw = [];
        this.theDraw1 = document.getElementsByClassName("theDrawR1")
        this.theDraw2 = document.getElementsByClassName("theDrawR2")
        this.theDraw3 = document.getElementsByClassName("theDrawR3")
        this.theDraw4 = document.getElementsByClassName("theDrawR4")
        this.theDraw5 = document.getElementsByClassName("theDrawR5")
        this.theDraw6 = document.getElementsByClassName("theDrawR6")
        this.theDraw7 = document.getElementsByClassName("theDrawR7")
        this.theDraw8 = document.getElementsByClassName("theDrawR8")
        this.tournamentOptionButton = document.getElementById("chooseTournament")
        this.pointCounter = 0;
        this.totalPoints = document.getElementById("totalPoint");
        this.submitButton = document.getElementById("submitButton");
    }
// This function adds for every available tournament one option to the Tournament Choosing Tab
    setUpTournament() {
        this.tournamentName = document.getElementById("chooseTournament").value;
        tournament.forEach((item) => {
            let tournamentOption = document.createElement("option");
            tournamentOption.innerText = item[1];
            document.getElementById("chooseTournament").appendChild(tournamentOption);
        })
// This function returns the drawSize of the chosen Tournament
    }
    choosingTournament() {
        this.tournamentName = document.getElementById("chooseTournament").value;
        for (let city of tournament) {
            if (city[1] == this.tournamentName) {
                this.drawSize = city[3]
                break;
            }
        }
    } 
  // This function adds random Players to the Draw  
    randomizeStartingPlayers() {
        randomPlayers.sort((a, b) => Math.random() - 0.5);
        for (let i = 0; i < this.drawSize; i++) {
            this.theDraw1[i].innerHTML = randomPlayers[i]
        }
        console.log(this.theDraw1)
        console.log(this.theDraw2)
        console.log(this.theDraw3)
        console.log(this.theDraw4)
        console.log(this.theDraw5)
        console.log(this.theDraw6)
        console.log(this.theDraw7)
        console.log(this.theDraw8)

    }

    /*pushResults() {
        this.guessedResultDraw = []
        for (let i = 0; i < 8; i++) {
            this.guessedResultDraw.push(this.Quarterfinal[i].innerHTML)
        }
        for (let j = 0; j < 4; j++) {
            this.guessedResultDraw.push(this.Semifinal[j].innerHTML)
        }
        for (let k = 0; k < 2; k++) {
            this.guessedResultDraw.push(this.Final[k].innerHTML)
        }
        this.guessedResultDraw.push(this.Winner[0].innerHTML)
    }*/

    /*compareResults() {
        this.pointCounter = 0
        for (let l = 0; l < 15; l++) {
            if (this.guessedResultDraw[l] == this.realResultDraw[l] && l < 8) {
                this.pointCounter = this.pointCounter + 0;
            } else if (this.guessedResultDraw[l] == this.realResultDraw[l] && l < 12) {
                this.pointCounter = this.pointCounter + 1
                this.Semifinal[l - 8].style.backgroundColor = "lightgreen";
            } else if (this.guessedResultDraw[l] == this.realResultDraw[l] && l < 14) {
                this.pointCounter = this.pointCounter + 2
                this.Final[l - 12].style.backgroundColor = "lightgreen";
            } else if (this.guessedResultDraw[l] == this.realResultDraw[l] && l < 15) {
                this.pointCounter = this.pointCounter + 4
                this.Winner[l - 14].style.backgroundColor = "lightgreen";
            }
            this.totalPoints.innerHTML = this.pointCounter
        }
        for (let l = 0; l < 15; l++) {
            if (this.guessedResultDraw[l] != this.realResultDraw[l] && l < 8 && this.guessedResultDraw[l] != "") {
            } else if (this.guessedResultDraw[l] != this.realResultDraw[l] && l < 12 && this.guessedResultDraw[l] != "") {
                this.Semifinal[l - 8].style.backgroundColor = "red";
            } else if (this.guessedResultDraw[l] != this.realResultDraw[l] && l < 14 && this.guessedResultDraw[l] != "") {
                this.Final[l - 12].style.backgroundColor = "red";
            } else if (this.guessedResultDraw[l] != this.realResultDraw[l] && l < 15 && this.guessedResultDraw[l] != "") {
                this.Winner[l - 14].style.backgroundColor = "red";
            }
        }
    }*/


    // This function defines the clicking

    mainLoop() {
        this.submitButton.onclick = () => {
            SB.populateScoreBoard()
        }
        this.tournamentOptionButton.onchange = () => {
            this.choosingTournament();
            this.setupGraphic2(this.drawSize)
            this.randomizeStartingPlayers();
        }
        this.theDraw1.forEach((element, index) => {
            element.onclick = () => {
                this.theDraw2[Math.floor(index / 2)].innerHTML = element.innerHTML;
            }
        })




    }
    // This function adds the appropriate size to the draw and makes it visible
    setupGraphic2(drawSize) {
        for (let i = 1; i <= Math.log2(drawSize); i++) {
            console.log(FT.theDraw4)
            for (let j = 1; j <= Math.ceil(drawSize / (2 ** i)); j++) {
                let box = document.createElement("div");
                box.className = "divAroundButtons"
                let playerBox1 = document.createElement("button");
                playerBox1.className = "theDrawR" + i
                let playerBox2 = document.createElement("button");
                playerBox2.className = "theDrawR" + i
                box.appendChild(playerBox1);
                box.appendChild(playerBox2);
                document.getElementById("theDrawR" + i).appendChild(box);
            }
        }
        let box = document.createElement("div");
        box.className = "divAroundButtons"
        let playerBox1 = document.createElement("button");
        playerBox1.className = "theDrawR" + Math.log2(drawSize * 2)
        box.appendChild(playerBox1);
        document.getElementById("theDrawR" + Math.log2(drawSize * 2)).appendChild(box);


    }
    
}