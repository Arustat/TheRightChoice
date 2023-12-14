var audio = new Audio('Music/sound.mp3');

function playMusic() {
  audio.play();
}

function toggleMusic() {
  var musicImage = document.getElementById('musicImage');

  if(audio.paused) {
    audio.play();
    musicImage.src = "Music/volume.png"; // Image lorsque la musique joue
  } else {
    audio.pause();
    musicImage.src = "Music/mute.png"; // Image lorsque la musique est en pause
  }
}