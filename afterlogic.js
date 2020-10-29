//Score
if (blueData1[0].score > blueData2[0].score && blueData1[0].score > blueData3[0].score && blueData1[0].score > orangeData1[0].score && blueData1[0].score > orangeData2[0].score && blueData1[0].score > orangeData3[0].score) {
    console.log("B1")
    document.getElementById("#bluePoints2").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints2").addClass('font-Light')
    
    document.getElementById("#bluePoints1").addClass('blueAfterHighlights')
    document.getElementById("#bluePoints1").removeClass('font-Light')
    
    document.getElementById("#bluePoints3").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints3").addClass('font-Light')
    
    document.getElementById("#orangePoints1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints1").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
    
  }else if (blueData2[0].score > blueData1[0].score && blueData2[0].score > blueData3[0].score && blueData2[0].score > orangeData1[0].score && blueData2[0].score > orangeData2[0].score && blueData2[0].score > orangeData3[0].score) {
    console.log("B2")
    document.getElementById("#bluePoints1").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints1").addClass('font-Light')
    
    document.getElementById("#bluePoints2").addClass('blueAfterHighlights')
    document.getElementById("#bluePoints2").removeClass('font-Light')
    
    document.getElementById("#bluePoints3").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints3").addClass('font-Light')
    
    document.getElementById("#orangePoints1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints1").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
    
  }else if (blueData3[0].score > blueData1[0].score && blueData3[0].score > blueData2[0].score && blueData3[0].score > orangeData1[0].score && blueData3[0].score > orangeData2[0].score && blueData3[0].score > orangeData3[0].score) {
    console.log("B3")
    document.getElementById("#bluePoints1").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints1").addClass('font-Light')
    
    document.getElementById("#bluePoints3").addClass('blueAfterHighlights')
    document.getElementById("#bluePoints3").removeClass('font-Light')
    
    document.getElementById("#bluePoints2").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints2").addClass('font-Light')
    
    document.getElementById("#orangePoints1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints1").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
  }else if (orangeData1[0].score > blueData1[0].score && orangeData1[0].score > blueData2[0].score && orangeData1[0].score > blueData3[0].score && orangeData1[0].score > orangeData2[0].score && orangeData1[0].score > orangeData3[0].score) {
    console.log("O1")
    document.getElementById("#bluePoints1").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints1").addClass('font-Light')
    
    document.getElementById("#bluePoints2").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints2").addClass('font-Light')
    
    document.getElementById("#bluePoints3").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints3").addClass('font-Light')
    
    document.getElementById("#orangePoints1").addClass('orangeAfterHighlights')
    document.getElementById("#orangePoints1").removeClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
  }else if (orangeData2[0].score > blueData1[0].score && orangeData2[0].score > blueData2[0].score && orangeData2[0].score > blueData3[0].score && orangeData2[0].score > orangeData1[0].score && orangeData2[0].score > orangeData3[0].score) {
    console.log("O2")
    document.getElementById("#bluePoints1").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints1").addClass('font-Light')
    
    document.getElementById("#bluePoints2").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints2").addClass('font-Light')
    
    document.getElementById("#bluePoints3").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints3").addClass('font-Light')
    
    document.getElementById("#orangePoints2").addClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").removeClass('font-Light')
    
    document.getElementById("#orangePoints1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints1").addClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
  }else if (orangeData3[0].score > blueData1[0].score && orangeData3[0].score > blueData2[0].score && orangeData3[0].score > blueData3[0].score && orangeData3[0].score > orangeData1[0].score && orangeData3[0].score > orangeData2[0].score) {
    document.getElementById("#bluePoints1").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints1").addClass('font-Light')
    
    document.getElementById("#bluePoints2").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints2").addClass('font-Light')
    
    document.getElementById("#bluePoints3").removeClass('blueAfterHighlights')
    document.getElementById("#bluePoints3").addClass('font-Light')
    
    document.getElementById("#orangePoints3").addClass('orangeAfterHighlights')
    document.getElementById("#orangePoints3").removeClass('font-Light')
    
    document.getElementById("#orangePoints2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints2").addClass('font-Light')
    
    document.getElementById("#orangePoints1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangePoints1").addClass('font-Light')
  } 


  //Goals
  if (blueData1[0].goals > blueData2[0].goals && blueData1[0].goals > blueData3[0].goals && blueData1[0].goals > orangeData1[0].goals && blueData1[0].goals > orangeData2[0].goals && blueData1[0].goals > orangeData3[0].goals) {
    console.log("B1")
    document.getElementById("#blueGoals2").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals2").addClass('font-Light')
    
    document.getElementById("#blueGoals1").addClass('blueAfterHighlights')
    document.getElementById("#blueGoals1").removeClass('font-Light')
    
    document.getElementById("#blueGoals3").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals3").addClass('font-Light')
    
    document.getElementById("#orangeGoals1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals1").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
    
  }else if (blueData2[0].goals > blueData1[0].goals && blueData2[0].goals > blueData3[0].goals && blueData2[0].goals > orangeData1[0].goals && blueData2[0].goals > orangeData2[0].goals && blueData2[0].goals > orangeData3[0].goals) {
    console.log("B2")
    document.getElementById("#blueGoals1").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals1").addClass('font-Light')
    
    document.getElementById("#blueGoals2").addClass('blueAfterHighlights')
    document.getElementById("#blueGoals2").removeClass('font-Light')
    
    document.getElementById("#blueGoals3").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals3").addClass('font-Light')
    
    document.getElementById("#orangeGoals1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals1").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
    
  }else if (blueData3[0].goals > blueData1[0].goals && blueData3[0].goals > blueData2[0].goals && blueData3[0].goals > orangeData1[0].goals && blueData3[0].goals > orangeData2[0].goals && blueData3[0].goals > orangeData3[0].goals) {
    console.log("B3")
    document.getElementById("#blueGoals1").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals1").addClass('font-Light')
    
    document.getElementById("#blueGoals3").addClass('blueAfterHighlights')
    document.getElementById("#blueGoals3").removeClass('font-Light')
    
    document.getElementById("#blueGoals2").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals2").addClass('font-Light')
    
    document.getElementById("#orangeGoals1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals1").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
  }else if (orangeData1[0].goals > blueData1[0].goals && orangeData1[0].goals > blueData2[0].goals && orangeData1[0].goals > blueData3[0].goals && orangeData1[0].goals > orangeData2[0].goals && orangeData1[0].goals > orangeData3[0].goals) {
    console.log("O1")
    document.getElementById("#blueGoals1").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals1").addClass('font-Light')
    
    document.getElementById("#blueGoals2").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals2").addClass('font-Light')
    
    document.getElementById("#blueGoals3").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals3").addClass('font-Light')
    
    document.getElementById("#orangeGoals1").addClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals1").removeClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
  }else if (orangeData2[0].goals > blueData1[0].goals && orangeData2[0].goals > blueData2[0].goals && orangeData2[0].goals > blueData3[0].goals && orangeData2[0].goals > orangeData1[0].goals && orangeData2[0].goals > orangeData3[0].goals) {
    console.log("O2")
    document.getElementById("#blueGoals1").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals1").addClass('font-Light')
    
    document.getElementById("#blueGoals2").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals2").addClass('font-Light')
    
    document.getElementById("#blueGoals3").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals3").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").addClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").removeClass('font-Light')
    
    document.getElementById("#orangeGoals1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals1").addClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
  }else if (orangeData3[0].goals > blueData1[0].goals && orangeData3[0].goals > blueData2[0].goals && orangeData3[0].goals > blueData3[0].goals && orangeData3[0].goals > orangeData1[0].goals && orangeData3[0].goals > orangeData2[0].goals) {
    document.getElementById("#blueGoals1").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals1").addClass('font-Light')
    
    document.getElementById("#blueGoals2").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals2").addClass('font-Light')
    
    document.getElementById("#blueGoals3").removeClass('blueAfterHighlights')
    document.getElementById("#blueGoals3").addClass('font-Light')
    
    document.getElementById("#orangeGoals3").addClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals3").removeClass('font-Light')
    
    document.getElementById("#orangeGoals2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals2").addClass('font-Light')
    
    document.getElementById("#orangeGoals1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeGoals1").addClass('font-Light')
  } 


  //Assists
  if (blueData1[0].assists > blueData2[0].assists && blueData1[0].assists > blueData3[0].assists && blueData1[0].assists > orangeData1[0].assists && blueData1[0].assists > orangeData2[0].assists && blueData1[0].assists > orangeData3[0].assists) {
    console.log("B1")
    document.getElementById("#blueAssists2").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists2").addClass('font-Light')
    
    document.getElementById("#blueAssists1").addClass('blueAfterHighlights')
    document.getElementById("#blueAssists1").removeClass('font-Light')
    
    document.getElementById("#blueAssists3").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists3").addClass('font-Light')
    
    document.getElementById("#orangeAssists1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists1").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
    
  }else if (blueData2[0].assists > blueData1[0].assists && blueData2[0].assists > blueData3[0].assists && blueData2[0].assists > orangeData1[0].assists && blueData2[0].assists > orangeData2[0].assists && blueData2[0].assists > orangeData3[0].assists) {
    console.log("B2")
    document.getElementById("#blueAssists1").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists1").addClass('font-Light')
    
    document.getElementById("#blueAssists2").addClass('blueAfterHighlights')
    document.getElementById("#blueAssists2").removeClass('font-Light')
    
    document.getElementById("#blueAssists3").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists3").addClass('font-Light')
    
    document.getElementById("#orangeAssists1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists1").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
    
  }else if (blueData3[0].assists > blueData1[0].assists && blueData3[0].assists > blueData2[0].assists && blueData3[0].assists > orangeData1[0].assists && blueData3[0].assists > orangeData2[0].assists && blueData3[0].assists > orangeData3[0].assists) {
    console.log("B3")
    document.getElementById("#blueAssists1").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists1").addClass('font-Light')
    
    document.getElementById("#blueAssists3").addClass('blueAfterHighlights')
    document.getElementById("#blueAssists3").removeClass('font-Light')
    
    document.getElementById("#blueAssists2").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists2").addClass('font-Light')
    
    document.getElementById("#orangeAssists1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists1").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
  }else if (orangeData1[0].assists > blueData1[0].assists && orangeData1[0].assists > blueData2[0].assists && orangeData1[0].assists > blueData3[0].assists && orangeData1[0].assists > orangeData2[0].assists && orangeData1[0].assists > orangeData3[0].assists) {
    console.log("O1")
    document.getElementById("#blueAssists1").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists1").addClass('font-Light')
    
    document.getElementById("#blueAssists2").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists2").addClass('font-Light')
    
    document.getElementById("#blueAssists3").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists3").addClass('font-Light')
    
    document.getElementById("#orangeAssists1").addClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists1").removeClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
  }else if (orangeData2[0].assists > blueData1[0].assists && orangeData2[0].assists > blueData2[0].assists && orangeData2[0].assists > blueData3[0].assists && orangeData2[0].assists > orangeData1[0].assists && orangeData2[0].assists > orangeData3[0].assists) {
    console.log("O2")
    document.getElementById("#blueAssists1").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists1").addClass('font-Light')
    
    document.getElementById("#blueAssists2").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists2").addClass('font-Light')
    
    document.getElementById("#blueAssists3").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists3").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").addClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").removeClass('font-Light')
    
    document.getElementById("#orangeAssists1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists1").addClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
  }else if (orangeData3[0].assists > blueData1[0].assists && orangeData3[0].assists > blueData2[0].assists && orangeData3[0].assists > blueData3[0].assists && orangeData3[0].assists > orangeData1[0].assists && orangeData3[0].assists > orangeData2[0].assists) {
    document.getElementById("#blueAssists1").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists1").addClass('font-Light')
    
    document.getElementById("#blueAssists2").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists2").addClass('font-Light')
    
    document.getElementById("#blueAssists3").removeClass('blueAfterHighlights')
    document.getElementById("#blueAssists3").addClass('font-Light')
    
    document.getElementById("#orangeAssists3").addClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists3").removeClass('font-Light')
    
    document.getElementById("#orangeAssists2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists2").addClass('font-Light')
    
    document.getElementById("#orangeAssists1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeAssists1").addClass('font-Light')
  } 


  //Shots
  if (blueData1[0].shots > blueData2[0].shots && blueData1[0].shots > blueData3[0].shots && blueData1[0].shots > orangeData1[0].shots && blueData1[0].shots > orangeData2[0].shots && blueData1[0].shots > orangeData3[0].shots) {
    console.log("B1")
    document.getElementById("#blueShots2").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots2").addClass('font-Light')
    
    document.getElementById("#blueShots1").addClass('blueAfterHighlights')
    document.getElementById("#blueShots1").removeClass('font-Light')
    
    document.getElementById("#blueShots3").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots3").addClass('font-Light')
    
    document.getElementById("#orangeShots1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots1").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
    
  }else if (blueData2[0].shots > blueData1[0].shots && blueData2[0].shots > blueData3[0].shots && blueData2[0].shots > orangeData1[0].shots && blueData2[0].shots > orangeData2[0].shots && blueData2[0].shots > orangeData3[0].shots) {
    console.log("B2")
    document.getElementById("#blueShots1").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots1").addClass('font-Light')
    
    document.getElementById("#blueShots2").addClass('blueAfterHighlights')
    document.getElementById("#blueShots2").removeClass('font-Light')
    
    document.getElementById("#blueShots3").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots3").addClass('font-Light')
    
    document.getElementById("#orangeShots1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots1").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
    
  }else if (blueData3[0].shots > blueData1[0].shots && blueData3[0].shots > blueData2[0].shots && blueData3[0].shots > orangeData1[0].shots && blueData3[0].shots > orangeData2[0].shots && blueData3[0].shots > orangeData3[0].shots) {
    console.log("B3")
    document.getElementById("#blueShots1").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots1").addClass('font-Light')
    
    document.getElementById("#blueShots3").addClass('blueAfterHighlights')
    document.getElementById("#blueShots3").removeClass('font-Light')
    
    document.getElementById("#blueShots2").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots2").addClass('font-Light')
    
    document.getElementById("#orangeShots1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots1").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
  }else if (orangeData1[0].shots > blueData1[0].shots && orangeData1[0].shots > blueData2[0].shots && orangeData1[0].shots > blueData3[0].shots && orangeData1[0].shots > orangeData2[0].shots && orangeData1[0].shots > orangeData3[0].shots) {
    console.log("O1")
    document.getElementById("#blueShots1").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots1").addClass('font-Light')
    
    document.getElementById("#blueShots2").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots2").addClass('font-Light')
    
    document.getElementById("#blueShots3").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots3").addClass('font-Light')
    
    document.getElementById("#orangeShots1").addClass('orangeAfterHighlights')
    document.getElementById("#orangeShots1").removeClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
  }else if (orangeData2[0].shots > blueData1[0].shots && orangeData2[0].shots > blueData2[0].shots && orangeData2[0].shots > blueData3[0].shots && orangeData2[0].shots > orangeData1[0].shots && orangeData2[0].shots > orangeData3[0].shots) {
    console.log("O2")
    document.getElementById("#blueShots1").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots1").addClass('font-Light')
    
    document.getElementById("#blueShots2").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots2").addClass('font-Light')
    
    document.getElementById("#blueShots3").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots3").addClass('font-Light')
    
    document.getElementById("#orangeShots2").addClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").removeClass('font-Light')
    
    document.getElementById("#orangeShots1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots1").addClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
  }else if (orangeData3[0].shots > blueData1[0].shots && orangeData3[0].shots > blueData2[0].shots && orangeData3[0].shots > blueData3[0].shots && orangeData3[0].shots > orangeData1[0].shots && orangeData3[0].shots > orangeData2[0].shots) {
    document.getElementById("#blueShots1").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots1").addClass('font-Light')
    
    document.getElementById("#blueShots2").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots2").addClass('font-Light')
    
    document.getElementById("#blueShots3").removeClass('blueAfterHighlights')
    document.getElementById("#blueShots3").addClass('font-Light')
    
    document.getElementById("#orangeShots3").addClass('orangeAfterHighlights')
    document.getElementById("#orangeShots3").removeClass('font-Light')
    
    document.getElementById("#orangeShots2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots2").addClass('font-Light')
    
    document.getElementById("#orangeShots1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeShots1").addClass('font-Light')
  } 


  //Saves
  if (blueData1[0].saves > blueData2[0].saves && blueData1[0].saves > blueData3[0].saves && blueData1[0].saves > orangeData1[0].saves && blueData1[0].saves > orangeData2[0].saves && blueData1[0].saves > orangeData3[0].saves) {
    console.log("B1")
    document.getElementById("#blueSaves2").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves2").addClass('font-Light')
    
    document.getElementById("#blueSaves1").addClass('blueAfterHighlights')
    document.getElementById("#blueSaves1").removeClass('font-Light')
    
    document.getElementById("#blueSaves3").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves3").addClass('font-Light')
    
    document.getElementById("#orangeSaves1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves1").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
    
  }else if (blueData2[0].saves > blueData1[0].saves && blueData2[0].saves > blueData3[0].saves && blueData2[0].saves > orangeData1[0].saves && blueData2[0].saves > orangeData2[0].saves && blueData2[0].saves > orangeData3[0].saves) {
    console.log("B2")
    document.getElementById("#blueSaves1").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves1").addClass('font-Light')
    
    document.getElementById("#blueSaves2").addClass('blueAfterHighlights')
    document.getElementById("#blueSaves2").removeClass('font-Light')
    
    document.getElementById("#blueSaves3").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves3").addClass('font-Light')
    
    document.getElementById("#orangeSaves1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves1").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
    
  }else if (blueData3[0].saves > blueData1[0].saves && blueData3[0].saves > blueData2[0].saves && blueData3[0].saves > orangeData1[0].saves && blueData3[0].saves > orangeData2[0].saves && blueData3[0].saves > orangeData3[0].saves) {
    console.log("B3")
    document.getElementById("#blueSaves1").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves1").addClass('font-Light')
    
    document.getElementById("#blueSaves3").addClass('blueAfterHighlights')
    document.getElementById("#blueSaves3").removeClass('font-Light')
    
    document.getElementById("#blueSaves2").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves2").addClass('font-Light')
    
    document.getElementById("#orangeSaves1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves1").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
  }else if (orangeData1[0].saves > blueData1[0].saves && orangeData1[0].saves > blueData2[0].saves && orangeData1[0].saves > blueData3[0].saves && orangeData1[0].saves > orangeData2[0].saves && orangeData1[0].saves > orangeData3[0].saves) {
    console.log("O1")
    document.getElementById("#blueSaves1").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves1").addClass('font-Light')
    
    document.getElementById("#blueSaves2").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves2").addClass('font-Light')
    
    document.getElementById("#blueSaves3").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves3").addClass('font-Light')
    
    document.getElementById("#orangeSaves1").addClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves1").removeClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
  }else if (orangeData2[0].saves > blueData1[0].saves && orangeData2[0].saves > blueData2[0].saves && orangeData2[0].saves > blueData3[0].saves && orangeData2[0].saves > orangeData1[0].saves && orangeData2[0].saves > orangeData3[0].saves) {
    console.log("O2")
    document.getElementById("#blueSaves1").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves1").addClass('font-Light')
    
    document.getElementById("#blueSaves2").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves2").addClass('font-Light')
    
    document.getElementById("#blueSaves3").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves3").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").addClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").removeClass('font-Light')
    
    document.getElementById("#orangeSaves1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves1").addClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
  }else if (orangeData3[0].saves > blueData1[0].saves && orangeData3[0].saves > blueData2[0].saves && orangeData3[0].saves > blueData3[0].saves && orangeData3[0].saves > orangeData1[0].saves && orangeData3[0].saves > orangeData2[0].saves) {
    document.getElementById("#blueSaves1").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves1").addClass('font-Light')
    
    document.getElementById("#blueSaves2").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves2").addClass('font-Light')
    
    document.getElementById("#blueSaves3").removeClass('blueAfterHighlights')
    document.getElementById("#blueSaves3").addClass('font-Light')
    
    document.getElementById("#orangeSaves3").addClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves3").removeClass('font-Light')
    
    document.getElementById("#orangeSaves2").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves2").addClass('font-Light')
    
    document.getElementById("#orangeSaves1").removeClass('orangeAfterHighlights')
    document.getElementById("#orangeSaves1").addClass('font-Light')
  } 