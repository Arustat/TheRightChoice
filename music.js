var music = new Audio('Music/sound.mp3');
var playButton = document.getElementById('playButton');

function playMusic() {
  if (typeof music.loop == 'boolean') {
    music.loop = true;
  } else {
    music.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }
  music.play();
  playButton.src = 'Music/volume.png';
}

function pauseMusic() {
  music.pause();
  playButton.src = 'Music/mute.png';
}

function toggleMusic() {
  if (music.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
}
