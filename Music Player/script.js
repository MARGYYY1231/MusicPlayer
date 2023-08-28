/*Stores the current playing music index*/
let currentMusic = 0;

const music = document.querySelector('#audio');

/*All elements that need behaviours*/
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const bacwardBtn = document.querySelector('.backward-btn');

/*Transition to play button when pressed
Also stops disk from rotating when not being playesd*/
playBtn.addEventListener('click', ()=> {
    if(playBtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('pause');
})

//setup music

const setMusic = (i) => {
    seekBar.value = 0; //set slider range value to 0
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    //because there is a delay in getting the data a delay is added
    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300)
}

setMusic(0);

//formatting the time in minutes and seconds
const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

//seek bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500)