console.log("welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/Let-Me-Love-You(PaglaSongs).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName:"Alone", filePath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName:"As it was", filePath: "song/2.mp3" , coverpath: "covers/2.jpg"},
    {songName:"calm down", filePath: "song/3.mp3" , coverpath: "covers/3.jpg"},
    {songName:"summer walk", filePath: "song/4.mp3" , coverpath: "covers/4.jpg"},
    {songName:"Tere Hawaale", filePath: "song/5.mp3" , coverpath: "covers/5.jpg"},
    {songName:"tum kya mile", filePath: "song/6.mp3" , coverpath: "covers/6.jpg"},
    {songName:"Let me love you", filePath: "song/7.mp3" , coverpath: "covers/cover.jpg"},
    {songName:"love", filePath: "song/8.mp3" , coverpath: "covers/8.jpg"},
    {songName:"somthing", filePath: "song/9.mp3" , coverpath: "covers/9.jpg"},
    {songName:"na jana", filePath: "song/10.mp3" , coverpath: "covers/10.jpg"},
]
    
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
   
})

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
//audioElement.play();
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    
});
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
    })

})
document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>9)
   {
    songIndex=0;
   } 
   else
   {
    songIndex += 1;
   }
   audioElement.src = `song/${songIndex+1}.mp3`;
   masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
     songIndex=0;
    } 
    else
    {
     songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-pause');
 
 })