   

    const ws = new WebSocket('ws://localhost:49122');

   var BlueTeamWins = []
   var OrangeTeamWins = []
   var blueData1 = []
   var blueData2 = []
   var blueData3 = []
   var orangeData1 = []
   var orangeData2 = []
   var orangeData3 = []
   var mvp = []
    var team = []
    var goalAssist = []
    function orangeWins() {
      var OW = localStorage.getItem("OrangeWins")
      $('#orangeSeries').text(OW);
      if (OW === '0'){
        $('#orange1').addClass('invisible');
        $('#orange2').addClass('invisible');
        $('#orange3').addClass('invisible');
        $('#orange4').addClass('invisible');
      }else if (OW === '1') {
        $('#orange1').removeClass('invisible');
        $('#orange2').addClass('invisible');
        $('#orange3').addClass('invisible');
        $('#orange4').addClass('invisible');
      }else if (OW === '2') {
        $('#orange1').removeClass('invisible');
        $('#orange2').removeClass('invisible');
        $('#orange3').addClass('invisible');
        $('#orange4').addClass('invisible');
      }else if (OW === '3') {
        $('#orange1').removeClass('invisible');
        $('#orange2').removeClass('invisible');
        $('#orange3').removeClass('invisible');
        $('#orange4').addClass('invisible');
      }else if (OW === '4') {
        $('#orange1').removeClass('invisible');
        $('#orange2').removeClass('invisible');
        $('#orange3').removeClass('invisible');
        $('#orange4').removeClass('invisible'); 
      }
    }

    function blueWins() {
      var BW = localStorage.getItem("BlueWins")
      $('#blueSeries').text(BW);
      if (BW === '0'){
        $('#blue1').addClass('invisible');
        $('#blue2').addClass('invisible');
        $('#blue3').addClass('invisible');
        $('#blue4').addClass('invisible');
      }else if (BW === '1') {
        $('#blue1').removeClass('invisible');
        $('#blue2').addClass('invisible');
        $('#blue3').addClass('invisible');
        $('#blue4').addClass('invisible');
      }else if (BW === '2') {
        $('#blue1').removeClass('invisible');
        $('#blue2').removeClass('invisible');
        $('#blue3').addClass('invisible');
        $('#blue4').addClass('invisible');
      }else if (BW === '3') {
        $('#blue1').removeClass('invisible');
        $('#blue2').removeClass('invisible');
        $('#blue3').removeClass('invisible');
        $('#blue4').addClass('invisible');
      }else if (BW === '4') {
        $('#blue1').removeClass('invisible');
        $('#blue2').removeClass('invisible');
        $('#blue3').removeClass('invisible');
        $('#blue4').removeClass('invisible');
      }
    }

    function seriesback() {
      var SB = localStorage.getItem("series")
      if (SB === '4GS'){
        $('#TierOvelay1').removeClass('invisible');
        $('#bo5').addClass('invisible');
        $('#bo3').addClass('invisible');
        
      }else if (SB === 'BO5') {
        $('#TierOvelay1').addClass('invisible');
        $('#bo5').removeClass('invisible');
        $('#bo3').addClass('invisible');
      }else if (SB === 'BO3') {
        $('#TierOvelay1').addClass('invisible');
        $('#bo5').addClass('invisible');
        $('#bo3').removeClass('invisible');
      }else if (SB === 'BO7') {
        $('#TierOvelay1').removeClass('invisible');
        $('#bo5').addClass('invisible');
        $('#bo3').addClass('invisible');
      }
    }

    var blueN = []
    var blueF = []
    function blueTeamName() {
      blueN = localStorage.getItem("BlueTeam")
      blueF = localStorage.getItem("BlueFran")
      $('#blueName').text(blueN)
      $('#blueLogo').src = "assets/logos/Blue Logos/" + blueF + ".png"
    }


    var orangeN = []
    var orangeF = []
    function orangeTeamName() {
      orangeN = localStorage.getItem("OrangeTeam")
      orangeF = localStorage.getItem("OrangeTeam")
      console.log(orangeN)
      $('#orangeName').text(orangeN)
      $('#orangeLogo').src = "assets/logos/Orange Logos/" + orangeF + ".png"
    }

    function logocolors() {
      var blueDataScore = blueData1[0].score + blueData2[0].score + blueData3[0].score 
      var orangeDataScore = orangeData1[0].score + orangeData2[0].score + orangeData3[0].score
      var blueDataGoals = blueData1[0].goals + blueData2[0].goals + blueData3[0].goals 
      var orangeDataGoals = orangeData1[0].goals + orangeData2[0].goals + orangeData3[0].goals
      var blueDataAssists = blueData1[0].assists + blueData2[0].assists + blueData3[0].assists 
      var orangeDataAssists = orangeData1[0].assists + orangeData2[0].assists + orangeData3[0].assists
      var blueDataShots = blueData1[0].shots + blueData2[0].shots + blueData3[0].shots 
      var orangeDataShots = orangeData1[0].shots + orangeData2[0].shots + orangeData3[0].shots
      var blueDataSaves = blueData1[0].saves + blueData2[0].saves + blueData3[0].saves 
      var orangeDataSaves = orangeData1[0].saves + orangeData2[0].saves + orangeData3[0].saves
    
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

    function orangeResetAll() {

      //$("div[id^='orange-player-']").text('')
      $('#orange-team-name').text('')
      $("#orange-player-1, #orange-player-2, #orange-player-1").addClass('d-none')
      $('#orange-player-1-p-bar, #orange-player-2-p-bar, #orange-player-3-p-bar').width('0%')
    }

    function blueResetAll() {
      //$("div[id^='blue-player-']").text('')
      $('#blue-team-name').text('')
      $("#blue-player-1, #blue-player-2, #blue-player-1").addClass('d-none')
      
      $('#blue-player-1-p-bar, #blue-player-2-p-bar, #blue-player-3-p-bar').width('0%')
    }


    function xMath(x) {
      var xCoord = (190 / x)
      return xCoord;
    }

    function yMath(y) {
      var yCoord = (150 / y)
      return yCoord;
    }

    var dataSet = [
              [0, 0],
            ];


    var w = 380,
      h = 300;

    // calculate max/min for x and y here if necessary

    var xScale = d3.scale.linear()
      .domain([-5140, 4074])
      .range([0, w]);

    var yScale = d3.scale.linear()
      .domain([5140, -4074])
      .range([0, h]);

    var svg = d3.select("#mapy")
      .append("svg")
      .attr("width", w + 80) //was + 100
      .attr("height", h + 65) //was + 100
      .append('svg:g')
      .attr('transform', 'translate(15,15)');



    svg.selectAll("circle")
      .data(dataSet)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[0]);
      })
      .attr("cy", function (d) {
        return yScale(d[1]);
      })
      .attr("r", 4);

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickSize(1);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .tickSize(1);


    ws.onopen = () => {
      //  ws.send('Message From Client')
    }

    ws.onerror = (error) => {
      console.log(`WebSocket error: ${error}`)
    }

    ws.onmessage = (e) => {

      var jEvent = JSON.parse(event.data);


      console.log(jEvent)


      if (jEvent.event == "game:update_state") {
        //console.log(jEvent.data)
        //gonna be used in a few spots
        var teamData = jEvent.data.game.teams

        //console.log(jEvent.data.game.hasWinner)
        if (jEvent.data.game.hasWinner == true) { 
          $('#main-ui').addClass('invisible');
          $('#scoreboard').addClass('invisible');
          $('#scoreboard').removeClass('open');
          //$('#scoreboard').removeClass('open')
          //console.log(jEvent.data.game.isReplay)
          $('#blue-active').addClass('d-none');
          $('#orange-active').addClass('d-none');
          $('#TierOverlay').addClass('d-none');
          $('#TierOverlay2').addClass('d-none');
          $('#TierOverlay').removeClass('open1');
          $('#TierOverlay2').removeClass('open1');
          clearTimeout(timer);
         // winner();
              $('#orangeName1').text(orangeData1.name)
              $('#orangeGoals1').text(orangeData1.goals)
              $('#orangeShots1').text(orangeData1.shots)
              $('#orangeSaves1').text(orangeData1.saves)
              $('#orangeAssists1').text(orangeData1.assists)
              $('#orangePoints1').text(orangeData1.score)
              $('#orangeName2').text(orangeData2.name)
              $('#orangeGoals2').text(orangeData2.goals)
              $('#orangeShots2').text(orangeData2.shots)
              $('#orangeSaves2').text(orangeData2.saves)
              $('#orangeAssists2').text(orangeData2.assists)
              $('#orangePoints2').text(orangeData2.score)
              $('#orangeName3').text(orangeData3.name)
              $('#orangeGoals3').text(orangeData3.goals)
              $('#orangeShots3').text(orangeData3.shots)
              $('#orangeSaves3').text(orangeData3.saves)
              $('#orangeAssists3').text(orangeData3.assists)
              $('#orangePoints3').text(orangeData3.score)
              $('#blueName1').text(blueData1.name)
              $('#blueGoals1').text(blueData1.goals)
              $('#blueShots1').text(blueData1.shots)
              $('#blueSaves1').text(blueData1.saves)
              $('#blueAssists1').text(blueData1.assists)
              $('#bluePoints1').text(blueData1.score)
              $('#blueName2').text(blueData2.name)
              $('#blueGoals2').text(blueData2.goals)
              $('#blueShots2').text(blueData2.shots)
              $('#blueSaves2').text(blueData2.saves)
              $('#blueAssists2').text(blueData2.assists)
              $('#bluePoints2').text(blueData2.score)
              $('#blueName3').text(blueData3.name)
              $('#blueGoals3').text(blueData3.goals)
              $('#blueShots3').text(blueData3.shots)
              $('#blueSaves3').text(blueData3.saves)
              $('#blueAssists3').text(blueData3.assists)
              $('#bluePoints3').text(blueData3.score)
          
          
        } else if (jEvent.data.game.isReplay == true) { 
          $('#main-ui').addClass('invisible');
          $('#scoreboard').addClass('invisible');
          //$('#scoreboard').removeClass('open')
          //console.log(jEvent.data.game.isReplay)
          $('#blue-active').addClass('d-none');
          $('#orange-active').addClass('d-none');
          $('#TierOverlay').addClass('d-none');
          $('#TierOverlay2').addClass('d-none');
          $('#TierOverlay').removeClass('open1');
          $('#TierOverlay2').removeClass('open1');
          clearTimeout(timer);  
        } else {
          
          //show the ui
          $('#scoreboard').removeClass('invisible');
         // $('#TierOverlay').removeClass('d-none');
         // $('#TierOverlay2').removeClass('d-none');
          //$('#scoreboard').toggleClass('open');
          $('#main-ui').removeClass('invisible');
          $('#wrapper').removeClass('d-none');
          $('#TierOverlay').removeClass('d-none');
         // logocolors()
          
          
         // $('#TierOverlay').toggleClass('open1');
          //time
          var gameTime = jEvent.data.game.time
          var round = Math.round(gameTime)

          function myTime(time) {

            var min = ~~((time % 3600) / 60);
            var sec = time % 60;
            var sec_min = "";
            sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
            sec_min += "" + sec;
            return sec_min;
          }
          $('#timer').text(myTime(round))

          //team names
          var blueName = _.get(teamData, [0, 'name'])
          var orangeName = _.get(teamData, [1, 'name'])

          if (blueName.length > 1 && orangeName.length > 1) {
            //$('#blueName').text(blueN)
            $('#blue-team-name').text(blueName)
            $('#blue-team-name').removeClass('d-none')
            $('#orange-team-name').text(orangeName)
            $('#orange-team-name').removeClass('d-none')
          }


          //score
          var blueScore = _.get(teamData, [0, 'score'])
          var orangeScore = _.get(teamData, [1, 'score'])

          $('#blue-score').text(blueScore)
          $('#blueScore').text(blueScore)
          $('#orange-score').text(orangeScore)
          $('#orangeScore').text(orangeScore)

          //overtime logic
          if (jEvent.data.game.isOT == true) {
            $('#overtime-text').removeClass('d-none')
          } else {
            $('#overtime-text').addClass('d-none')
          }


          //active player logic
          var activeTarget = jEvent.data.game.target;
          var playerList = jEvent.data.players;
          var activePlayerData = _.get(playerList, activeTarget);


          if (activeTarget.length > 1) {

          
            if (activePlayerData.team == 0) {
              $('#blue-active').removeClass('d-none');
              $('#orange-active').addClass('d-none');
              $('#blue-team-active').removeClass('d-none');
              $('#ActiveBlueStats').removeClass('d-none');
              $('#orange-team-active').addClass('d-none');
              
              $('#activeBox').addClass('open1');
              

              $('#blue-active-name').text(activePlayerData.name)
              $('#blue-active-speed').text(activePlayerData.speed)
              $('#blue-active-goals').text(activePlayerData.goals)
              $('#blue-active-demos').text(activePlayerData.demos)
              $('#blue-active-shots').text(activePlayerData.shots)
              $('#blue-active-saves').text(activePlayerData.saves)
              $('#blue-active-assists').text(activePlayerData.assists)
              $('#blue-active-touches').text(activePlayerData.touches)
              $('#blue-active-score').text(activePlayerData.score)
              $('#blue-active-boost').text(activePlayerData.boost)
              $('#blue-active-p-bar').width(activePlayerData.boost + "%")


            } else if (activePlayerData.team == 1) {
              $('#orange-team-active').removeClass('d-none');
              $('#blue-team-active').addClass('d-none');
              $('#blue-active').addClass('d-none');
              $('#orange-active').removeClass('d-none');
              
              $('#activeBox').addClass('open1');
              
              

              $('#orange-active-name').text(activePlayerData.name)
              $('#orange-active-speed').text(activePlayerData.speed)
              $('#orange-active-goals').text(activePlayerData.goals)
              $('#orange-active-demos').text(activePlayerData.demos)
              $('#orange-active-shots').text(activePlayerData.shots)
              $('#orange-active-saves').text(activePlayerData.saves)
              $('#orange-active-assists').text(activePlayerData.assists)
              $('#orange-active-touches').text(activePlayerData.touches)
              $('#orange-active-score').text(activePlayerData.score)
              $('#orange-active-boost').text(activePlayerData.boost)
              $('#orange-active-p-bar').width(activePlayerData.boost + "%")

            } else {
              console.log('oopsie')
            }

          } else {
            $('#blue-team-active').addClass('d-none');
            $('#orange-team-active').addClass('d-none');
            $('#blue-active').addClass('d-none');
            $('#orange-active').addClass('d-none');
            $('#activeBox').removeClass('open1');
            
            
          }

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
            blueData1 = []
            blueData1.push(blue1)
console.log(blueData1)
            blueData2 = []
            blueData2.push(blue2)
          
            blueData3 = []
            blueData3.push(blue3)
            
            if (blue1 != undefined && blue2 != undefined && blue3 != undefined) {
              
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



              $("div[id^='blue-player-']").removeClass('d-none')
              
              $('#blue-player-3').removeClass('d-none')
              $('#blue-player-3-name').text(blue3.name)
              $('#blue-player-3-goals').text(blue3.goals)
              $('#blue-player-3-shots').text(blue3.shots)
              $('#blue-player-3-saves').text(blue3.saves)
              $('#blue-player-3-assists').text(blue3.assists)
              $('#blue-player-3-boost').text(blue3.boost)
              $('#blue-player-3-p-bar').width(blue3.boost + "%")
              
              $('#blue-player-2').removeClass('d-none')
              $('#blue-player-2-name').text(blue2.name)
              $('#blue-player-2-goals').text(blue2.goals)
              $('#blue-player-2-shots').text(blue2.shots)
              $('#blue-player-2-saves').text(blue2.saves)
              $('#blue-player-2-assists').text(blue2.assists)
              $('#blue-player-2-boost').text(blue2.boost)
              $('#blue-player-2-p-bar').width(blue2.boost + "%")

              //remove invis for p1 and do other shit
              $('#blue-player-1').removeClass('d-none')
              $('#blue-player-1-name').text(blue1.name)
              $('#blue-player-1-goals').text(blue1.goals)
              $('#blue-player-1-shots').text(blue1.shots)
              $('#blue-player-1-saves').text(blue1.saves)
              $('#blue-player-1-assists').text(blue1.assists)
              $('#blue-player-1-boost').text(blue1.boost)
              $('#blue-player-1-p-bar').width(blue1.boost + "%")





            } else if (blue1 != undefined && blue2 != undefined && blue3 == undefined) {

              $('#blue-player-1').removeClass('d-none')
              $('#blue-player-1-name').text(blue1.name)
              $('#blue-player-1-goals').text(blue1.goals)
              $('#blue-player-1-shots').text(blue1.shots)
              $('#blue-player-1-saves').text(blue1.saves)
              $('#blue-player-1-assists').text(blue1.assists)
              $('#blue-player-1-boost').text(blue1.boost)
              $('#blue-player-1-p-bar').width(blue1.boost + "%")

              $('#blue-player-2').removeClass('d-none')
              $('#blue-player-2-name').text(blue2.name)
              $('#blue-player-2-goals').text(blue2.goals)
              $('#blue-player-2-shots').text(blue2.shots)
              $('#blue-player-2-saves').text(blue2.saves)
              $('#blue-player-2-assists').text(blue2.assists)
              $('#blue-player-2-boost').text(blue2.boost)
              $('#blue-player-2-p-bar').width(blue2.boost + "%")

             /* $('#blue-player-3').addClass('d-none');
              $("div[id^='blue-player-3']").text('')
              $('#blue-player-3-p-bar').width('0%')*/

            } else if (blue1 != undefined && blue2 == undefined && blue3 == undefined) {

              $('#blue-player-1').removeClass('d-none')
              $('#blue-player-1-name').text(blue1.name)
              $('#blue-player-1-goals').text(blue1.goals)
              $('#blue-player-1-shots').text(blue1.shots)
              $('#blue-player-1-saves').text(blue1.saves)
              $('#blue-player-1-assists').text(blue1.assists)
              $('#blue-player-1-boost').text(blue1.boost)
              $('#blue-player-1-p-bar').width(blue1.boost + "%")

              /*$('#blue-player-2').addClass('d-none');
              $("div[id^='blue-player-2']").text('')
              $('#blue-player-2-p-bar').width('0%')

              $('#blue-player-3').addClass('d-none');
              $("div[id^='blue-player-3']").text('')
              $('#blue-player-3-p-bar').width('0%')*/

            }

          } else {
            blueResetAll()
          }
          
          //does orange team exist?
          if (team1 != undefined) {
            //it does

            //orange players btw
            var orange1 = _.get(team1, [0])
            var orange2 = _.get(team1, [1])
            var orange3 = _.get(team1, [2])

            orangeData1 = []
            orangeData1.push(orange1)

            orangeData2 = []
            orangeData2.push(orange2)
          
            orangeData3 = []
            orangeData3.push(orange3)

            if (orange1 != undefined && orange2 != undefined && orange3 != undefined) {
              
              $("div[id^='orange-player-']").removeClass('d-none')

              
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
              
              $('#orange-player-3').removeClass('d-none')
              $('#orange-player-3-name').text(orange3.name)
              $('#orange-player-3-goals').text(orange3.goals)
              $('#orange-player-3-shots').text(orange3.shots)
              $('#orange-player-3-saves').text(orange3.saves)
              $('#orange-player-3-assists').text(orange3.assists)
              $('#orange-player-3-boost').text(orange3.boost)
              $('#orange-player-3-p-bar').width(orange3.boost + "%")
              
              
              $('#orange-player-2').removeClass('d-none')
              $('#orange-player-2-name').text(orange2.name)
              $('#orange-player-2-goals').text(orange2.goals)
              $('#orange-player-2-shots').text(orange2.shots)
              $('#orange-player-2-saves').text(orange2.saves)
              $('#orange-player-2-assists').text(orange2.assists)
              $('#orange-player-2-boost').text(orange2.boost)
              $('#orange-player-2-p-bar').width(orange2.boost + "%")
              
              //remove invis for p1 and do other shit
              $('#orange-player-1').removeClass('d-none')
              $('#orange-player-1-name').text(orange1.name)
              $('#orange-player-1-goals').text(orange1.goals)
              $('#orange-player-1-shots').text(orange1.shots)
              $('#orange-player-1-saves').text(orange1.saves)
              $('#orange-player-1-assists').text(orange1.assists)
              $('#orange-player-1-boost').text(orange1.boost)
              $('#orange-player-1-p-bar').width(orange1.boost + "%")





            } else if (orange1 != undefined && orange2 != undefined && orange3 == undefined) {

              $('#orange-player-1').removeClass('d-none')
              $('#orange-player-1-name').text(orange1.name)
              $('#orange-player-1-goals').text(orange1.goals)
              $('#orange-player-1-shots').text(orange1.shots)
              $('#orange-player-1-saves').text(orange1.saves)
              $('#orange-player-1-assists').text(orange1.assists)
              $('#orange-player-1-boost').text(orange1.boost)
              $('#orange-player-1-p-bar').width(orange1.boost + "%")

              $('#orange-player-2').removeClass('d-none')
              $('#orange-player-2-name').text(orange2.name)
              $('#orange-player-2-goals').text(orange2.goals)
              $('#orange-player-2-shots').text(orange2.shots)
              $('#orange-player-2-saves').text(orange2.saves)
              $('#orange-player-2-assists').text(orange2.assists)
              $('#orange-player-2-boost').text(orange2.boost)
              $('#orange-player-2-p-bar').width(orange2.boost + "%")

              /*$('#orange-player-3').addClass('d-none');
              $("div[id^='orange-player-3']").text('')
              $('#orange-player-3-p-bar').width('0%')*/

            } else if (orange1 != undefined && orange2 == undefined && orange3 == undefined) {

              $('#orange-player-1').removeClass('d-none')
              $('#orange-player-1-name').text(orange1.name)
              $('#orange-player-1-goals').text(orange1.goals)
              $('#orange-player-1-shots').text(orange1.shots)
              $('#orange-player-1-saves').text(orange1.saves)
              $('#orange-player-1-assists').text(orange1.assists)
              $('#orange-player-1-boost').text(orange1.boost)
              $('#orange-player-1-p-bar').width(orange1.boost + "%")

             /* $('#orange-player-2').addClass('d-none');
              $("div[id^='orange-player-2']").text('')
              $('#orange-player-2-p-bar').width('0%')

              $('#orange-player-3').addClass('d-none');
              $("div[id^='orange-player-3']").text('')
              $('#orange-player-3-p-bar').width('0%')*/

            }
            logocolors()
            afterHighlights()
            winner()
          } else {
            orangeResetAll()
          }
          
        }

      }

      
      //is the match over?
      else if (jEvent.event == "game:podium_start" || jEvent.event == "game:match_ended") {
        
        //$('#main-ui').addClass('d-none');
       // blueResetAll()
       // orangeResetAll()
        //window.location.assign('aftergame.html')
       // winner()
      //  logocolors()
        
        endGame()
      //  afterHighlights()
        console.log('match ended / podium')

        if (jEvent.data.winner_team_num == 0) {
          var BWNumber = parseInt(localStorage.getItem("BlueWins"), 10)
          var NewBlueWins = BWNumber + 1
        
          console.log(NewBlueWins)
          localStorage.setItem("BlueWins", NewBlueWins);
          var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
          var newGameNum = gameNum + 1
          localStorage.setItem('GameNumber', newGameNum)
          
        }else if (jEvent.data.winner_team_num == 1) {
          var OWNumber = parseInt(localStorage.getItem("OrangeWins"), 10)
          var NewOrangeWins = OWNumber + 1
        
          console.log(NewOrangeWins)
          localStorage.setItem("OrangeWins", NewOrangeWins);
          var gameNum = parseInt(localStorage.getItem('GameNumber'), 10)
          var newGameNum = gameNum + 1
          localStorage.setItem('GameNumber', newGameNum)
        }

      }else if (jEvent.event == "game:match_destroyed") {
        //window.location.assign('index.html')
        blueResetAll()
        orangeResetAll()
        setTimeout(()=>{
          document.getElementById('replayOut').play();
         
            setTimeout(()=>{
              document.getElementById("aftergame").style.width = "0px";
              document.getElementById("aftergame").style.height = "0px";
              },2300);
            },6100);
     /*  playOut()
       document.getElementById('replayOut').style.zIndex = '999999';
        setTimeout(()=>{
        document.getElementById("aftergame").style.width = "0px";
        document.getElementById("aftergame").style.height = "0px";
      },800);   */
      console.log("destroy")
        
      }else if (jEvent.event == "game:goal_scored") {
       //play()
       console.log(jEvent.data.scorer.name)
       goalAssist = []
       setTimeout(toggle, 4500)
       var goalSpeed = jEvent.data.goalspeed
       var goalRound = goalSpeed.toFixed(0);
       var scoreID = jEvent.data.scorer.id
       var scoreTeam = scoreID.slice(-1)
       
          if (scoreTeam === "1" || scoreTeam === "2" || scoreTeam === "3") {
       $('#blueName').text("")
       document.getElementById('goalBLUE').play();
       setTimeout(BlueChange, 8000)
       $('#scorerB').text(jEvent.data.scorer.name);
       $('#goalSpeedB').text(goalRound);
       team =[]
       team.push('blue')
       playb()
       notify("goalBlue", "  " + jEvent.data.scorer.name);
       
          }else{
            $('#orangeName').text("")
            document.getElementById('goalORANGE').play();
       setTimeout(OrangeChange, 8000)
       $('#scorer').text(jEvent.data.scorer.name)
       $('#goalSpeed').text(goalRound);
       team = []
       team.push('orange')
       playO()
       notify("goalOrange", "  " + jEvent.data.scorer.name);
          }
      }else if (jEvent.event == "game:statfeed_event") {
        console.log(jEvent.data)
        if (jEvent.data.type === "MVP") {
          mvp = []
          mvp.push(jEvent.data.main_target.name)
          console.log(mvp)
            if (mvp == blueData1[0].name) {  
              $('#blue1MVP').removeClass('invisible')
              $('#blue2MVP').addClass('invisible')
              $('#blue3MVP').addClass('invisible')
              $('#orange1MVP').addClass('invisible')
              $('#orange2MVP').addClass('invisible')
              $('#orange3MVP').addClass('invisible')
            }else if (mvp == blueData2[0].name) {
              $('#blue1MVP').addClass('invisible')
              $('#blue2MVP').removeClass('invisible')
              $('#blue3MVP').addClass('invisible')
              $('#orange1MVP').addClass('invisible')
              $('#orange2MVP').addClass('invisible')
              $('#orange3MVP').addClass('invisible')
            }else if (mvp == blueData3[0].name) {
              $('#blue1MVP').addClass('invisible')
              $('#blue2MVP').addClass('invisible')
              $('#blue3MVP').removeClass('invisible')
              $('#orange1MVP').addClass('invisible')
              $('#orange2MVP').addClass('invisible')
              $('#orange3MVP').addClass('invisible')
            }else if (mvp == orangeData1[0].name) {
              $('#blue1MVP').addClass('invisible')
              $('#blue2MVP').addClass('invisible')
              $('#blue3MVP').addClass('invisible')
              $('#orange1MVP').removeClass('invisible')
              $('#orange2MVP').addClass('invisible')
              $('#orange3MVP').addClass('invisible')
            }else if (mvp == orangeData2[0].name) {
              $('#blue1MVP').addClass('invisible')
              $('#blue2MVP').addClass('invisible')
              $('#blue3MVP').addClass('invisible')
              $('#orange1MVP').addClass('invisible')
              $('#orange2MVP').removeClass('invisible')
              $('#orange3MVP').addClass('invisible')
            }else if (mvp == orangeData3[0].name) {
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
          console.log("Assist")
          goalAssist.push(jEvent.data.main_target.name)
          console.log(goalAssist[0])
          $('#assist').text(goalAssist[0]);
          $('#assist').removeClass('d-none');
          $('#assistLogo').removeClass('d-none');
          $('#assistB').text(goalAssist[0]);
          $('#assistB').removeClass('d-none');
          $('#assistLogoB').removeClass('d-none');
          setTimeout(removeAssist, 15000)
          var assistID = jEvent.data.main_target.id
          var assistTeam = assistID.slice(-1)
          if (assistTeam === "1" || assistTeam === "2" || assistTeam === "3"){
        
            notify("assistBlue", "  " + jEvent.data.main_target.name);
            }else{
              notify("assistOrange", "  " + jEvent.data.main_target.name);
            }
        }else if (jEvent.data.type === "Shot on Goal") {
          var shotID = jEvent.data.main_target.id
          var shotTeam = shotID.slice(-1)
          if (shotTeam === "1" || shotTeam === "2" || shotTeam === "3"){
        
            notify("shotBlue", "  " + jEvent.data.main_target.name);
            }else{
              notify("shotOrange", "  " + jEvent.data.main_target.name);
            }
          }else if (jEvent.data.type === "Save") {
              var shotID = jEvent.data.main_target.id
              var shotTeam = shotID.slice(-1)
              if (shotTeam === "1" || shotTeam === "2" || shotTeam === "3"){
            
                notify("saveBlue", "  " + jEvent.data.main_target.name);
                }else{
                  notify("saveOrange", "  " + jEvent.data.main_target.name);
                }
              }else if (jEvent.data.type === "Epic Save") {
                var shotID = jEvent.data.main_target.id
                var shotTeam = shotID.slice(-1)
                if (shotTeam === "1" || shotTeam === "2" || shotTeam === "3"){
              
                  notify("epicsaveBlue", "  " + jEvent.data.main_target.name);
                  }else{
                    notify("epicsaveOrange", "  " + jEvent.data.main_target.name);
                  }
                }else if (jEvent.data.type === "Hat Trick") {
                  var shotID = jEvent.data.main_target.id
                  var shotTeam = shotID.slice(-1)
                  if (shotTeam === "1" || shotTeam === "2" || shotTeam === "3"){
                
                    notify("HatTrickBlue", "  " + jEvent.data.main_target.name);
                    }else{
                      notify("HatTrickOrange", "  " + jEvent.data.main_target.name);
                    }
                  }else if (jEvent.data.type === "Savior") {
                    var shotID = jEvent.data.main_target.id
                    var shotTeam = shotID.slice(-1)
                    if (shotTeam === "1" || shotTeam === "2" || shotTeam === "3"){
                  
                      notify("saviorBlue", "  " + jEvent.data.main_target.name);
                      }else{
                        notify("saviorOrange", "  " + jEvent.data.main_target.name);
                      }
              }else if (jEvent.data.type === "Demolition") {
                var shotID = jEvent.data.main_target.id
                var shotTeam = shotID.slice(-1)
                if (shotTeam === "1" || shotTeam === "2" || shotTeam === "3"){
              
                  notify("demoBlue", "  " + jEvent.data.main_target.name);
                  notify("demoedOrange", "  " + jEvent.data.secondary_target.name);
                  }else{
                    notify("demoOrange", "  " + jEvent.data.main_target.name);
                    notify("demoedBlue", "  " + jEvent.data.secondary_target.name);
                  }}
      }else if (jEvent.event == "game:replay_end") {
        $('#replayOrange').addClass('d-none');
        $('#replayBlue1').addClass('d-none');
        
      }else if (jEvent.event == "game:replay_start") {
        console.log(team[0])
        if (team[0] === "blue"){
        
        $('#replayBlue1').removeClass('d-none');
        }else{
          $('#replayOrange').removeClass('d-none');
        }
      }else if (jEvent.event == "game:replay_will_end") {
       
        setTimeout(playOut, 1200)
      }else if (jEvent.event == "game:pre_game_countdown_begin") {
        
        console.log(transition)
        setTimeout(add, 4500)
        
      }else if (jEvent.event == "game:pre_countdown_begin") {
        console.log("transition")
        setTimeout(add, 4500)
      }else if (jEvent.event == "game:initialized") {
        
    }else if (jEvent.event === "game:match_ended") {
     /* if (data.winning_team_number === "0") {
        var BWNumber = parseInt(localStorage.getItem("BlueWins"), 10)
        var NewBlueWins = BWNumber + 1
      
        console.log(NewBlueWins)
        localStorage.setItem("BlueWins", NewBlueWins);
      }else if (data.winning_team_number === "1") {
        var OWNumber = parseInt(localStorage.getItem("OrangeWins"), 10)
        var NewOrangeWins = OWNumber + 1
      
        console.log(NewOrangeWins)
        localStorage.setItem("OrangeWins", NewOrangeWins);
      }*/
    }
    }


    function removeAssist() {
      goalAssist = 0
      $('#assist').addClass('d-none');
      $('#assistLogo').addClass('d-none');
      $('#assistB').addClass('d-none');
      $('#assistLogoB').addClass('d-none');
    }

    function add() {
      $('#scoreboard').addClass('open');
      $('#TierOverlay').addClass('open1');
      $('#TierOverlay2').addClass('open1');
          logo()
      
    }
    function toggle() {
      $('#scoreboard').removeClass('open');
      $('#TierOverlay').removeClass('open1');
      $('#TierOverlay2').addClass('open1');
    }

    function playb() {
      setTimeout(playBlue, 2200)
      
    }
    
    function playO() {
      setTimeout(playOrange, 2200)
      
    }
    
    function playOV() {
      setTimeout(playOut, 10200)
    }
    
    function playBlue() {
      //document.getElementById('video').currentTime = '0';
      document.getElementById('blueGoalVideo').play();
    }

    function BlueChange() {
      $('#blueName').text(localStorage.getItem("BlueTeam"))
    }

    function OrangeChange() {
      $('#orangeName').text(localStorage.getItem("OrangeTeam"))
    }

    function playOrange() {
      //document.getElementById('video').currentTime = '0';
      document.getElementById('orangeGoalVideo').play();
    }

    function playOut() {
      //document.getElementById('video').currentTime = '0';
      document.getElementById('replayOut').play();
    }

    function notify(type,message){
      (()=>{
        let n = document.createElement("div");
        let id = Math.random().toString(36).substr(2,10);
        n.setAttribute("id",id);
        n.classList.add("notification",type);
        n.classList.add("fade_out")
        n.innerText = message;
        document.getElementById("notification-area").appendChild(n);
        setTimeout(()=>{
          var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
          for(let i=0;i<notifications.length;i++){
            if(notifications[i].getAttribute("id") == id){
              notifications[i].remove();
              break;
            }
          }
        },3000);
      })();
    }
    
    function notifyDemo(){
      notify("demoOrange","shane9b3");
      notify("demoedBlue","tr1ppn");
    
      
    }
    function notifyShot(){
      notify("shotBlue","Way2Luckee");
    }
    function notifySave(){
      notify("saveBlue","musah");
    }
var timer
    function logo() {
    timer = setTimeout(()=>{
      $('#TierOverlay').removeClass('open1');
        setTimeout(()=>{
          $('#TierOverlay2').removeClass('d-none');
            $('#TierOverlay2').addClass('open1');
          },2000);
        },15000);
    }

    function endGame() {
    setTimeout(()=>{
      document.getElementById('replayOut').play();
     
        setTimeout(()=>{
          document.getElementById("aftergame").style.width = "1920px";
          document.getElementById("aftergame").style.height = "1080px";
          setTimeout(()=>{
            document.getElementById('replayOut').style.zIndex = '1';
            
            },1300);
          },2300);
        },6100);
      }

