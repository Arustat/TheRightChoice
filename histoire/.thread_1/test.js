let etape = 0;
let etape_img = 0;

function start() {
    etape = 1;
    document.getElementById('scenario').innerText = "Serais-tu prêt à consacrer ta vie pour une cause qui pourrait coûterait la vie de nombreux innocent ?";
    document.getElementsByTagName('button')[0].innerText = "oui";
    document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
    const boutonDroite = document.createElement('button');
    boutonDroite.innerText = "non";
    boutonDroite.setAttribute('onclick', 'choisirChemin("non")');
    document.getElementById('histoire').appendChild(boutonDroite);
}

function choisirChemin(choix, etape_img) {
    if (etape === 1) {
        document.getElementById('scenario').innerText = "Chaque vies ont-elles la même valeur ?";
        document.getElementsByTagName('button')[0].innerText = "oui";
        document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
        document.getElementsByTagName('button')[1].innerText = "non";
        document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
        document.getElementsByTagName('button')[1].style.display = "inline";
        etape = 2; 
    } else if (etape === 2) {
        if(choix === "non"){
            document.getElementById('scenario').innerText = "As-tu déjà ôter la vie à quelqu'un ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 4;
        }else if (choix === "oui"){
            document.getElementById('scenario').innerText = "Croit-tu en une entité supérieur ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 3;
        }
    }else if (etape === 3) {
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "Penses-tu que cette entité est bienveillante ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 0;
        } else if (choix === "non") {       
            document.getElementById('scenario').innerText = "Penses-tu que cette entité est bienveillante ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 0;
        }
    }else if(etape === 3.5){
        document.getElementsByTagName('button')[0].innerText = "oui";
        document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
        document.getElementsByTagName('button')[1].style.display = "none";
        etape = 2;
    }else if(etape === 4){
        if (choix ==="non"){
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].style.display = "none";
        }else if (choix === "oui") {
            document.getElementById('scenario').innerText = "As-tu ressentis de la culpabilité ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 5;
        }
    }else if(etape === 5){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "Regrette-tu tes actes ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 6;
        }else if (choix === "non") {
            document.getElementById('scenario').innerText = "As-tu ressentis de la satisfaction ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 7;
        }
    }else if(etape === 6){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "Regrette-tu tes actes ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 8;
        }else if(choix ==="non"){
            document.getElementById('scenario').innerText = "As-tu ressentis de la satisfaction ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 7;
        }
    }else if(etape === 7){
        if (choix === "oui") {
            animation_victime();
        }else if(choix === "non"){
            document.getElementById('scenario').innerText = "Les âmes que tu as fauché sont-elles vraiment innocente ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'start()');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'start()');
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 9;
        }
    }else if(etape === 8){

    }else if(etape === 9){
        if (choix === "oui") {
            look_victime();
        }
    }else if(etape_img === 10){
        if (choix === "oui") {
            ocument.getElementById('scenario').innerText = "Les âmes que tu as fauché sont-elles vraiment innocente ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'start()');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'start()');
            document.getElementsByTagName('button')[1].style.display = "inline";
        }else if(choix === "non"){
            ocument.getElementById('scenario').innerText = "Les âmes que tu as fauché sont-elles vraiment innocente ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'start()');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'start()');
            document.getElementsByTagName('button')[1].style.display = "inline";
        }
    }else if(etape === 11){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "Tu as perdu";
        }
    }
}

function fin(resultat) {
  if(resultat === "combattre"){
    document.getElementById('scenario').innerText = "Tu as perdu";
  }else if (resultat === "fuir") {
    document.getElementById('scenario').innerText = "Tu as gagné";
  }
  // Supprimer les boutons à la fin de l'histoire
  const boutons = document.getElementsByTagName('button');
  for (let i = boutons.length - 1; i >= 0; i--) {
    boutons[i].parentNode.removeChild(boutons[i]);
  }
}


function animation_victime(){
    etape = 9;
}

let currentIndex = 1;
const image = document.createElement('img');

function look_victime() {
    document.getElementById('scenario').innerText = "Reconnais-tu cette personne ?";

    image.setAttribute('src', 'access/victime/' + currentIndex + '.jpeg');
    image.setAttribute('width', '200');
    image.setAttribute('height', '200');
    image.setAttribute('id', 'victimImg');
    document.getElementById('histoire').appendChild(image);

    document.getElementsByTagName('button')[0].innerText = "oui";
    document.getElementsByTagName('button')[0].setAttribute('onclick', 'next("oui")');
    document.getElementsByTagName('button')[1].innerText = "non";
    document.getElementsByTagName('button')[1].setAttribute('onclick', 'next("non")');
    
}

function next(choix) {
    if (choix === "oui") {
        if (currentIndex < 7) {
            currentIndex++;
            look_victime();
        } else {
            let image = document.getElementById('victimImg');
            if (image && image.parentNode) {
                image.parentNode.removeChild(image);
            }
            choisirChemin("oui", 10);
        }
    } else if (choix === "non") {
        let image = document.getElementById('victimImg');
        if (image && image.parentNode) {
            image.parentNode.removeChild(image);
        }
        choisirChemin("non", 10); 
    }
}
