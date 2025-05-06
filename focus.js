const display=document.getElementById("display");
const result = document.getElementById("focus-time");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;
let focusedHours=0;
let focusedMinites=0;
let focusedSeconds=0;

function update(){
    const currentTime=new Date();
    elapsedTime=currentTime-startTime;

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minites = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 /10);
     
    focusedHours=hours;
    focusedMinites=minites;
    focusedSeconds=seconds;


    hours = String(hours).padStart(2,"0");
    minites = String(minites).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");

    
    display.textContent = `${hours}:${minites}:${seconds}:${miliseconds}`;
}

function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
    result.innerHTML=`Focused<br>${focusedHours} H and ${focusedMinites} MIN`;
}

function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00";
}

