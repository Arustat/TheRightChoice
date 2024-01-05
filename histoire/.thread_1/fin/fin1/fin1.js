var audio = new Audio('http://soundbible.com/mp3/Female_Scream_Horror-NeoPhyTe-138499973.mp3');

const jumpscare = document.getElementById('jumpscare');
const memorial = document.getElementById('memorial');
const image = document.getElementById('christ');
const message = document.createElement('p');
const blackOverlay = document.querySelector('.black-overlay');
document.getElementById('cacher').appendChild(message);

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

setTimeout(() => {
  button.style.display = 'block';
  memorial.style.display = 'flex';
  memorial.classList.add('fade-in');  
}, 6000);

setTimeout(() => {
  jumpscare.style.display = 'none';
  jumpscare.classList.remove('fade-out');
  blackOverlay.classList.add('active'); // Affiche le fond noir

  setTimeout(() => {
    blackOverlay.classList.remove('active'); // Déclenche la transition fade-out du fond noir
    memorial.style.display = 'flex';
    memorial.classList.add('fade-in');
  }, 1000); // Délai pour afficher le fond noir avant l'apparition du memorial
}, 5000); // Délai pour afficher le fond noir après le jumpscare

function change(){
  image.style.animation = 'slideInLeft 2s ease-in-out forwards'
  image.style.position = 'absolute';
  const imageWidth = image.width;
  const imageHeight = image.height;
  document.getElementById('cacher').style.display = 'block';
  document.getElementById('cacher').style.width = imageWidth + 'px';
  document.getElementById('cacher').style.height = imageHeight + 'px';
  message.innerHTML = '"Le monde a perdu une lumière éclatante le jour où Christophe Giovanna a été brutalement arraché à notre vie. Sa présence bienveillante, son souci constant des autres et son dévouement pour la justice en ont fait un être aimé de tous.Christophe était un détective de renom, un véritable génie dans son domaine. Son regard perçant et son esprit aiguisé lui permettaient de déceler des indices que personne d autre ne voyait. Il résolvait les affaires les plus complexes en un temps record, une vraie légende dans le milieu.Cette dernière affaire sur laquelle il travaillait avant son départ tragique était différente des autres. Il semblait obsédé par cette affaire, comme si elle représentait un défi qu il devait absolument relever. Il passait des nuits blanches à étudier les dossiers, à relier les faits et à chercher le moindre indice qui lui permettrait de résoudre cette énigme."';

}

const mes = document.getElementById('h2');
const originalText = mes.innerHTML;

mes.addEventListener('mouseover', function(){
  this.innerHTML = 'Tu es Mort !';
  mes.style.color = 'red';
});

mes.addEventListener('mouseout', function(){
  this.innerHTML = originalText;
  mes.style.color = 'black';
});