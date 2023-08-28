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

playBtn.addEventListener('click', ()=> {
    playBtn.classList.toggle('pause');
})