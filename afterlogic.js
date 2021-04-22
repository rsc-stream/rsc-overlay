const ws = new WebSocket('ws://localhost:49122');

var BlueTeamWins = []
var OrangeTeamWins = []
var blueData1 = []
var blueData2 = []
var blueData3 = []
var orangeData1 = []
var orangeData2 = []
var orangeData3 = []
var blueData1P = []
var blueData2P = []
var blueData3P = []
var orangeData1P = []
var orangeData2P = []
var orangeData3P = []
var mvp = []
 var team = []
 var goalAssist = []
 var OrangeScore = [0]
 var BlueScore = [0]

 function logocolors() {
     //console.log('logocolors')
     var blueDataScore = blueData1P[0].score + blueData2P[0].score + blueData3P[0].score 
      var orangeDataScore = orangeData1P[0].score + orangeData2P[0].score + orangeData3P[0].score
      var blueDataGoals = blueData1P[0].goals + blueData2P[0].goals + blueData3P[0].goals 
      var orangeDataGoals = orangeData1P[0].goals + orangeData2P[0].goals + orangeData3P[0].goals
      var blueDataAssists = blueData1P[0].assists + blueData2P[0].assists + blueData3P[0].assists 
      var orangeDataAssists = orangeData1P[0].assists + orangeData2P[0].assists + orangeData3P[0].assists
      var blueDataShots = blueData1P[0].shots + blueData2P[0].shots + blueData3P[0].shots 
      var orangeDataShots = orangeData1P[0].shots + orangeData2P[0].shots + orangeData3P[0].shots
      var blueDataSaves = blueData1P[0].saves + blueData2P[0].saves + blueData3P[0].saves 
      var orangeDataSaves = orangeData1P[0].saves + orangeData2P[0].saves + orangeData3P[0].saves
 //console.log(blueDataScore)
   if (blueDataScore > orangeDataScore) {
     $('#afterPTSLogo').addClass('invisible')
     $('#afterPTSBlueLogo').removeClass('invisible')
     $('#afterPTSOrangeLogo').addClass('invisible')
     
     //$('#afterPTSLogo').src = "assets/Blue_Points_icon.png"
    // $('#afterPTSLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75)); filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75));"
   }else if (blueDataScore < orangeDataScore) {
     $('#afterPTSLogo').addClass('invisible')
     $('#afterPTSOrangeLogo').removeClass('invisible')
     $('#afterPTSBlueLogo').addClass('invisible')
    // $('#afterPTSLogo').src = "assets/Orange_Points_icon.png"
    // $('#afterPTSLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
   }else{
     $('#afterPTSLogo').removeClass('invisible')
     $('#afterPTSBlueLogo').addClass('invisible')
     $('#afterPTSOrangeLogo').addClass('invisible')
     //$('#afterPTSLogo').src = "assets/Points_icon.png"
   //  $('#afterPTSLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));"
   }

   if (blueDataGoals > orangeDataGoals) {
     $('#afterGoalsLogo').addClass('invisible')
     $('#afterGoalsBlueLogo').removeClass('invisible')
     $('#afterGoalsOrangeLogo').addClass('invisible')
     
     //$('#afterGoalsLogo').src = "assets/Blue_Points_icon.png"
    // $('#afterGoalsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75)); filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75));"
   }else if (blueDataGoals < orangeDataGoals) {
     $('#afterGoalsLogo').addClass('invisible')
     $('#afterGoalsOrangeLogo').removeClass('invisible')
     $('#afterGoalsBlueLogo').addClass('invisible')
    // $('#afterGoalsLogo').src = "assets/Orange_Points_icon.png"
    // $('#afterGoalsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
   }else{
     $('#afterGoalsLogo').removeClass('invisible')
     $('#afterGoalsBlueLogo').addClass('invisible')
     $('#afterGoalsOrangeLogo').addClass('invisible')
     //$('#afterGoalsLogo').src = "assets/Points_icon.png"
   //  $('#afterGoalsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));"
   }

   if (blueDataAssists > orangeDataAssists) {
     $('#afterAssistsLogo').addClass('invisible')
     $('#afterAssistsBlueLogo').removeClass('invisible')
     $('#afterAssistsOrangeLogo').addClass('invisible')
    
     //$('#afterAssistsLogo').src = "assets/Blue_Points_icon.png"
    // $('#afterAssistsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75)); filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75));"
   }else if (blueDataAssists < orangeDataAssists) {
     $('#afterAssistsLogo').addClass('invisible')
     $('#afterAssistsOrangeLogo').removeClass('invisible')
     $('#afterAssistsBlueLogo').addClass('invisible')
    // $('#afterAssistsLogo').src = "assets/Orange_Points_icon.png"
    // $('#afterAssistsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
   }else{
     $('#afterAssistsLogo').removeClass('invisible')
     $('#afterAssistsBlueLogo').addClass('invisible')
     $('#afterAssistsOrangeLogo').addClass('invisible')
     //$('#afterAssistsLogo').src = "assets/Points_icon.png"
   //  $('#afterAssistsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));"
   }

   if (blueDataShots > orangeDataShots) {
     $('#afterShotsLogo').addClass('invisible')
     $('#afterShotsBlueLogo').removeClass('invisible')
     $('#afterShotsOrangeLogo').addClass('invisible')
     
     //$('#afterShotsLogo').src = "assets/Blue_Points_icon.png"
    // $('#afterShotsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75)); filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75));"
   }else if (blueDataShots < orangeDataShots) {
     $('#afterShotsLogo').addClass('invisible')
     $('#afterShotsOrangeLogo').removeClass('invisible')
     $('#afterShotsBlueLogo').addClass('invisible')
    // $('#afterShotsLogo').src = "assets/Orange_Points_icon.png"
    // $('#afterShotsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
   }else{
     $('#afterShotsLogo').removeClass('invisible')
     $('#afterShotsBlueLogo').addClass('invisible')
     $('#afterShotsOrangeLogo').addClass('invisible')
     //$('#afterShotsLogo').src = "assets/Points_icon.png"
   //  $('#afterShotsLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));"
   }

   if (blueDataSaves > orangeDataSaves) {
     $('#afterSavesLogo').addClass('invisible')
     $('#afterSavesBlueLogo').removeClass('invisible')
     $('#afterSavesOrangeLogo').addClass('invisible')
    
     //$('#afterSavesLogo').src = "assets/Blue_Points_icon.png"
    // $('#afterSavesLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75)); filter: drop-shadow(0px 0px 15px rgba(96, 128, 196, 0.75));"
   }else if (blueDataSaves < orangeDataSaves) {
     $('#afterSavesLogo').addClass('invisible')
     $('#afterSavesOrangeLogo').removeClass('invisible')
     $('#afterSavesBlueLogo').addClass('invisible')
    // $('#afterSavesLogo').src = "assets/Orange_Points_icon.png"
    // $('#afterSavesLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));filter: drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
   }else{
     $('#afterSavesLogo').removeClass('invisible')
     $('#afterSavesBlueLogo').addClass('invisible')
     $('#afterSavesOrangeLogo').addClass('invisible')
     //$('#afterSavesLogo').src = "assets/Points_icon.png"
   //  $('#afterSavesLogo').style = "-webkit-filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.75));"
   }

   

}


 ws.onopen = () => {
   //  ws.send('Message From Client')
 }

 ws.onerror = (error) => {
   //console.log(`WebSocket error: ${error}`)
 }

 ws.onmessage = (e) => {

   var jEvent = JSON.parse(event.data);


   //console.log(jEvent)


   if (jEvent.event == "game:update_state") {
     //console.log(jEvent.data)
     //gonna be used in a few spots
     var teamData = jEvent.data.game.teams
    // $('#blueScore').text(BlueScore)
       
    // $('#orangeScore').text(OrangeScore)
    // console.log(OrangeScore)
     //console.log(jEvent.data.game.hasWinner)
     if (jEvent.data.game.hasWinner == true) { 
       
           //winner()
           //afterHighlights()
          // logocolors()
     }else{
        //winner()
        //afterHighlights()
       //logocolors()
     }

       

       //team names
       var blueName = _.get(teamData, [0, 'name'])
       var orangeName = _.get(teamData, [1, 'name'])

    
       //score
       var blueScore = _.get(teamData, [0, 'score'])
       var orangeScore = _.get(teamData, [1, 'score'])

       BlueScore = []
       BlueScore.push(blueScore)
       OrangeScore = []
       OrangeScore.push(orangeScore)
       //$('#blueScore').text(blueScore)
       //$('#orangeScore').text(orangeScore)



       //active player logic
       var activeTarget = jEvent.data.game.target;
       var playerList = jEvent.data.players;
       var activePlayerData = _.get(playerList, activeTarget);


       
           


       //all player logic

       //blue
       var team0 = _.filter(playerList, {
         'team': 0
       })
       //orange
       var team1 = _.filter(playerList, {
         'team': 1
       })




       //does blue team exist?
       if (team0 != undefined) {
         //it does

         //blue players btw
         var blue1 = _.get(team0, [0])
         var blue2 = _.get(team0, [1])
         var blue3 = _.get(team0, [2])
         blueData1P = []
         blueData1P.push(blue1)

         blueData2P = []
         blueData2P.push(blue2)
       
         blueData3P = []
         blueData3P.push(blue3)
         
         if (blue1 != undefined && blue2 != undefined && blue3 != undefined) {
          /* 
           $('#blueName1').text(blue1.name)
           $('#blueGoals1').text(blue1.goals)
           $('#blueShots1').text(blue1.shots)
           $('#blueSaves1').text(blue1.saves)
           $('#blueAssists1').text(blue1.assists)
           $('#bluePoints1').text(blue1.score)
           $('#blueName2').text(blue2.name)
           $('#blueGoals2').text(blue2.goals)
           $('#blueShots2').text(blue2.shots)
           $('#blueSaves2').text(blue2.saves)
           $('#blueAssists2').text(blue2.assists)
           $('#bluePoints2').text(blue2.score)
           $('#blueName3').text(blue3.name)
           $('#blueGoals3').text(blue3.goals)
           $('#blueShots3').text(blue3.shots)
           $('#blueSaves3').text(blue3.saves)
           $('#blueAssists3').text(blue3.assists)
           $('#bluePoints3').text(blue3.score)
*/

       } else {
         //blueResetAll()
       }
       
       //does orange team exist?
       if (team1 != undefined) {
         //it does

         //orange players btw
         var orange1 = _.get(team1, [0])
         var orange2 = _.get(team1, [1])
         var orange3 = _.get(team1, [2])

         orangeData1P = []
         orangeData1P.push(orange1)

         orangeData2P = []
         orangeData2P.push(orange2)
       
         orangeData3P = []
         orangeData3P.push(orange3)

         if (orange1 != undefined && orange2 != undefined && orange3 != undefined) {
         /*  
           $('#orangeName1').text(orange1.name)
           $('#orangeGoals1').text(orange1.goals)
           $('#orangeShots1').text(orange1.shots)
           $('#orangeSaves1').text(orange1.saves)
           $('#orangeAssists1').text(orange1.assists)
           $('#orangePoints1').text(orange1.score)
           $('#orangeName2').text(orange2.name)
           $('#orangeGoals2').text(orange2.goals)
           $('#orangeShots2').text(orange2.shots)
           $('#orangeSaves2').text(orange2.saves)
           $('#orangeAssists2').text(orange2.assists)
           $('#orangePoints2').text(orange2.score)
           $('#orangeName3').text(orange3.name)
           $('#orangeGoals3').text(orange3.goals)
           $('#orangeShots3').text(orange3.shots)
           $('#orangeSaves3').text(orange3.saves)
           $('#orangeAssists3').text(orange3.assists)
           $('#orangePoints3').text(orange3.score)
           */

          // logocolors()
            afterHighlights()
            winner()
       } else {
        // orangeResetAll()
       }
    } 
    }

   }else if (jEvent.event === "game:match_ended") {
    //console.log("Match Ended")
   
   if (jEvent.data.winner_team_num == 0) {
      var BWNumber = parseInt(localStorage.getItem("BlueWins"), 10)
      var NewBlueWins = BWNumber + 1
    
      //console.log(NewBlueWins)
      localStorage.setItem("BlueWins", NewBlueWins);
      var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
      var newGameNum = gameNum + 1
      localStorage.setItem('GameNumber', newGameNum)
      //console.log('Blue Wins')
      $('#blueSeries').text(NewBlueWins);
    }else if (jEvent.data.winner_team_num == 1) {
      var OWNumber = parseInt(localStorage.getItem("OrangeWins"), 10)
      var NewOrangeWins = OWNumber + 1
    
      //console.log(NewOrangeWins)
      localStorage.setItem("OrangeWins", NewOrangeWins);
      var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
      var newGameNum = gameNum + 1
      localStorage.setItem('GameNumber', newGameNum)
      //console.log('Orange Wins')
      $('#OrangeSeries').text(NewOrangeWins);
    } 
    //addWinner()
    winner()
    logocolors()
    afterHighlights()
    
  }

   
   //is the match over?
   else if (jEvent.event == "game:podium_start" /*|| jEvent.event == "game:match_ended"*/) {
       blueData1 = []
       blueData2 = []
       blueData3 = []
       orangeData1 = []
       orangeData2 = []
       orangeData3 = []
       
       blueData1.push(blueData1P[0])
       blueData2.push(blueData2P[0])
       blueData3.push(blueData3P[0])
       orangeData1.push(orangeData1P[0])
       orangeData2.push(orangeData2P[0])
       orangeData3.push(orangeData3P[0])
       console.log(blueData1)
           $('#orangeName1').text(orangeData1[0].name)
           $('#orangeGoals1').text(orangeData1[0].goals)
           $('#orangeShots1').text(orangeData1[0].shots)
           $('#orangeSaves1').text(orangeData1[0].saves)
           $('#orangeAssists1').text(orangeData1[0].assists)
           $('#orangePoints1').text(orangeData1[0].score)
           $('#orangeName2').text(orangeData2[0].name)
           $('#orangeGoals2').text(orangeData2[0].goals)
           $('#orangeShots2').text(orangeData2[0].shots)
           $('#orangeSaves2').text(orangeData2[0].saves)
           $('#orangeAssists2').text(orangeData2[0].assists)
           $('#orangePoints2').text(orangeData2[0].score)
           $('#orangeName3').text(orangeData3[0].name)
           $('#orangeGoals3').text(orangeData3[0].goals)
           $('#orangeShots3').text(orangeData3[0].shots)
           $('#orangeSaves3').text(orangeData3[0].saves)
           $('#orangeAssists3').text(orangeData3[0].assists)
           $('#orangePoints3').text(orangeData3[0].score)
           $('#blueName1').text(blueData1[0].name)
           $('#blueGoals1').text(blueData1[0].goals)
           $('#blueShots1').text(blueData1[0].shots)
           $('#blueSaves1').text(blueData1[0].saves)
           $('#blueAssists1').text(blueData1[0].assists)
           $('#bluePoints1').text(blueData1[0].score)
           $('#blueName2').text(blueData2[0].name)
           $('#blueGoals2').text(blueData2[0].goals)
           $('#blueShots2').text(blueData2[0].shots)
           $('#blueSaves2').text(blueData2[0].saves)
           $('#blueAssists2').text(blueData2[0].assists)
           $('#bluePoints2').text(blueData2[0].score)
           $('#blueName3').text(blueData3[0].name)
           $('#blueGoals3').text(blueData3[0].goals)
           $('#blueShots3').text(blueData3[0].shots)
           $('#blueSaves3').text(blueData3[0].saves)
           $('#blueAssists3').text(blueData3[0].assists)
           $('#bluePoints3').text(blueData3[0].score)
//console.log('podium')     //winner()
    // logocolors()
     
    // endGame()
     //afterHighlights()
     //console.log('match ended / podium')
/*
     if (jEvent.data.winner_team_num == 0) {
       var BWNumber = parseInt(localStorage.getItem("BlueWins"), 10)
       var NewBlueWins = BWNumber + 1
     
       //console.log(NewBlueWins)
       localStorage.setItem("BlueWins", NewBlueWins);
       var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
       var newGameNum = gameNum + 1
       localStorage.setItem('GameNumber', newGameNum)
       
     }else if (jEvent.data.winner_team_num == 1) {
       var OWNumber = parseInt(localStorage.getItem("OrangeWins"), 10)
       var NewOrangeWins = OWNumber + 1
     
       //console.log(NewOrangeWins)
       localStorage.setItem("OrangeWins", NewOrangeWins);
       var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
       var newGameNum = gameNum + 1
       localStorage.setItem('GameNumber', newGameNum)
     }
*/
   }else if (jEvent.event == "game:match_destroyed") {
    
     
   }else if (jEvent.event == "game:goal_scored") {
    var scoreID = jEvent.data.scorer.id
       var scoreTeam = scoreID.slice(-1)
       
          if (scoreTeam === "1" || scoreTeam === "2" || scoreTeam === "3") {
      // $('#blueName').text("")

     // updateBlue = BlueScore + 1
     // BlueScore = []
     // BlueScore.push(updateBlue)
      $('#blueScore').text(parseInt(BlueScore) + 1)
      $('#orangeScore').text(parseInt(OrangeScore))
          }else{
           // $('#orangeName').text("")
          // updateOrange = OrangeScore + 1
          // OrangeScore = []
          // OrangeScore.push(updateOrange)
         // console.log(OrangeScore)
           $('#orangeScore').text(parseInt(OrangeScore) + 1)
           $('#blueScore').text(parseInt(BlueScore))
          }
    
   }else if (jEvent.event == "game:statfeed_event") {
     //console.log(jEvent.data)
     if (jEvent.data.type === "MVP") {
       mvp = []
       mvp.push(jEvent.data.main_target.name)
       //console.log(mvp)
         if (mvp == blueData1P[0].name) {  
           $('#blue1MVP').removeClass('invisible')
           $('#blue2MVP').addClass('invisible')
           $('#blue3MVP').addClass('invisible')
           $('#orange1MVP').addClass('invisible')
           $('#orange2MVP').addClass('invisible')
           $('#orange3MVP').addClass('invisible')
         }else if (mvp == blueData2P[0].name) {
           $('#blue1MVP').addClass('invisible')
           $('#blue2MVP').removeClass('invisible')
           $('#blue3MVP').addClass('invisible')
           $('#orange1MVP').addClass('invisible')
           $('#orange2MVP').addClass('invisible')
           $('#orange3MVP').addClass('invisible')
         }else if (mvp == blueData3P[0].name) {
           $('#blue1MVP').addClass('invisible')
           $('#blue2MVP').addClass('invisible')
           $('#blue3MVP').removeClass('invisible')
           $('#orange1MVP').addClass('invisible')
           $('#orange2MVP').addClass('invisible')
           $('#orange3MVP').addClass('invisible')
         }else if (mvp == orangeData1P[0].name) {
           $('#blue1MVP').addClass('invisible')
           $('#blue2MVP').addClass('invisible')
           $('#blue3MVP').addClass('invisible')
           $('#orange1MVP').removeClass('invisible')
           $('#orange2MVP').addClass('invisible')
           $('#orange3MVP').addClass('invisible')
         }else if (mvp == orangeData2P[0].name) {
           $('#blue1MVP').addClass('invisible')
           $('#blue2MVP').addClass('invisible')
           $('#blue3MVP').addClass('invisible')
           $('#orange1MVP').addClass('invisible')
           $('#orange2MVP').removeClass('invisible')
           $('#orange3MVP').addClass('invisible')
         }else if (mvp == orangeData3P[0].name) {
           $('#blue1MVP').addClass('invisible')
           $('#blue2MVP').addClass('invisible')
           $('#blue3MVP').addClass('invisible')
           $('#orange1MVP').addClass('invisible')
           $('#orange2MVP').addClass('invisible')
           $('#orange3MVP').removeClass('invisible')
         }else{
           $('#blue1MVP').addClass('invisible')
           $('#blue2MVP').addClass('invisible')
           $('#blue3MVP').addClass('invisible')
           $('#orange1MVP').addClass('invisible')
           $('#orange2MVP').addClass('invisible')
           $('#orange3MVP').addClass('invisible')
         }   
     } else if (jEvent.data.type === "Assist") {
    
     }else if (jEvent.data.type === "Shot on Goal") {
         //console.log("shot")
      
       }else if (jEvent.data.type === "Save") {
          
           }else if (jEvent.data.type === "Epic Save") {
            
             }else if (jEvent.data.type === "Hat Trick") {
              
               }else if (jEvent.data.type === "Savior") {
                
           }else if (jEvent.data.type === "Demolition") {
             
   }else if (jEvent.event == "game:replay_end") {
     
     
   }else if (jEvent.event == "game:replay_start") {
     
   }else if (jEvent.event == "game:replay_will_end") {
    
   }else if (jEvent.event == "game:pre_game_countdown_begin") {
    BlueScore = []
    OrangeScore = []
    BlueScore.push(0)
    OrangeScore.push(0)
    //console.log("here")
    $('#orangeScore').text(parseInt(OrangeScore))
    $('#blueScore').text(parseInt(BlueScore))
     //console.log('Countdown')
   }else if (jEvent.event == "game:pre_countdown_begin") {
     
   }else if (jEvent.event == "game:initialized") {
     
 }
 }
   
}

