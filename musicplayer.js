const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress-bar");
let cover = document.querySelector("#cover");
const progressContainer = document.querySelector(".progress-container");



const songs =["90s","Morning Routine","Rainy","Spring","Stardust"];

let index = 0;

//Load the song
loadSong(songs[index]);

function loadSong(song){
    title.innerHTML=song
    audio.src=`music/${song}.mp3`
    cover.src=`music/${song}.jpg`

}

//Play/Pause song
playBtn.addEventListener("click",()=>{
    let isPlaying = musicContainer.classList.contains("play");

    if(isPlaying){
        pauseSong();
    }
    else{
        
        playSong();
    }
});


function pauseSong(){
    musicContainer.classList.remove("play")
    playBtn.querySelector("i.fas").classList.add("fa-play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")

    audio.pause()

}

function playSong(){
    musicContainer.classList.add("play")
    playBtn.querySelector("i.fas").classList.remove("fa-play")
    playBtn.querySelector("i.fas").classList.add("fa-pause")

    audio.play()
}

//next/prev song
prevBtn.addEventListener("click",()=>{
    nextSong()  
});


nextBtn.addEventListener("click",()=>{
   prevSong()
});

function nextSong(){
    index--;
    if(index<0){
        index=songs.length-1;
    }
    loadSong(songs[index])
    playSong()
}

function prevSong(){
    index++;
    if(index>songs.length-1){
        index=0;
    }
    loadSong(songs[index])
    playSong()
}

//Update the progress bar
audio.addEventListener('timeupdate',updateProgress);

function updateProgress(e){
    
    const {duration,currentTime} = e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress.style.width=`${progressPercent}%`
}

//progress bar when clicked
progressContainer.addEventListener("click",setProgress);

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration;  

}


//song ends and move to next song
audio.addEventListener("ended",nextSong);