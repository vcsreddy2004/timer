let count;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;
let timerStarted = false;
let timerKey;
let timer = () => {
    count--;
    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100)-(minutes*60));
    milliSeconds = Math.floor(count-(seconds*100)-(minutes*6000));
    document.querySelector("#minutes").innerText = leadingZero(minutes);
    document.querySelector("#seconds").innerText = leadingZero(seconds);
    if(count == 0)
    {
        timerStarted = false;
        clearInterval(timerKey);
        count = 0;
        minutes = 00;
        seconds = 00;
        milliSeconds = 00;
        document.querySelector("#minutes").innerText = minutes;
        document.querySelector("#seconds").innerText = seconds;
        document.querySelector("#timerMusic").play();
    }
}
let leadingZero = (i) => {
    if(i <= 9)
    {
        return "0" + i;
    }
    else
    {
        return i;
    }
};
let start = document.querySelector("#start");
start.addEventListener("click" , () => {
    let userMinutes = document.querySelector("#userMinutes").value;
    let userSeconds = document.querySelector("#userSeconds").value;
    if(!timerStarted)
    {
        let empty = "";
        document.querySelector("#userMinutes").style.border = "1px solid black";
        document.querySelector("#userSeconds").style.border = "1ps solid black";
        switch(empty)
        {
            case userMinutes: document.querySelector("#userMinutes").style.border = "2px solid red";
            case userSeconds: document.querySelector("#userSeconds").style.border = "2ps solid red";
        }
        if(userMinutes == "")
        {
            alert("minutes can not be left empty");
        }
        else if(userSeconds == "")
        {
            alert("seconds can not left empty");
        }
        else
        {
            count = userMinutes*60*100 + userSeconds*100;
            timerStarted = true;
            timerKey = setInterval("timer()" , 10);
        }
    }
    else
    {
        alert("you can not edit time after timer starts. even if you want to edit click on reset");
    }
});
let reset = document.querySelector("#reset");
reset.addEventListener("click" , () => {
    timerStarted = false;
    clearInterval(timerKey);
    count = 0;
    minutes = 00;
    seconds = 00;
    milliSeconds = 00;
    document.querySelector("#minutes").innerText = minutes;
    document.querySelector("#seconds").innerText = seconds;
});