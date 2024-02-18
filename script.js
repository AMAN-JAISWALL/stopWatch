console.log("this is a stopwatch");

let displayTimeElem = document.getElementById("timeElem");
let playIcon = document.getElementById("playIcon");
let restartIcon = document.getElementById("restartIcon");
let stopIcon = document.getElementById("stopIcon");

let [second , minute, hour] = [0,0,0];
let timer = null;

function logicForTimer(){
    console.log("logic timer fun");
    second++
    if(second==60){
        second = 0;
        minute++;

        if(minute==60){
            minute =0;
            hour++;
        }
        if(hour==1){
            minute=0;
            second =0;
            hour =0;
        }
    }
    let h = 10 > hour ? "0" + hour : hour;
    let m = 10 > minute ? "0" + minute : minute;
    let s = 10 > second ? "0" + second : second;



    // console.log("our time",second,minute,hour);
    displayTimeElem.innerHTML = h+":"+m+":"+s;
}


playIcon.addEventListener("click",()=>{
    console.log("our playIcon button");
    if(timer != null){
        clearInterval(timer);    
    }
    timer = setInterval(()=>{
        logicForTimer()
    },1000)
})

stopIcon.addEventListener('click',()=>{
    console.log("stope btn");
    clearInterval(timer); 
})

restartIcon.addEventListener("click",()=>{
    console.log("restart btn working");
    clearInterval(timer); 
    [second , minute, hour] = [0,0,0];
    displayTimeElem.innerHTML= "00:00:00";
})


// logicForTimer();