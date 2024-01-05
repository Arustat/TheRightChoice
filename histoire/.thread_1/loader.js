let text = "> WARNING : INTRUSION DETECTED";

function affiche(texte) {
  let index = 0;
  const delay = 50;

  function afficher() {
    if (index < texte.length) {
      document.getElementById("loading").innerHTML += texte.charAt(index);
      index++;
      setTimeout(afficher, delay);
    }else{
        setTimeout(() => {
            document.getElementById('loading').innerHTML = '';
            document.querySelector('.background').style.display = 'block';
            let video = document.getElementById('video');
            video.addEventListener('ended', () => {
                window.location.href = 'mail.html';
            });
        },1000);
    }
  }

  afficher();
}

// Appel de la fonction
affiche(text);
