class FantasyTennis {
    constructor() {
        this.tournamentName = document.getElementById("chooseTournament").value;
        this.drawSize = 0;
        this.actualPlayer = ["Federer", "Djokovic", "Nadal", "Thiem", "Zverev", "Nishikori", "Cilic", "Dimitrov"];
        this.topBox = document.getElementsByClassName("topOfTwo");
        this.bottomBox = document.getElementsByClassName("bottomOfTwo");
        this.topBox2 = document.getElementsByClassName("topOfTwo2");
        this.bottomBox2 = document.getElementsByClassName("bottomOfTwo2");
        this.topBox3 = document.getElementsByClassName("topOfTwo3");
        this.bottomBox3 = document.getElementsByClassName("bottomOfTwo3");
        this.theDrawR4 = document.getElementsByClassName("theDrawR4");
        this.Quarterfinal = [];
        this.Semifinal = [];
        this.Final = [];
        this.Winner = [];
    }



    setUpTournament() {



        tournament.forEach((item) => {
            var tournamentOption = document.createElement("option");
            tournamentOption.innerText = item[1];
            document.getElementById("chooseTournament").appendChild(tournamentOption);

        })
        for (let city of tournament) {
            if (city[1] == this.tournamentName) {
                this.drawSize = city[3]
                break;
            }

        }
    }

    setUpGraphicDraw() {
        for (let i = 1; i <= this.drawSize / 2; i++) {
            let box = document.createElement("div");
            let playerBoxes = document.createElement("button");
            playerBoxes.innerHTML = this.actualPlayer[2 * i - 2];
            playerBoxes.className = "topOfTwo"
            let playerBoxes1 = document.createElement("button");
            playerBoxes1.innerHTML = this.actualPlayer[2 * i - 1];
            playerBoxes1.className = "bottomOfTwo"
            box.appendChild(playerBoxes);
            box.appendChild(playerBoxes1);
            document.getElementById("theDrawR1").appendChild(box);
        }
        for (let j = 1; j <= this.drawSize / 4; j++) {
            let box = document.createElement("div");
            let playerBoxes2 = document.createElement("button");
            playerBoxes2.innerHTML = ""
            playerBoxes2.className = "topOfTwo2"
            let playerBoxes3 = document.createElement("button");
            playerBoxes3.innerHTML = "";
            playerBoxes3.className = "bottomOfTwo2"
            box.appendChild(playerBoxes2);
            box.appendChild(playerBoxes3);
            document.getElementById("theDrawR2").appendChild(box);
        }
        for (let k = 1; k <= this.drawSize / 8; k++) {
            let box = document.createElement("div");
            let playerBoxes4 = document.createElement("button");
            playerBoxes4.innerHTML = ""
            playerBoxes4.className = "topOfTwo3"
            let playerBoxes5 = document.createElement("button");
            playerBoxes5.innerHTML = "";
            playerBoxes5.className = "bottomOfTwo3"
            box.appendChild(playerBoxes4);
            box.appendChild(playerBoxes5);
            document.getElementById("theDrawR3").appendChild(box);
        }
        for (let l = 1; l < 2; l++) {
            let box = document.createElement("div");
            let playerBoxes6 = document.createElement("button");
            playerBoxes6.innerHTML = ""
            playerBoxes6.className = "theDrawR4"
            box.appendChild(playerBoxes6);
            document.getElementById("theDrawR4").appendChild(box);
        }

    }
    defineStructure() {
        this.Quarterfinal.push(this.topBox[0])
        this.Quarterfinal.push(this.bottomBox[0])
        this.Quarterfinal.push(this.topBox[1])
        this.Quarterfinal.push(this.bottomBox[1])
        this.Quarterfinal.push(this.topBox[2])
        this.Quarterfinal.push(this.bottomBox[2])
        this.Quarterfinal.push(this.topBox[3])
        this.Quarterfinal.push(this.bottomBox[3])

        this.Semifinal.push(this.topBox2[0])
        this.Semifinal.push(this.bottomBox2[0])
        this.Semifinal.push(this.topBox2[1])
        this.Semifinal.push(this.bottomBox2[1])

        this.Final.push(this.topBox3[0])
        this.Final.push(this.bottomBox3[0])

        this.Winner.push(this.theDrawR4[0])
        
    }
    }