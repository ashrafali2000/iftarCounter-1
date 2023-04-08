
setInterval(function () {
    var currtime1 = new Date();
    var iftarTime = new Date();
    var iftarAmPm = "PM";
    var currAmPm = "AM"
    iftarTime.setHours(18);
    iftarTime.setMinutes(50);
    iftarTime.setSeconds(18);
    iftarTime.setMilliseconds(1000);
    var currHour = currtime1.getHours();
    var currMinute = currtime1.getMinutes();
    var currSeconds = currtime1.getSeconds();
    var newMilliSeconds = iftarTime.getTime() - currtime1.getTime();

    var changeHour = iftarTime.getHours() -  currtime1.getHours();
    var changeMinut = iftarTime.getMinutes() - currtime1.getMinutes() ;
    var changeSecond = Math.floor((newMilliSeconds/1000) % 60);

    if (currHour > 12 && iftarTime.getHours() > 12) {
        currHour -= 12;
        currAmPm = "PM";
    }
    else {
        var changeHour = iftarTime.getHours() -  currtime1.getHours();
        var changeMinut = iftarTime.getMinutes() - currtime1.getMinutes() ;
        var changeSecond = Math.floor((newMilliSeconds/1000) % 60);
    }

    document.getElementById("currHours").innerText = currHour;
    document.getElementById("currMinuts").innerText = currMinute;
    document.getElementById("currSeconds").innerText = currSeconds;
    document.getElementById("colon1").innerText = ":";
    document.getElementById("colon2").innerText = ":";
    document.getElementById("colon5").innerText = ":";
    document.getElementById("iftHours").innerText = changeHour;
    document.getElementById("iftMinuts").innerText = changeMinut;
    document.getElementById("iftSeconds").innerText = changeSecond;
    document.getElementById("colon3").innerText = ":";
    document.getElementById("colon4").innerText = ":";
    document.getElementById("colon6").innerText = ":";
    document.getElementById("text1").innerText = "Current Time = ";
    document.getElementById("text2").innerText = "Iftar Time =  ";
    document.getElementById("iftarAmPm").innerText = iftarAmPm;
    document.getElementById("currAmPm").innerText = currAmPm;
}, 1000);

