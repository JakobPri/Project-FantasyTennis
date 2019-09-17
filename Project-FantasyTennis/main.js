const FT = new FantasyTennis()
const SB = new ScoreBoard(FT)

FT.setUpTournament()
FT.mainLoop()
FT.randomizeStartingPlayers()