function load() {
  $('#orangeScore').text(parseInt(OrangeScore))
    $('#blueScore').text(parseInt(BlueScore))
}
function addWinner() {
    if (jEvent.data.winner_team_num == 0) {
        var BWNumber = parseInt(localStorage.getItem("BlueWins"), 10)
        var NewBlueWins = BWNumber + 1
      
        //console.log(NewBlueWins)
        localStorage.setItem("BlueWins", NewBlueWins);
        var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
        var newGameNum = gameNum + 1
        localStorage.setItem('GameNumber', newGameNum)
        
      }else if (jEvent.data.winner_team_num == 1) {
        var OWNumber = parseInt(localStorage.getItem("OrangeWins"), 10)
        var NewOrangeWins = OWNumber + 1
      
        //console.log(NewOrangeWins)
        localStorage.setItem("OrangeWins", NewOrangeWins);
        var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
        var newGameNum = gameNum + 1
        localStorage.setItem('GameNumber', newGameNum)
      }
}
   function winner() {
     var blueGoals = document.getElementById("blueScore").innerHTML
     var orangeGoals = document.getElementById("orangeScore").innerHTML
     //console.log(blueGoals)
     if (blueGoals > orangeGoals) {
     $('#blueW').removeClass('invisible');
     $('#orangeL').removeClass('invisible');
     $('#blueL').addClass('invisible');
     $('#orangeW').addClass('invisible');
     } else if (blueGoals < orangeGoals){
     $('#blueL').removeClass('invisible');
     $('#orangeW').removeClass('invisible');
     $('#blueW').addClass('invisible');
     $('#orangeL').addClass('invisible');
     }else{
       $('#blueL').addClass('invisible');
       $('#orangeW').addClass('invisible');
       $('#blueW').addClass('invisible');
       $('#orangeL').addClass('invisible');
     }
 } 

 function afterHighlights() {
  //Score
//if (blueData1[0].score > blueData2[0].score && blueData1[0].score > blueData3[0].score && blueData1[0].score > orangeData1[0].score && blueData1[0].score > orangeData2[0].score && blueData1[0].score > orangeData3[0].score) {
  if (parseInt(bluePoints1.innerHTML, 10) > parseInt(bluePoints2.innerHTML, 10) && parseInt(bluePoints1.innerHTML, 10) > parseInt(bluePoints3.innerHTML, 10) && parseInt(bluePoints1.innerHTML, 10) > parseInt(orangePoints1.innerHTML, 10) && parseInt(bluePoints1.innerHTML, 10) > parseInt(orangePoints2.innerHTML, 10)  && parseInt(bluePoints1.innerHTML, 10) > parseInt(orangePoints3.innerHTML, 10))  {
    //console.log("B1")
      $("#bluePoints2").removeClass('blueAfterHighlights')
      $("#bluePoints2").addClass('text-light')
      
      $("#bluePoints1").removeClass('text-light')
      $("#bluePoints1").addClass('blueAfterHighlights')
      
      
      $("#bluePoints3").removeClass('blueAfterHighlights')
      $("#bluePoints3").addClass('text-light')
      
      $("#orangePoints1").removeClass('orangeAfterHighlights')
      $("#orangePoints1").addClass('text-light')
      
      $("#orangePoints2").removeClass('orangeAfterHighlights')
      $("#orangePoints2").addClass('text-light')
      
      $("#orangePoints3").removeClass('orangeAfterHighlights')
      $("#orangePoints3").addClass('text-light')
      
    }else if (parseInt(bluePoints2.innerHTML, 10) > parseInt(bluePoints1.innerHTML, 10) && parseInt(bluePoints2.innerHTML, 10) > parseInt(bluePoints3.innerHTML, 10) && parseInt(bluePoints2.innerHTML, 10) > parseInt(orangePoints1.innerHTML, 10) && parseInt(bluePoints2.innerHTML, 10) > parseInt(orangePoints2.innerHTML, 10)  && parseInt(bluePoints2.innerHTML, 10) > parseInt(orangePoints3.innerHTML, 10)) {
      //console.log("B2")
      $("#bluePoints1").removeClass('blueAfterHighlights')
      $("#bluePoints1").addClass('text-light')
      
      $("#bluePoints2").addClass('blueAfterHighlights')
      $("#bluePoints2").removeClass('text-light')
      
      $("#bluePoints3").removeClass('blueAfterHighlights')
      $("#bluePoints3").addClass('text-light')
      
      $("#orangePoints1").removeClass('orangeAfterHighlights')
      $("#orangePoints1").addClass('text-light')
      
      $("#orangePoints2").removeClass('orangeAfterHighlights')
      $("#orangePoints2").addClass('text-light')
      
      $("#orangePoints3").removeClass('orangeAfterHighlights')
      $("#orangePoints3").addClass('text-light')
      
    }else if (parseInt(bluePoints3.innerHTML, 10) > parseInt(bluePoints2.innerHTML, 10) && parseInt(bluePoints3.innerHTML, 10) > parseInt(bluePoints1.innerHTML, 10) && parseInt(bluePoints3.innerHTML, 10) > parseInt(orangePoints1.innerHTML, 10) && parseInt(bluePoints3.innerHTML, 10) > parseInt(orangePoints2.innerHTML, 10)  && parseInt(bluePoints3.innerHTML, 10) > parseInt(orangePoints3.innerHTML, 10)) {
      //console.log("B3")
      $("#bluePoints1").removeClass('blueAfterHighlights')
      $("#bluePoints1").addClass('text-light')
      
      $("#bluePoints3").addClass('blueAfterHighlights')
      $("#bluePoints3").removeClass('text-light')
      
      $("#bluePoints2").removeClass('blueAfterHighlights')
      $("#bluePoints2").addClass('text-light')
      
      $("#orangePoints1").removeClass('orangeAfterHighlights')
      $("#orangePoints1").addClass('text-light')
      
      $("#orangePoints2").removeClass('orangeAfterHighlights')
      $("#orangePoints2").addClass('text-light')
      
      $("#orangePoints3").removeClass('orangeAfterHighlights')
      $("#orangePoints3").addClass('text-light')
    }else if (parseInt(orangePoints1.innerHTML, 10) > parseInt(bluePoints2.innerHTML, 10) && parseInt(orangePoints1.innerHTML, 10) > parseInt(bluePoints3.innerHTML, 10) && parseInt(bluePoints1.innerHTML, 10) < parseInt(orangePoints1.innerHTML, 10) && parseInt(orangePoints1.innerHTML, 10) > parseInt(orangePoints2.innerHTML, 10)  && parseInt(orangePoints1.innerHTML, 10) > parseInt(orangePoints3.innerHTML, 10)) {
      //console.log("O1")
      $("#bluePoints1").removeClass('blueAfterHighlights')
      $("#bluePoints1").addClass('text-light')
      
      $("#bluePoints2").removeClass('blueAfterHighlights')
      $("#bluePoints2").addClass('text-light')
      
      $("#bluePoints3").removeClass('blueAfterHighlights')
      $("#bluePoints3").addClass('text-light')
      
      $("#orangePoints1").addClass('orangeAfterHighlights')
      $("#orangePoints1").removeClass('text-light')
      
      $("#orangePoints2").removeClass('orangeAfterHighlights')
      $("#orangePoints2").addClass('text-light')
      
      $("#orangePoints3").removeClass('orangeAfterHighlights')
      $("#orangePoints3").addClass('text-light')
    }else if (parseInt(orangePoints2.innerHTML, 10) > parseInt(bluePoints2.innerHTML, 10) && parseInt(orangePoints2.innerHTML, 10) > parseInt(bluePoints3.innerHTML, 10) && parseInt(bluePoints1.innerHTML, 10) < parseInt(orangePoints2.innerHTML, 10) && parseInt(orangePoints2.innerHTML, 10) > parseInt(orangePoints1.innerHTML, 10)  && parseInt(orangePoints2.innerHTML, 10) > parseInt(orangePoints3.innerHTML, 10)) {
      //console.log("O2")
      $("#bluePoints1").removeClass('blueAfterHighlights')
      $("#bluePoints1").addClass('text-light')
      
      $("#bluePoints2").removeClass('blueAfterHighlights')
      $("#bluePoints2").addClass('text-light')
      
      $("#bluePoints3").removeClass('blueAfterHighlights')
      $("#bluePoints3").addClass('text-light')
      
      $("#orangePoints2").addClass('orangeAfterHighlights')
      $("#orangePoints2").removeClass('text-light')
      
      $("#orangePoints1").removeClass('orangeAfterHighlights')
      $("#orangePoints1").addClass('text-light')
      
      $("#orangePoints3").removeClass('orangeAfterHighlights')
      $("#orangePoints3").addClass('text-light')
    }else if (parseInt(orangePoints3.innerHTML, 10) > parseInt(bluePoints2.innerHTML, 10) && parseInt(orangePoints3.innerHTML, 10) > parseInt(bluePoints3.innerHTML, 10) && parseInt(bluePoints1.innerHTML, 10) < parseInt(orangePoints3.innerHTML, 10) && parseInt(orangePoints3.innerHTML, 10) > parseInt(orangePoints2.innerHTML, 10)  && parseInt(orangePoints3.innerHTML, 10) > parseInt(orangePoints1.innerHTML, 10)) {
      $("#bluePoints1").removeClass('blueAfterHighlights')
      $("#bluePoints1").addClass('text-light')
      
      $("#bluePoints2").removeClass('blueAfterHighlights')
      $("#bluePoints2").addClass('text-light')
      
      $("#bluePoints3").removeClass('blueAfterHighlights')
      $("#bluePoints3").addClass('text-light')
      
      $("#orangePoints3").addClass('orangeAfterHighlights')
      $("#orangePoints3").removeClass('text-light')
      
      $("#orangePoints2").removeClass('orangeAfterHighlights')
      $("#orangePoints2").addClass('text-light')
      
      $("#orangePoints1").removeClass('orangeAfterHighlights')
      $("#orangePoints1").addClass('text-light')
    } else {
      $("#bluePoints1").removeClass('blueAfterHighlights')
      $("#bluePoints1").addClass('text-light')
      
      $("#bluePoints2").removeClass('blueAfterHighlights')
      $("#bluePoints2").addClass('text-light')
      
      $("#bluePoints3").removeClass('blueAfterHighlights')
      $("#bluePoints3").addClass('text-light')
      
      $("#orangePoints3").removeClass('orangeAfterHighlights')
      $("#orangePoints3").addClass('text-light')
      
      $("#orangePoints2").removeClass('orangeAfterHighlights')
      $("#orangePoints2").addClass('text-light')
      
      $("#orangePoints1").removeClass('orangeAfterHighlights')
      $("#orangePoints1").addClass('text-light')
    }
    
    
    //Goals
    if (parseInt(blueGoals1.innerHTML, 10) > parseInt(blueGoals2.innerHTML, 10) && parseInt(blueGoals1.innerHTML, 10) > parseInt(blueGoals3.innerHTML, 10) && parseInt(blueGoals1.innerHTML, 10) > parseInt(orangeGoals1.innerHTML, 10) && parseInt(blueGoals1.innerHTML, 10) > parseInt(orangeGoals2.innerHTML, 10)  && parseInt(blueGoals1.innerHTML, 10) > parseInt(orangeGoals3.innerHTML, 10))  {
    //console.log("B1")
      $("#blueGoals2").removeClass('blueAfterHighlights')
      $("#blueGoals2").addClass('text-light')
      
      $("#blueGoals1").removeClass('text-light')
      $("#blueGoals1").addClass('blueAfterHighlights')
      
      
      $("#blueGoals3").removeClass('blueAfterHighlights')
      $("#blueGoals3").addClass('text-light')
      
      $("#orangeGoals1").removeClass('orangeAfterHighlights')
      $("#orangeGoals1").addClass('text-light')
      
      $("#orangeGoals2").removeClass('orangeAfterHighlights')
      $("#orangeGoals2").addClass('text-light')
      
      $("#orangeGoals3").removeClass('orangeAfterHighlights')
      $("#orangeGoals3").addClass('text-light')
      
    }else if (parseInt(blueGoals2.innerHTML, 10) > parseInt(blueGoals1.innerHTML, 10) && parseInt(blueGoals2.innerHTML, 10) > parseInt(blueGoals3.innerHTML, 10) && parseInt(blueGoals2.innerHTML, 10) > parseInt(orangeGoals1.innerHTML, 10) && parseInt(blueGoals2.innerHTML, 10) > parseInt(orangeGoals2.innerHTML, 10)  && parseInt(blueGoals2.innerHTML, 10) > parseInt(orangeGoals3.innerHTML, 10)) {
      //console.log("B2")
      $("#blueGoals1").removeClass('blueAfterHighlights')
      $("#blueGoals1").addClass('text-light')
      
      $("#blueGoals2").addClass('blueAfterHighlights')
      $("#blueGoals2").removeClass('text-light')
      
      $("#blueGoals3").removeClass('blueAfterHighlights')
      $("#blueGoals3").addClass('text-light')
      
      $("#orangeGoals1").removeClass('orangeAfterHighlights')
      $("#orangeGoals1").addClass('text-light')
      
      $("#orangeGoals2").removeClass('orangeAfterHighlights')
      $("#orangeGoals2").addClass('text-light')
      
      $("#orangeGoals3").removeClass('orangeAfterHighlights')
      $("#orangeGoals3").addClass('text-light')
      
    }else if (parseInt(blueGoals3.innerHTML, 10) > parseInt(blueGoals2.innerHTML, 10) && parseInt(blueGoals3.innerHTML, 10) > parseInt(blueGoals1.innerHTML, 10) && parseInt(blueGoals3.innerHTML, 10) > parseInt(orangeGoals1.innerHTML, 10) && parseInt(blueGoals3.innerHTML, 10) > parseInt(orangeGoals2.innerHTML, 10)  && parseInt(blueGoals3.innerHTML, 10) > parseInt(orangeGoals3.innerHTML, 10)) {
      //console.log("B3")
      $("#blueGoals1").removeClass('blueAfterHighlights')
      $("#blueGoals1").addClass('text-light')
      
      $("#blueGoals3").addClass('blueAfterHighlights')
      $("#blueGoals3").removeClass('text-light')
      
      $("#blueGoals2").removeClass('blueAfterHighlights')
      $("#blueGoals2").addClass('text-light')
      
      $("#orangeGoals1").removeClass('orangeAfterHighlights')
      $("#orangeGoals1").addClass('text-light')
      
      $("#orangeGoals2").removeClass('orangeAfterHighlights')
      $("#orangeGoals2").addClass('text-light')
      
      $("#orangeGoals3").removeClass('orangeAfterHighlights')
      $("#orangeGoals3").addClass('text-light')
    }else if (parseInt(orangeGoals1.innerHTML, 10) > parseInt(blueGoals2.innerHTML, 10) && parseInt(orangeGoals1.innerHTML, 10) > parseInt(blueGoals3.innerHTML, 10) && parseInt(blueGoals1.innerHTML, 10) < parseInt(orangeGoals1.innerHTML, 10) && parseInt(orangeGoals1.innerHTML, 10) > parseInt(orangeGoals2.innerHTML, 10)  && parseInt(orangeGoals1.innerHTML, 10) > parseInt(orangeGoals3.innerHTML, 10)) {
      //console.log("O1")
      $("#blueGoals1").removeClass('blueAfterHighlights')
      $("#blueGoals1").addClass('text-light')
      
      $("#blueGoals2").removeClass('blueAfterHighlights')
      $("#blueGoals2").addClass('text-light')
      
      $("#blueGoals3").removeClass('blueAfterHighlights')
      $("#blueGoals3").addClass('text-light')
      
      $("#orangeGoals1").addClass('orangeAfterHighlights')
      $("#orangeGoals1").removeClass('text-light')
      
      $("#orangeGoals2").removeClass('orangeAfterHighlights')
      $("#orangeGoals2").addClass('text-light')
      
      $("#orangeGoals3").removeClass('orangeAfterHighlights')
      $("#orangeGoals3").addClass('text-light')
    }else if (parseInt(orangeGoals2.innerHTML, 10) > parseInt(blueGoals2.innerHTML, 10) && parseInt(orangeGoals2.innerHTML, 10) > parseInt(blueGoals3.innerHTML, 10) && parseInt(blueGoals1.innerHTML, 10) < parseInt(orangeGoals2.innerHTML, 10) && parseInt(orangeGoals2.innerHTML, 10) > parseInt(orangeGoals1.innerHTML, 10)  && parseInt(orangeGoals2.innerHTML, 10) > parseInt(orangeGoals3.innerHTML, 10)) {
      //console.log("O2")
      $("#blueGoals1").removeClass('blueAfterHighlights')
      $("#blueGoals1").addClass('text-light')
      
      $("#blueGoals2").removeClass('blueAfterHighlights')
      $("#blueGoals2").addClass('text-light')
      
      $("#blueGoals3").removeClass('blueAfterHighlights')
      $("#blueGoals3").addClass('text-light')
      
      $("#orangeGoals2").addClass('orangeAfterHighlights')
      $("#orangeGoals2").removeClass('text-light')
      
      $("#orangeGoals1").removeClass('orangeAfterHighlights')
      $("#orangeGoals1").addClass('text-light')
      
      $("#orangeGoals3").removeClass('orangeAfterHighlights')
      $("#orangeGoals3").addClass('text-light')
    }else if (parseInt(orangeGoals3.innerHTML, 10) > parseInt(blueGoals2.innerHTML, 10) && parseInt(orangeGoals3.innerHTML, 10) > parseInt(blueGoals3.innerHTML, 10) && parseInt(blueGoals1.innerHTML, 10) < parseInt(orangeGoals3.innerHTML, 10) && parseInt(orangeGoals3.innerHTML, 10) > parseInt(orangeGoals2.innerHTML, 10)  && parseInt(orangeGoals3.innerHTML, 10) > parseInt(orangeGoals1.innerHTML, 10)) {
      $("#blueGoals1").removeClass('blueAfterHighlights')
      $("#blueGoals1").addClass('text-light')
      
      $("#blueGoals2").removeClass('blueAfterHighlights')
      $("#blueGoals2").addClass('text-light')
      
      $("#blueGoals3").removeClass('blueAfterHighlights')
      $("#blueGoals3").addClass('text-light')
      
      $("#orangeGoals3").addClass('orangeAfterHighlights')
      $("#orangeGoals3").removeClass('text-light')
      
      $("#orangeGoals2").removeClass('orangeAfterHighlights')
      $("#orangeGoals2").addClass('text-light')
      
      $("#orangeGoals1").removeClass('orangeAfterHighlights')
      $("#orangeGoals1").addClass('text-light')
    } else {
      $("#blueGoals1").removeClass('blueAfterHighlights')
      $("#blueGoals1").addClass('text-light')
      
      $("#blueGoals2").removeClass('blueAfterHighlights')
      $("#blueGoals2").addClass('text-light')
      
      $("#blueGoals3").removeClass('blueAfterHighlights')
      $("#blueGoals3").addClass('text-light')
      
      $("#orangeGoals3").removeClass('orangeAfterHighlights')
      $("#orangeGoals3").addClass('text-light')
      
      $("#orangeGoals2").removeClass('orangeAfterHighlights')
      $("#orangeGoals2").addClass('text-light')
      
      $("#orangeGoals1").removeClass('orangeAfterHighlights')
      $("#orangeGoals1").addClass('text-light')
    }
    
    
    //Assists
    if (parseInt(blueAssists1.innerHTML, 10) > parseInt(blueAssists2.innerHTML, 10) && parseInt(blueAssists1.innerHTML, 10) > parseInt(blueAssists3.innerHTML, 10) && parseInt(blueAssists1.innerHTML, 10) > parseInt(orangeAssists1.innerHTML, 10) && parseInt(blueAssists1.innerHTML, 10) > parseInt(orangeAssists2.innerHTML, 10)  && parseInt(blueAssists1.innerHTML, 10) > parseInt(orangeAssists3.innerHTML, 10))  {
    //console.log("B1")
      $("#blueAssists2").removeClass('blueAfterHighlights')
      $("#blueAssists2").addClass('text-light')
      
      $("#blueAssists1").removeClass('text-light')
      $("#blueAssists1").addClass('blueAfterHighlights')
      
      
      $("#blueAssists3").removeClass('blueAfterHighlights')
      $("#blueAssists3").addClass('text-light')
      
      $("#orangeAssists1").removeClass('orangeAfterHighlights')
      $("#orangeAssists1").addClass('text-light')
      
      $("#orangeAssists2").removeClass('orangeAfterHighlights')
      $("#orangeAssists2").addClass('text-light')
      
      $("#orangeAssists3").removeClass('orangeAfterHighlights')
      $("#orangeAssists3").addClass('text-light')
      
    }else if (parseInt(blueAssists2.innerHTML, 10) > parseInt(blueAssists1.innerHTML, 10) && parseInt(blueAssists2.innerHTML, 10) > parseInt(blueAssists3.innerHTML, 10) && parseInt(blueAssists2.innerHTML, 10) > parseInt(orangeAssists1.innerHTML, 10) && parseInt(blueAssists2.innerHTML, 10) > parseInt(orangeAssists2.innerHTML, 10)  && parseInt(blueAssists2.innerHTML, 10) > parseInt(orangeAssists3.innerHTML, 10)) {
      //console.log("B2")
      $("#blueAssists1").removeClass('blueAfterHighlights')
      $("#blueAssists1").addClass('text-light')
      
      $("#blueAssists2").addClass('blueAfterHighlights')
      $("#blueAssists2").removeClass('text-light')
      
      $("#blueAssists3").removeClass('blueAfterHighlights')
      $("#blueAssists3").addClass('text-light')
      
      $("#orangeAssists1").removeClass('orangeAfterHighlights')
      $("#orangeAssists1").addClass('text-light')
      
      $("#orangeAssists2").removeClass('orangeAfterHighlights')
      $("#orangeAssists2").addClass('text-light')
      
      $("#orangeAssists3").removeClass('orangeAfterHighlights')
      $("#orangeAssists3").addClass('text-light')
      
    }else if (parseInt(blueAssists3.innerHTML, 10) > parseInt(blueAssists2.innerHTML, 10) && parseInt(blueAssists3.innerHTML, 10) > parseInt(blueAssists1.innerHTML, 10) && parseInt(blueAssists3.innerHTML, 10) > parseInt(orangeAssists1.innerHTML, 10) && parseInt(blueAssists3.innerHTML, 10) > parseInt(orangeAssists2.innerHTML, 10)  && parseInt(blueAssists3.innerHTML, 10) > parseInt(orangeAssists3.innerHTML, 10)) {
      //console.log("B3")
      $("#blueAssists1").removeClass('blueAfterHighlights')
      $("#blueAssists1").addClass('text-light')
      
      $("#blueAssists3").addClass('blueAfterHighlights')
      $("#blueAssists3").removeClass('text-light')
      
      $("#blueAssists2").removeClass('blueAfterHighlights')
      $("#blueAssists2").addClass('text-light')
      
      $("#orangeAssists1").removeClass('orangeAfterHighlights')
      $("#orangeAssists1").addClass('text-light')
      
      $("#orangeAssists2").removeClass('orangeAfterHighlights')
      $("#orangeAssists2").addClass('text-light')
      
      $("#orangeAssists3").removeClass('orangeAfterHighlights')
      $("#orangeAssists3").addClass('text-light')
    }else if (parseInt(orangeAssists1.innerHTML, 10) > parseInt(blueAssists2.innerHTML, 10) && parseInt(orangeAssists1.innerHTML, 10) > parseInt(blueAssists3.innerHTML, 10) && parseInt(blueAssists1.innerHTML, 10) < parseInt(orangeAssists1.innerHTML, 10) && parseInt(orangeAssists1.innerHTML, 10) > parseInt(orangeAssists2.innerHTML, 10)  && parseInt(orangeAssists1.innerHTML, 10) > parseInt(orangeAssists3.innerHTML, 10)) {
      //console.log("O1")
      $("#blueAssists1").removeClass('blueAfterHighlights')
      $("#blueAssists1").addClass('text-light')
      
      $("#blueAssists2").removeClass('blueAfterHighlights')
      $("#blueAssists2").addClass('text-light')
      
      $("#blueAssists3").removeClass('blueAfterHighlights')
      $("#blueAssists3").addClass('text-light')
      
      $("#orangeAssists1").addClass('orangeAfterHighlights')
      $("#orangeAssists1").removeClass('text-light')
      
      $("#orangeAssists2").removeClass('orangeAfterHighlights')
      $("#orangeAssists2").addClass('text-light')
      
      $("#orangeAssists3").removeClass('orangeAfterHighlights')
      $("#orangeAssists3").addClass('text-light')
    }else if (parseInt(orangeAssists2.innerHTML, 10) > parseInt(blueAssists2.innerHTML, 10) && parseInt(orangeAssists2.innerHTML, 10) > parseInt(blueAssists3.innerHTML, 10) && parseInt(blueAssists1.innerHTML, 10) < parseInt(orangeAssists2.innerHTML, 10) && parseInt(orangeAssists2.innerHTML, 10) > parseInt(orangeAssists1.innerHTML, 10)  && parseInt(orangeAssists2.innerHTML, 10) > parseInt(orangeAssists3.innerHTML, 10)) {
      //console.log("O2")
      $("#blueAssists1").removeClass('blueAfterHighlights')
      $("#blueAssists1").addClass('text-light')
      
      $("#blueAssists2").removeClass('blueAfterHighlights')
      $("#blueAssists2").addClass('text-light')
      
      $("#blueAssists3").removeClass('blueAfterHighlights')
      $("#blueAssists3").addClass('text-light')
      
      $("#orangeAssists2").addClass('orangeAfterHighlights')
      $("#orangeAssists2").removeClass('text-light')
      
      $("#orangeAssists1").removeClass('orangeAfterHighlights')
      $("#orangeAssists1").addClass('text-light')
      
      $("#orangeAssists3").removeClass('orangeAfterHighlights')
      $("#orangeAssists3").addClass('text-light')
    }else if (parseInt(orangeAssists3.innerHTML, 10) > parseInt(blueAssists2.innerHTML, 10) && parseInt(orangeAssists3.innerHTML, 10) > parseInt(blueAssists3.innerHTML, 10) && parseInt(blueAssists1.innerHTML, 10) < parseInt(orangeAssists3.innerHTML, 10) && parseInt(orangeAssists3.innerHTML, 10) > parseInt(orangeAssists2.innerHTML, 10)  && parseInt(orangeAssists3.innerHTML, 10) > parseInt(orangeAssists1.innerHTML, 10)) {
      $("#blueAssists1").removeClass('blueAfterHighlights')
      $("#blueAssists1").addClass('text-light')
      
      $("#blueAssists2").removeClass('blueAfterHighlights')
      $("#blueAssists2").addClass('text-light')
      
      $("#blueAssists3").removeClass('blueAfterHighlights')
      $("#blueAssists3").addClass('text-light')
      
      $("#orangeAssists3").addClass('orangeAfterHighlights')
      $("#orangeAssists3").removeClass('text-light')
      
      $("#orangeAssists2").removeClass('orangeAfterHighlights')
      $("#orangeAssists2").addClass('text-light')
      
      $("#orangeAssists1").removeClass('orangeAfterHighlights')
      $("#orangeAssists1").addClass('text-light')
    } else {
      $("#blueAssists1").removeClass('blueAfterHighlights')
      $("#blueAssists1").addClass('text-light')
      
      $("#blueAssists2").removeClass('blueAfterHighlights')
      $("#blueAssists2").addClass('text-light')
      
      $("#blueAssists3").removeClass('blueAfterHighlights')
      $("#blueAssists3").addClass('text-light')
      
      $("#orangeAssists3").removeClass('orangeAfterHighlights')
      $("#orangeAssists3").addClass('text-light')
      
      $("#orangeAssists2").removeClass('orangeAfterHighlights')
      $("#orangeAssists2").addClass('text-light')
      
      $("#orangeAssists1").removeClass('orangeAfterHighlights')
      $("#orangeAssists1").addClass('text-light')
    }
    
    
    //Shots
    if (parseInt(blueShots1.innerHTML, 10) > parseInt(blueShots2.innerHTML, 10) && parseInt(blueShots1.innerHTML, 10) > parseInt(blueShots3.innerHTML, 10) && parseInt(blueShots1.innerHTML, 10) > parseInt(orangeShots1.innerHTML, 10) && parseInt(blueShots1.innerHTML, 10) > parseInt(orangeShots2.innerHTML, 10)  && parseInt(blueShots1.innerHTML, 10) > parseInt(orangeShots3.innerHTML, 10))  {
    //console.log("B1")
      $("#blueShots2").removeClass('blueAfterHighlights')
      $("#blueShots2").addClass('text-light')
      
      $("#blueShots1").removeClass('text-light')
      $("#blueShots1").addClass('blueAfterHighlights')
      
      
      $("#blueShots3").removeClass('blueAfterHighlights')
      $("#blueShots3").addClass('text-light')
      
      $("#orangeShots1").removeClass('orangeAfterHighlights')
      $("#orangeShots1").addClass('text-light')
      
      $("#orangeShots2").removeClass('orangeAfterHighlights')
      $("#orangeShots2").addClass('text-light')
      
      $("#orangeShots3").removeClass('orangeAfterHighlights')
      $("#orangeShots3").addClass('text-light')
      
    }else if (parseInt(blueShots2.innerHTML, 10) > parseInt(blueShots1.innerHTML, 10) && parseInt(blueShots2.innerHTML, 10) > parseInt(blueShots3.innerHTML, 10) && parseInt(blueShots2.innerHTML, 10) > parseInt(orangeShots1.innerHTML, 10) && parseInt(blueShots2.innerHTML, 10) > parseInt(orangeShots2.innerHTML, 10)  && parseInt(blueShots2.innerHTML, 10) > parseInt(orangeShots3.innerHTML, 10)) {
      //console.log("B2")
      $("#blueShots1").removeClass('blueAfterHighlights')
      $("#blueShots1").addClass('text-light')
      
      $("#blueShots2").addClass('blueAfterHighlights')
      $("#blueShots2").removeClass('text-light')
      
      $("#blueShots3").removeClass('blueAfterHighlights')
      $("#blueShots3").addClass('text-light')
      
      $("#orangeShots1").removeClass('orangeAfterHighlights')
      $("#orangeShots1").addClass('text-light')
      
      $("#orangeShots2").removeClass('orangeAfterHighlights')
      $("#orangeShots2").addClass('text-light')
      
      $("#orangeShots3").removeClass('orangeAfterHighlights')
      $("#orangeShots3").addClass('text-light')
      
    }else if (parseInt(blueShots3.innerHTML, 10) > parseInt(blueShots2.innerHTML, 10) && parseInt(blueShots3.innerHTML, 10) > parseInt(blueShots1.innerHTML, 10) && parseInt(blueShots3.innerHTML, 10) > parseInt(orangeShots1.innerHTML, 10) && parseInt(blueShots3.innerHTML, 10) > parseInt(orangeShots2.innerHTML, 10)  && parseInt(blueShots3.innerHTML, 10) > parseInt(orangeShots3.innerHTML, 10)) {
      //console.log("B3")
      $("#blueShots1").removeClass('blueAfterHighlights')
      $("#blueShots1").addClass('text-light')
      
      $("#blueShots3").addClass('blueAfterHighlights')
      $("#blueShots3").removeClass('text-light')
      
      $("#blueShots2").removeClass('blueAfterHighlights')
      $("#blueShots2").addClass('text-light')
      
      $("#orangeShots1").removeClass('orangeAfterHighlights')
      $("#orangeShots1").addClass('text-light')
      
      $("#orangeShots2").removeClass('orangeAfterHighlights')
      $("#orangeShots2").addClass('text-light')
      
      $("#orangeShots3").removeClass('orangeAfterHighlights')
      $("#orangeShots3").addClass('text-light')
    }else if (parseInt(orangeShots1.innerHTML, 10) > parseInt(blueShots2.innerHTML, 10) && parseInt(orangeShots1.innerHTML, 10) > parseInt(blueShots3.innerHTML, 10) && parseInt(blueShots1.innerHTML, 10) < parseInt(orangeShots1.innerHTML, 10) && parseInt(orangeShots1.innerHTML, 10) > parseInt(orangeShots2.innerHTML, 10)  && parseInt(orangeShots1.innerHTML, 10) > parseInt(orangeShots3.innerHTML, 10)) {
      //console.log("O1")
      $("#blueShots1").removeClass('blueAfterHighlights')
      $("#blueShots1").addClass('text-light')
      
      $("#blueShots2").removeClass('blueAfterHighlights')
      $("#blueShots2").addClass('text-light')
      
      $("#blueShots3").removeClass('blueAfterHighlights')
      $("#blueShots3").addClass('text-light')
      
      $("#orangeShots1").addClass('orangeAfterHighlights')
      $("#orangeShots1").removeClass('text-light')
      
      $("#orangeShots2").removeClass('orangeAfterHighlights')
      $("#orangeShots2").addClass('text-light')
      
      $("#orangeShots3").removeClass('orangeAfterHighlights')
      $("#orangeShots3").addClass('text-light')
    }else if (parseInt(orangeShots2.innerHTML, 10) > parseInt(blueShots2.innerHTML, 10) && parseInt(orangeShots2.innerHTML, 10) > parseInt(blueShots3.innerHTML, 10) && parseInt(blueShots1.innerHTML, 10) < parseInt(orangeShots2.innerHTML, 10) && parseInt(orangeShots2.innerHTML, 10) > parseInt(orangeShots1.innerHTML, 10)  && parseInt(orangeShots2.innerHTML, 10) > parseInt(orangeShots3.innerHTML, 10)) {
      //console.log("O2")
      $("#blueShots1").removeClass('blueAfterHighlights')
      $("#blueShots1").addClass('text-light')
      
      $("#blueShots2").removeClass('blueAfterHighlights')
      $("#blueShots2").addClass('text-light')
      
      $("#blueShots3").removeClass('blueAfterHighlights')
      $("#blueShots3").addClass('text-light')
      
      $("#orangeShots2").addClass('orangeAfterHighlights')
      $("#orangeShots2").removeClass('text-light')
      
      $("#orangeShots1").removeClass('orangeAfterHighlights')
      $("#orangeShots1").addClass('text-light')
      
      $("#orangeShots3").removeClass('orangeAfterHighlights')
      $("#orangeShots3").addClass('text-light')
    }else if (parseInt(orangeShots3.innerHTML, 10) > parseInt(blueShots2.innerHTML, 10) && parseInt(orangeShots3.innerHTML, 10) > parseInt(blueShots3.innerHTML, 10) && parseInt(blueShots1.innerHTML, 10) < parseInt(orangeShots3.innerHTML, 10) && parseInt(orangeShots3.innerHTML, 10) > parseInt(orangeShots2.innerHTML, 10)  && parseInt(orangeShots3.innerHTML, 10) > parseInt(orangeShots1.innerHTML, 10)) {
      $("#blueShots1").removeClass('blueAfterHighlights')
      $("#blueShots1").addClass('text-light')
      
      $("#blueShots2").removeClass('blueAfterHighlights')
      $("#blueShots2").addClass('text-light')
      
      $("#blueShots3").removeClass('blueAfterHighlights')
      $("#blueShots3").addClass('text-light')
      
      $("#orangeShots3").addClass('orangeAfterHighlights')
      $("#orangeShots3").removeClass('text-light')
      
      $("#orangeShots2").removeClass('orangeAfterHighlights')
      $("#orangeShots2").addClass('text-light')
      
      $("#orangeShots1").removeClass('orangeAfterHighlights')
      $("#orangeShots1").addClass('text-light')
    } else {
      $("#blueShots1").removeClass('blueAfterHighlights')
      $("#blueShots1").addClass('text-light')
      
      $("#blueShots2").removeClass('blueAfterHighlights')
      $("#blueShots2").addClass('text-light')
      
      $("#blueShots3").removeClass('blueAfterHighlights')
      $("#blueShots3").addClass('text-light')
      
      $("#orangeShots3").removeClass('orangeAfterHighlights')
      $("#orangeShots3").addClass('text-light')
      
      $("#orangeShots2").removeClass('orangeAfterHighlights')
      $("#orangeShots2").addClass('text-light')
      
      $("#orangeShots1").removeClass('orangeAfterHighlights')
      $("#orangeShots1").addClass('text-light')
    }
    
    
    //Saves
    if (parseInt(blueSaves1.innerHTML, 10) > parseInt(blueSaves2.innerHTML, 10) && parseInt(blueSaves1.innerHTML, 10) > parseInt(blueSaves3.innerHTML, 10) && parseInt(blueSaves1.innerHTML, 10) > parseInt(orangeSaves1.innerHTML, 10) && parseInt(blueSaves1.innerHTML, 10) > parseInt(orangeSaves2.innerHTML, 10)  && parseInt(blueSaves1.innerHTML, 10) > parseInt(orangeSaves3.innerHTML, 10))  {
    //console.log("B1")
      $("#blueSaves2").removeClass('blueAfterHighlights')
      $("#blueSaves2").addClass('text-light')
      
      $("#blueSaves1").removeClass('text-light')
      $("#blueSaves1").addClass('blueAfterHighlights')
      
      
      $("#blueSaves3").removeClass('blueAfterHighlights')
      $("#blueSaves3").addClass('text-light')
      
      $("#orangeSaves1").removeClass('orangeAfterHighlights')
      $("#orangeSaves1").addClass('text-light')
      
      $("#orangeSaves2").removeClass('orangeAfterHighlights')
      $("#orangeSaves2").addClass('text-light')
      
      $("#orangeSaves3").removeClass('orangeAfterHighlights')
      $("#orangeSaves3").addClass('text-light')
      
    }else if (parseInt(blueSaves2.innerHTML, 10) > parseInt(blueSaves1.innerHTML, 10) && parseInt(blueSaves2.innerHTML, 10) > parseInt(blueSaves3.innerHTML, 10) && parseInt(blueSaves2.innerHTML, 10) > parseInt(orangeSaves1.innerHTML, 10) && parseInt(blueSaves2.innerHTML, 10) > parseInt(orangeSaves2.innerHTML, 10)  && parseInt(blueSaves2.innerHTML, 10) > parseInt(orangeSaves3.innerHTML, 10)) {
      //console.log("B2")
      $("#blueSaves1").removeClass('blueAfterHighlights')
      $("#blueSaves1").addClass('text-light')
      
      $("#blueSaves2").addClass('blueAfterHighlights')
      $("#blueSaves2").removeClass('text-light')
      
      $("#blueSaves3").removeClass('blueAfterHighlights')
      $("#blueSaves3").addClass('text-light')
      
      $("#orangeSaves1").removeClass('orangeAfterHighlights')
      $("#orangeSaves1").addClass('text-light')
      
      $("#orangeSaves2").removeClass('orangeAfterHighlights')
      $("#orangeSaves2").addClass('text-light')
      
      $("#orangeSaves3").removeClass('orangeAfterHighlights')
      $("#orangeSaves3").addClass('text-light')
      
    }else if (parseInt(blueSaves3.innerHTML, 10) > parseInt(blueSaves2.innerHTML, 10) && parseInt(blueSaves3.innerHTML, 10) > parseInt(blueSaves1.innerHTML, 10) && parseInt(blueSaves3.innerHTML, 10) > parseInt(orangeSaves1.innerHTML, 10) && parseInt(blueSaves3.innerHTML, 10) > parseInt(orangeSaves2.innerHTML, 10)  && parseInt(blueSaves3.innerHTML, 10) > parseInt(orangeSaves3.innerHTML, 10)) {
      //console.log("B3")
      $("#blueSaves1").removeClass('blueAfterHighlights')
      $("#blueSaves1").addClass('text-light')
      
      $("#blueSaves3").addClass('blueAfterHighlights')
      $("#blueSaves3").removeClass('text-light')
      
      $("#blueSaves2").removeClass('blueAfterHighlights')
      $("#blueSaves2").addClass('text-light')
      
      $("#orangeSaves1").removeClass('orangeAfterHighlights')
      $("#orangeSaves1").addClass('text-light')
      
      $("#orangeSaves2").removeClass('orangeAfterHighlights')
      $("#orangeSaves2").addClass('text-light')
      
      $("#orangeSaves3").removeClass('orangeAfterHighlights')
      $("#orangeSaves3").addClass('text-light')
    }else if (parseInt(orangeSaves1.innerHTML, 10) > parseInt(blueSaves2.innerHTML, 10) && parseInt(orangeSaves1.innerHTML, 10) > parseInt(blueSaves3.innerHTML, 10) && parseInt(blueSaves1.innerHTML, 10) < parseInt(orangeSaves1.innerHTML, 10) && parseInt(orangeSaves1.innerHTML, 10) > parseInt(orangeSaves2.innerHTML, 10)  && parseInt(orangeSaves1.innerHTML, 10) > parseInt(orangeSaves3.innerHTML, 10)) {
      //console.log("O1")
      $("#blueSaves1").removeClass('blueAfterHighlights')
      $("#blueSaves1").addClass('text-light')
      
      $("#blueSaves2").removeClass('blueAfterHighlights')
      $("#blueSaves2").addClass('text-light')
      
      $("#blueSaves3").removeClass('blueAfterHighlights')
      $("#blueSaves3").addClass('text-light')
      
      $("#orangeSaves1").addClass('orangeAfterHighlights')
      $("#orangeSaves1").removeClass('text-light')
      
      $("#orangeSaves2").removeClass('orangeAfterHighlights')
      $("#orangeSaves2").addClass('text-light')
      
      $("#orangeSaves3").removeClass('orangeAfterHighlights')
      $("#orangeSaves3").addClass('text-light')
    }else if (parseInt(orangeSaves2.innerHTML, 10) > parseInt(blueSaves2.innerHTML, 10) && parseInt(orangeSaves2.innerHTML, 10) > parseInt(blueSaves3.innerHTML, 10) && parseInt(blueSaves1.innerHTML, 10) < parseInt(orangeSaves2.innerHTML, 10) && parseInt(orangeSaves2.innerHTML, 10) > parseInt(orangeSaves1.innerHTML, 10)  && parseInt(orangeSaves2.innerHTML, 10) > parseInt(orangeSaves3.innerHTML, 10)) {
      //console.log("O2")
      $("#blueSaves1").removeClass('blueAfterHighlights')
      $("#blueSaves1").addClass('text-light')
      
      $("#blueSaves2").removeClass('blueAfterHighlights')
      $("#blueSaves2").addClass('text-light')
      
      $("#blueSaves3").removeClass('blueAfterHighlights')
      $("#blueSaves3").addClass('text-light')
      
      $("#orangeSaves2").addClass('orangeAfterHighlights')
      $("#orangeSaves2").removeClass('text-light')
      
      $("#orangeSaves1").removeClass('orangeAfterHighlights')
      $("#orangeSaves1").addClass('text-light')
      
      $("#orangeSaves3").removeClass('orangeAfterHighlights')
      $("#orangeSaves3").addClass('text-light')
    }else if (parseInt(orangeSaves3.innerHTML, 10) > parseInt(blueSaves2.innerHTML, 10) && parseInt(orangeSaves3.innerHTML, 10) > parseInt(blueSaves3.innerHTML, 10) && parseInt(blueSaves1.innerHTML, 10) < parseInt(orangeSaves3.innerHTML, 10) && parseInt(orangeSaves3.innerHTML, 10) > parseInt(orangeSaves2.innerHTML, 10)  && parseInt(orangeSaves3.innerHTML, 10) > parseInt(orangeSaves1.innerHTML, 10)) {
      $("#blueSaves1").removeClass('blueAfterHighlights')
      $("#blueSaves1").addClass('text-light')
      
      $("#blueSaves2").removeClass('blueAfterHighlights')
      $("#blueSaves2").addClass('text-light')
      
      $("#blueSaves3").removeClass('blueAfterHighlights')
      $("#blueSaves3").addClass('text-light')
      
      $("#orangeSaves3").addClass('orangeAfterHighlights')
      $("#orangeSaves3").removeClass('text-light')
      
      $("#orangeSaves2").removeClass('orangeAfterHighlights')
      $("#orangeSaves2").addClass('text-light')
      
      $("#orangeSaves1").removeClass('orangeAfterHighlights')
      $("#orangeSaves1").addClass('text-light')
    } else {
      $("#blueSaves1").removeClass('blueAfterHighlights')
      $("#blueSaves1").addClass('text-light')
      
      $("#blueSaves2").removeClass('blueAfterHighlights')
      $("#blueSaves2").addClass('text-light')
      
      $("#blueSaves3").removeClass('blueAfterHighlights')
      $("#blueSaves3").addClass('text-light')
      
      $("#orangeSaves3").removeClass('orangeAfterHighlights')
      $("#orangeSaves3").addClass('text-light')
      
      $("#orangeSaves2").removeClass('orangeAfterHighlights')
      $("#orangeSaves2").addClass('text-light')
      
      $("#orangeSaves1").removeClass('orangeAfterHighlights')
      $("#orangeSaves1").addClass('text-light')
    }
  }