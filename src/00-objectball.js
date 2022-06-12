function gameObject(){
    return {
          Home:{
              teamName: 'Brooklyn Nets',
              colors: ['Black', 'White'],
              players:{
                  'Alan Anderson': {
                      number: 0,
                      shoe: 16,
                      points: 22,
                      rebounds:12,
                      assists: 12,
                      steals: 3,
                      blocks: 1,
                      slamDunks: 1,
                  },
                  'Reggie Evans': {
                      number: 30,
                      shoe: 14,
                      points: 12,
                      rebounds:12,
                      assists: 12,
                      steals: 12,
                      blocks: 12,
                      slamDunks: 7,
                  },
                  'Brook Lopez': {
                      number: 11,
                      shoe: 17,
                      points: 17,
                      rebounds: 19,
                      assists: 10,
                      steals: 3,
                      blocks: 1,
                      slamDunks: 15,
                  },
                  'Mason Plumlee': {
                      number: 1,
                      shoe: 19,
                      points: 26,
                      rebounds: 12,
                      assists: 6,
                      steals: 3,
                      blocks: 8,
                      slamDunks: 5,
                  },
                  'Jason Terry': {
                      number: 31,
                      shoe: 15,
                      points:19,
                      rebounds: 2,
                      assists: 2,
                      steals: 4,
                      blocks: 11,
                      slamDunks: 1,
                  },
          }
          },
          Away:{
              teamName: 'Charlotte Hornets',
              colors: ['Turquoise','Purple'],
              players:{
                  'Jeff Adrien': {
                      number: 4,
                      shoe: 18,
                      points: 10,
                      rebounds: 1,
                      assists: 1,
                      steals: 2,
                      blocks: 7,
                      slamDunks: 2,
                  },
                  'Bismak Biyombo': {
                      number: 0,
                      shoe: 16,
                      points: 12,
                      rebounds: 4,
                      assists: 7,
                      steals: 7,
                      blocks: 15,
                      slamDunks: 10,
                  },
                  'DeSagna Diop': {
                      number: 2,
                      shoe: 14,
                      points: 24,
                      rebounds: 12,
                      assists: 12,
                      steals: 4,
                      blocks: 5,
                      slamDunks: 5,
                  },
                  'Ben Gordon': {
                      number: 8,
                      shoe: 15,
                      points: 33,
                      rebounds: 3,
                      assists: 2,
                      steals: 1,
                      blocks: 1,
                      slamDunks: 0,
                  },
                  'Brendan Haywood': {
                      number: 33,
                      shoe: 15,
                      points: 6,
                      rebounds: 12,
                      assists: 12,
                      steals: 22,
                      blocks: 5,
                      slamDunks: 12,
                  },
              }
          }
      }
  }
  console.log(gameObject());

const scoreBoard = gameObject()

function allPlayers(){
    const scoreBoard = gameObject()
    const homeTeam = scoreBoard.Home.players
    const awayTeam = scoreBoard.Away.players

    return Object.assign({}, homeTeam, awayTeam)
}

function numPointsScored(insertPlayerName){
    //Another method to do this to avoid using the for in loop.
    //object.entries() returns an array of a given object just like for... in loop.

    // const playerArrays = Object.entries(players())
    // const player = playerArrays.find(playerArray => playerArray[0] === insertPlayerName)

    //playerName at 0 index
    //playerInfo at 1 index
    //eg ['Brendan Haywood',(...)]

    // return player[1].points

    for(const player in allPlayers()){
        if(player === insertPlayerName){
            return allPlayers()[player].points
        }
    }
}

console.log(numPointsScored('Brendan Haywood'))

//home team
function homeTeamz(){
    return gameObject().Home
}
//away team
function awayTeamz(){
    return gameObject().Away
}
//shoe size
function shoeSize(insertPlayerName){
    return allPlayers()[insertPlayerName].shoe
}
console.log(shoeSize('Brendan Haywood'))

//all teams
function allTeams(){
    const scoreBoard = gameObject()
    const homeTeamz = scoreBoard.Home
    const awayTeamz = scoreBoard.Away

    return Object.assign({}, homeTeamz, awayTeamz)
}
//team names in array
function teamNames(){
    const homeName = gameObject().Home.teamName
    const awayName = gameObject().Away.teamName

    return [homeName, awayName]
}
console.log(teamNames())