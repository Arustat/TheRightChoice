var audio = new Audio('http://soundbible.com/mp3/Female_Scream_Horror-NeoPhyTe-138499973.mp3');

const jumpscare = document.getElementById('jumpscare');

setTimeout(() => {
  jumpscare.style.display = 'block';
  jumpscare.classList.add('shake');
  audio.play();
}, 2000); // Affiche le jumpscare après 3 secondes (3000 millisecondes)

setTimeout(() => {
  jumpscare.classList.remove('shake');
  jumpscare.classList.add('fade-out');
  audio.pause();
},4000);

setTimeout(() => {
  jumpscare.style.display = 'none';
  jumpscare.classList.remove('fade-out');
}, 5000); 