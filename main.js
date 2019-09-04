
var FT = new FantasyTennis();

FT.setUpTournament()
FT.setUpGraphicDraw()
FT.defineStructure()  
FT.pushResults()


console.log(FT.Semifinal)

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

  FT.Quarterfinal.forEach((element,index) => {
    
    element.onclick =function() { 
    FT.Semifinal[Math.floor(index/2)].innerHTML = element.innerHTML;
    FT.Semifinal[Math.floor(index/2)] = element;
    console.log(FT.Semifinal)
    FT.pushResults()
    FT.compareResults()
    }})

    FT.Semifinal.forEach((element,index) => {

        element.onclick =function() { 
        FT.Final[Math.floor(index/2)].innerHTML = element.innerHTML;
        console.log(Math.floor(index/2))
        FT.pushResults()
        FT.compareResults()
      }})

      FT.Final.forEach((element,index) => {

        element.onclick =function() { 
        FT.Winner[Math.floor(index/2)].innerHTML = element.innerHTML;
        console.log(Math.floor(index/2))
        FT.pushResults()
        FT.compareResults()
      }})

      