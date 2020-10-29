if (blueData1[0].score > blueData2[0].score && blueData1[0].score > blueData3[0].score && blueData1[0].score > orangeData1[0].score && blueData1[0].score > orangeData2[0].score && blueData1[0].score > orangeData3[0].score) {
    console.log("B1")
    document.getElementById("#bluePoints1").addClass('blueGoals')
    document.getElementById("#bluePoints1").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(149, 164, 196, 0.5))"
    document.getElementById("#bluePoints1").style.filter = "drop-shadow(0px 0px 15px rgba(149, 164, 196, 0.5))"
    document.getElementById("#bluePoints2").removeClass('blueGoals')
    document.getElementById("#bluePoints2").style.webkitfilter = null
    document.getElementById("#bluePoints2").style.filter = null
    document.getElementById("#bluePoints3").removeClass('blueGoals')
    document.getElementById("#bluePoints3").style.webkitfilter = null
    document.getElementById("#bluePoints3").style.filter = null
    document.getElementById("#orangePoints1").removeClass('orangeGoals')
    document.getElementById("#orangePoints1").style.webkitfilter = null
    document.getElementById("#orangePoints1").style.filter = null
    document.getElementById("#orangePoints2").removeClass('orangeGoals')
    document.getElementById("#orangePoints2").style.webkitfilter = null
    document.getElementById("#orangePoints2").style.filter = null
    document.getElementById("#orangePoints3").removeClass('orangeGoals')
    document.getElementById("#orangePoints3").style.webkitfilter = null
    document.getElementById("#orangePoints3").style.filter = null
  }else if (blueData2[0].score > blueData1[0].score && blueData2[0].score > blueData3[0].score && blueData2[0].score > orangeData1[0].score && blueData2[0].score > orangeData2[0].score && blueData2[0].score > orangeData3[0].score) {
    console.log("B2")
    document.getElementById("#bluePoints2").addClass('BlueGoals')
    document.getElementById("#bluePoints2").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("#bluePoints2").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("#bluePoints1").removeClass('blueGoals')
    document.getElementById("#bluePoints1").style.webkitfilter = null
    document.getElementById("#bluePoints1").style.filter = null
    document.getElementById("#bluePoints3").removeClass('blueGoals')
    document.getElementById("#bluePoints3").style.webkitfilter = null
    document.getElementById("#bluePoints3").style.filter = null
    document.getElementById("#orangePoints1").removeClass('orangeGoals')
    document.getElementById("#orangePoints1").style.webkitfilter = null
    document.getElementById("#orangePoints1").style.filter = null
    document.getElementById("#orangePoints2").removeClass('orangeGoals')
    document.getElementById("#orangePoints2").style.webkitfilter = null
    document.getElementById("#orangePoints2").style.filter = null
    document.getElementById("#orangePoints3").removeClass('orangeGoals')
    document.getElementById("#orangePoints3").style.webkitfilter = null
    document.getElementById("#orangePoints3").style.filter = null
  }else if (blueData3[0].score > blueData1[0].score && blueData3[0].score > blueData2[0].score && blueData3[0].score > orangeData1[0].score && blueData3[0].score > orangeData2[0].score && blueData3[0].score > orangeData3[0].score) {
    console.log("B3")
    document.getElementById("#bluePoints3").addClass('blueGoals')
    document.getElementById("#bluePoints3").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("#bluePoints3").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("#bluePoints1").removeClass('blueGoals')
    document.getElementById("#bluePoints1").style.webkitfilter = null
    document.getElementById("#bluePoints1").style.filter = null
    document.getElementById("#bluePoints2").removeClass('blueGoals')
    document.getElementById("#bluePoints2").style.webkitfilter = null
    document.getElementById("#bluePoints2").style.filter = null
    document.getElementById("#orangePoints1").removeClass('orangeGoals')
    document.getElementById("#orangePoints1").style.webkitfilter = null
    document.getElementById("#orangePoints1").style.filter = null
    document.getElementById("#orangePoints2").removeClass('orangeGoals')
    document.getElementById("#orangePoints2").style.webkitfilter = null
    document.getElementById("#orangePoints2").style.filter = null
    document.getElementById("#orangePoints3").removeClass('orangeGoals')
    document.getElementById("#orangePoints3").style.webkitfilter = null
    document.getElementById("#orangePoints3").style.filter = null
  }else if (orangeData1[0].score > blueData1[0].score && orangeData1[0].score > blueData2[0].score && orangeData1[0].score > blueData3[0].score && orangeData1[0].score > orangeData2[0].score && orangeData1[0].score > orangeData3[0].score) {
    console.log("O1")
    document.getElementById("#bluePoints2").removeClass('blueGoals')
    document.getElementById("#bluePoints2").style.webkitfilter = null
    document.getElementById("#bluePoints2").style.filter = null
    document.getElementById("#bluePoints1").removeClass('blueGoals')
    document.getElementById("#bluePoints1").style.webkitfilter = null
    document.getElementById("#bluePoints1").style.filter = null
    document.getElementById("#bluePoints3").removeClass('blueGoals')
    document.getElementById("#bluePoints3").style.webkitfilter = null
    document.getElementById("#bluePoints3").style.filter = null
    document.getElementById("#orangePoints1").addClass('orangeGoals')
    document.getElementById("#orangePoints1").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("#orangePoints1").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("#orangePoints2").removeClass('orangeGoals')
    document.getElementById("#orangePoints2").style.webkitfilter = null
    document.getElementById("#orangePoints2").style.filter = null
    document.getElementById("#orangePoints3").removeClass('orangeGoals')
    document.getElementById("#orangePoints3").style.webkitfilter = null
    document.getElementById("#orangePoints3").style.filter = null
  }else if (orangeData2[0].score > blueData1[0].score && orangeData2[0].score > blueData2[0].score && orangeData2[0].score > blueData3[0].score && orangeData2[0].score > orangeData1[0].score && orangeData2[0].score > orangeData3[0].score) {
    console.log("O2")
    document.getElementById("#bluePoints2").removeClass('blueGoals')
    document.getElementById("#bluePoints2").style.webkitfilter = null
    document.getElementById("#bluePoints2").style.filter = null
    document.getElementById("#bluePoints1").removeClass('blueGoals')
    document.getElementById("#bluePoints1").style.webkitfilter = null
    document.getElementById("#bluePoints1").style.filter = null
    document.getElementById("#bluePoints3").removeClass('blueGoals')
    document.getElementById("#bluePoints3").style.webkitfilter = null
    document.getElementById("#bluePoints3").style.filter = null
    document.getElementById("#orangePoints2").addClass('orangeGoals')
    document.getElementById("#orangePoints2").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("#orangePoints2").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("#orangePoints1").removeClass('orangeGoals')
    document.getElementById("#orangePoints1").style.webkitfilter = null
    document.getElementById("#orangePoints1").style.filter = null
    document.getElementById("#orangePoints3").removeClass('orangeGoals')
    document.getElementById("#orangePoints3").style.webkitfilter = null
    document.getElementById("#orangePoints3").style.filter = null
  }else if (orangeData3[0].score > blueData1[0].score && orangeData3[0].score > blueData2[0].score && orangeData3[0].score > blueData3[0].score && orangeData3[0].score > orangeData1[0].score && orangeData3[0].score > orangeData2[0].score) {
    document.getElementById("#bluePoints2").removeClass('blueGoals')
    document.getElementById("#bluePoints2").style.webkitfilter = null
    document.getElementById("#bluePoints2").style.filter = null
    document.getElementById("#bluePoints1").removeClass('blueGoals')
    document.getElementById("#bluePoints1").style.webkitfilter = null
    document.getElementById("#bluePoints1").style.filter = null
    document.getElementById("#bluePoints3").removeClass('blueGoals')
    document.getElementById("#bluePoints3").style.webkitfilter = null
    document.getElementById("#bluePoints3").style.filter = null
    document.getElementById("#orangePoints3").addClass('orangeGoals')
    document.getElementById("#orangePoints3").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("#orangePoints3").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("#orangePoints2").removeClass('orangeGoals')
    document.getElementById("#orangePoints2").style.webkitfilter = null
    document.getElementById("#orangePoints2").style.filter = null
    document.getElementById("#orangePoints1").removeClass('orangeGoals')
    document.getElementById("#orangePoints1").style.webkitfilter = null
    document.getElementById("#orangePoints1").style.filter = null
  } 

  if ($('#blueGoals1') > $('#blueGoals2') && $('#blueGoals1') > $('#blueGoals3') && $('#blueGoals1') > $('#orangeGoals1') && $('#blueGoals1') > $('#orangeGoals2') && $('#blueGoals1') > $('#orangeGoals3')) {
    document.getElementById("blueGoals1").style.color = "#4793ff";
    document.getElementById("blueGoals1").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("blueGoals1").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("blueGoals2").style.color = "white";
    document.getElementById("blueGoals2").style.webkitfilter = null
    document.getElementById("blueGoals2").style.filter = null
    document.getElementById("blueGoals3").style.color = "white";
    document.getElementById("blueGoals3").style.webkitfilter = null
    document.getElementById("blueGoals3").style.filter = null
    document.getElementById("orangeGoals1").style.color = "white";
    document.getElementById("orangeGoals1").style.webkitfilter = null
    document.getElementById("orangeGoals1").style.filter = null
    document.getElementById("orangeGoals2").style.color = "white";
    document.getElementById("orangeGoals2").style.webkitfilter = null
    document.getElementById("orangeGoals2").style.filter = null
    document.getElementById("orangeGoals3").style.color = "white";
    document.getElementById("orangeGoals3").style.webkitfilter = null
    document.getElementById("orangeGoals3").style.filter = null
  }else if ($('#blueGoals2') > $('#blueGoals1') && $('#blueGoals2') > $('#blueGoals3') && $('#blueGoals2') > $('#orangeGoals1') && $('#blueGoals2') > $('#orangeGoals2') && $('#blueGoals2') > $('#orangeGoals3')) {
    document.getElementById("blueGoals2").style.color = "#4793ff";
    document.getElementById("blueGoals2").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("blueGoals2").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("blueGoals1").style.color = "white";
    document.getElementById("blueGoals1").style.webkitfilter = null
    document.getElementById("blueGoals1").style.filter = null
    document.getElementById("blueGoals3").style.color = "white";
    document.getElementById("blueGoals3").style.webkitfilter = null
    document.getElementById("blueGoals3").style.filter = null
    document.getElementById("orangeGoals1").style.color = "white";
    document.getElementById("orangeGoals1").style.webkitfilter = null
    document.getElementById("orangeGoals1").style.filter = null
    document.getElementById("orangeGoals2").style.color = "white";
    document.getElementById("orangeGoals2").style.webkitfilter = null
    document.getElementById("orangeGoals2").style.filter = null
    document.getElementById("orangeGoals3").style.color = "white";
    document.getElementById("orangeGoals3").style.webkitfilter = null
    document.getElementById("orangeGoals3").style.filter = null
  }else if ($('#blueGoals3') > $('#blueGoals1') && $('#blueGoals3') > $('#blueGoals2') && $('#blueGoals3') > $('#orangeGoals1') && $('#blueGoals3') > $('#orangeGoals2') && $('#blueGoals3') > $('#orangeGoals3')) {
    document.getElementById("blueGoals3").style.color = "#4793ff";
    document.getElementById("blueGoals3").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("blueGoals3").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95))"
    document.getElementById("blueGoals1").style.color = "white";
    document.getElementById("blueGoals1").style.webkitfilter = null
    document.getElementById("blueGoals1").style.filter = null
    document.getElementById("blueGoals2").style.color = "white";
    document.getElementById("blueGoals2").style.webkitfilter = null
    document.getElementById("blueGoals2").style.filter = null
    document.getElementById("orangeGoals1").style.color = "white";
    document.getElementById("orangeGoals1").style.webkitfilter = null
    document.getElementById("orangeGoals1").style.filter = null
    document.getElementById("orangeGoals2").style.color = "white";
    document.getElementById("orangeGoals2").style.webkitfilter = null
    document.getElementById("orangeGoals2").style.filter = null
    document.getElementById("orangeGoals3").style.color = "white";
    document.getElementById("orangeGoals3").style.webkitfilter = null
    document.getElementById("orangeGoals3").style.filter = null
  }else if ($('#orangeGoals1') > $('#blueGoals1') && $('#orangeGoals1') > $('#blueGoals2') && $('#orangeGoals1') > $('#blueGoals3') && $('#orangeGoals1') > $('#orangeGoals2') && $('#orangeGoals1') > $('#orangeGoals3')) {
    document.getElementById("blueGoals2").style.color = "white";
    document.getElementById("blueGoals2").style.webkitfilter = null
    document.getElementById("blueGoals2").style.filter = null
    document.getElementById("blueGoals1").style.color = "white";
    document.getElementById("blueGoals1").style.webkitfilter = null
    document.getElementById("blueGoals1").style.filter = null
    document.getElementById("blueGoals3").style.color = "white";
    document.getElementById("blueGoals3").style.webkitfilter = null
    document.getElementById("blueGoals3").style.filter = null
    document.getElementById("orangeGoals1").style.color = "#ffb347";
    document.getElementById("orangeGoals1").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("orangeGoals1").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("orangeGoals2").style.color = "white";
    document.getElementById("orangeGoals2").style.webkitfilter = null
    document.getElementById("orangeGoals2").style.filter = null
    document.getElementById("orangeGoals3").style.color = "white";
    document.getElementById("orangeGoals3").style.webkitfilter = null
    document.getElementById("orangeGoals3").style.filter = null
  }else if ($('#orangeGoals2') > $('#blueGoals1') && $('#orangeGoals2') > $('#blueGoals2') && $('#orangeGoals2') > $('#blueGoals3') && $('#orangeGoals2') > $('#orangeGoals1') && $('#orangeGoals2') > $('#orangeGoals3')) {
    document.getElementById("blueGoals2").style.color = "white";
    document.getElementById("blueGoals2").style.webkitfilter = null
    document.getElementById("blueGoals2").style.filter = null
    document.getElementById("blueGoals1").style.color = "white";
    document.getElementById("blueGoals1").style.webkitfilter = null
    document.getElementById("blueGoals1").style.filter = null
    document.getElementById("blueGoals3").style.color = "white";
    document.getElementById("blueGoals3").style.webkitfilter = null
    document.getElementById("blueGoals3").style.filter = null
    document.getElementById("orangeGoals2").style.color = "#ffb347";
    document.getElementById("orangeGoals2").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("orangeGoals2").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("orangeGoals1").style.color = "white";
    document.getElementById("orangeGoals1").style.webkitfilter = null
    document.getElementById("orangeGoals1").style.filter = null
    document.getElementById("orangeGoals3").style.color = "white";
    document.getElementById("orangeGoals3").style.webkitfilter = null
    document.getElementById("orangeGoals3").style.filter = null
  }else if ($('#orangeGoals3') > $('#blueGoals1') && $('#orangeGoals3') > $('#blueGoals2') && $('#orangeGoals3') > $('#blueGoals3') && $('#orangeGoals3') > $('#orangeGoals2') && $('#orangeGoals3') > $('#orangeGoals1')) {
    document.getElementById("blueGoals2").style.color = "white";
    document.getElementById("blueGoals2").style.webkitfilter = null
    document.getElementById("blueGoals2").style.filter = null
    document.getElementById("blueGoals1").style.color = "white";
    document.getElementById("blueGoals1").style.webkitfilter = null
    document.getElementById("blueGoals1").style.filter = null
    document.getElementById("blueGoals3").style.color = "white";
    document.getElementById("blueGoals3").style.webkitfilter = null
    document.getElementById("blueGoals3").style.filter = null
    document.getElementById("orangeGoals3").style.color = "#ffb347";
    document.getElementById("orangeGoals3").style.webkitfilter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("orangeGoals3").style.filter = "drop-shadow(0px 0px 15px rgba(187, 192, 141, 0.95));"
    document.getElementById("orangeGoals2").style.color = "white";
    document.getElementById("orangeGoals2").style.webkitfilter = null
    document.getElementById("orangeGoals2").style.filter = null
    document.getElementById("orangeGoals1").style.color = "white";
    document.getElementById("orangeGoals1").style.webkitfilter = null
    document.getElementById("orangeGoals1").style.filter = null
  } 