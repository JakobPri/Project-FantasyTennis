class FantasyTennis {
    constructor() {
        this.tournamentName = document.getElementById("chooseTournament").value;
        this.drawSize = 0;
        this.guessedResultDraw = [];
        this.tournamentOptionButton = document.getElementById("chooseTournament")
        this.pointCounter = 0;
        this.totalPoints = document.getElementById("totalPoint");
        this.submitButton = document.getElementById("submitButton");
        this.drawOverall = document.getElementById("DrawOverall")
    }
    // This function adds for every available tournament one option to the Tournament Choosing Tab
    setUpTournament() {
        this.tournamentName = document.getElementById("chooseTournament").value;
        tournament.forEach((item) => {
            let tournamentOption = document.createElement("option");
            tournamentOption.innerText = item[1];
            document.getElementById("chooseTournament").appendChild(tournamentOption);
        })
        //this.randomizeStartingPlayers()
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
        let firstDraw = document.querySelectorAll("#player1")
        for (let index = 0; index < this.drawSize / 2; index++) {
            firstDraw[index].innerText = randomPlayers[index*2]
        }
        let firstDraw2 = document.querySelectorAll("#player2")
        for (let index2 = 0; index2 < this.drawSize / 2; index2++) {
            firstDraw2[index2].innerText = randomPlayers[index2*2+1]
        }

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

                drawOfButton
                gameOfButton
                buttonClicked
            }
        }
    }*/


    // This function defines the clicking

    clickEventHandlerSetup() {
        let playerButtons = Array.from(document.querySelectorAll(".playerButton"))
        for (let button of playerButtons) {
            button.onclick = () => {
                let gameOfButtonId = event.target.parentNode.id
                let drawOfButtonId = event.target.parentNode.parentNode.id
                
                let nextDrawId = "draw-" + (parseInt(drawOfButtonId.split("draw-")[1])+1)
                let nextButtonId = (parseInt(gameOfButtonId.split("gameNr")[1]) & 1) ? "player1" : "player2"
                let nextGameId = "gameNr" + (Math.ceil(gameOfButtonId.split("gameNr")[1]/2))
                document.querySelector("#" + nextDrawId + ">" + "#" + nextGameId + ">" +  "#" + nextButtonId).innerText = event.target.innerText
            }
        }

        this.submitButton.onclick = () => {
            SB.populateScoreBoard()
        }
        this.tournamentOptionButton.onchange = () => {
            this.choosingTournament();
            this.setupGraphic2(this.drawSize)
            this.randomizeStartingPlayers();
            this.clickEventHandlerSetup()

        }

    }
    
    /*
    Maybe it's just easier if you create a string with the html inside like this inside a for loop
    const playerHTML =
    `<div id= "draw-${i}" class= "game" >
    
        <div class= "player" id= "player-1" >
    
    </div>
    `
    this.drawOverall.innerHTML = playerHTML 
    */
    

    // This function adds the appropriate size to the draw and makes it visible
    setupGraphic2(drawSize) {
        for (let i = 1; i <= Math.log2(drawSize); i++) {
            let drawDiv = document.createElement("div")
            drawDiv.id = "draw-" + i
            for (let j = 1; j <= Math.ceil(drawSize / (2 ** i)); j++) {
                let gameBoxDiv = document.createElement("div");
                gameBoxDiv.id = "gameNr" + j
                gameBoxDiv.className = "game"
                let player1BoxDiv = document.createElement("button");
                player1BoxDiv.id = "player1"
                player1BoxDiv.className = "playerButton"
                let player2BoxDiv = document.createElement("button");
                player2BoxDiv.id = "player2"
                player2BoxDiv.className = "playerButton"
                gameBoxDiv.appendChild(player1BoxDiv);
                gameBoxDiv.appendChild(player2BoxDiv);
                drawDiv.appendChild(gameBoxDiv);
                this.drawOverall.appendChild(drawDiv)
            }
        }
        let winnerBoxDiv = document.createElement("div");
        winnerBoxDiv.id = "winner"

        let winnerBoxButton = document.createElement("button");
        winnerBoxButton.id = "winnerButton"
        winnerBoxDiv.appendChild(winnerBoxButton);
        this.drawOverall.appendChild(winnerBoxDiv)


    }

}
