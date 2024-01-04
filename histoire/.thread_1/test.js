let etape = 0;

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
            etape = 10;
            choisirChemin("oui");
        }
    } else if (choix === "non") {
        let image = document.getElementById('victimImg');
        if (image && image.parentNode) {
            image.parentNode.removeChild(image);
        }
        fin("1")
    }
}

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

function choisirChemin(choix) {
    if (etape === 1) {
        document.getElementById('scenario').innerText = "Chaque vies ont-elles la même valeur ?";
        document.getElementsByTagName('button')[0].innerText = "oui";
        document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
        document.getElementsByTagName('button')[1].innerText = "non";
        document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
        document.getElementsByTagName('button')[0].style.display = "inline";
        document.getElementsByTagName('button')[1].style.display = "inline";
        etape = 2; 
    } else if (etape === 2) {
        if(choix === "non"){
            document.getElementById('scenario').innerText = "As-tu déjà ôter la vie à quelqu'un ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 4;
        }else if (choix === "oui"){
            document.getElementById('scenario').innerText = "Croit-tu en une entité supérieur ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
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
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 11;
        } else if (choix === "non") {       
            document.getElementById('scenario').innerText = "Penses-tu que l'humanité a un but précis ?";
            document.getElementsByTagName('button')[0].innerText = "Servir l'Etat";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Servir le peuple";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 16;
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
            document.getElementsByTagName('button')[0].style.display = "inline";
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
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 6;
        }else if (choix === "non") {
            document.getElementById('scenario').innerText = "As-tu ressentis de la satisfaction ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 7;
        }
    }else if(etape === 6){
        if (choix === "oui") {
            fin("1");
        }else if(choix ==="non"){
            document.getElementById('scenario').innerText = "As-tu ressentis de la satisfaction ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 7;
        }
    }else if(etape === 7){
        if (choix === "oui") {
            animation_victime();
        }else if(choix === "non"){
            document.getElementById('scenario').innerText = "Les âmes que tu as fauché sont-elles vraiment innocente ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 9;
        }
    }else if(etape === 8){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "Es-ce que c'est cette entité supérieur qui t'as ordonné de tuer ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 5;
        }else if(choix === "non"){
            fin("1");
        }

    }else if(etape === 9){
        if (choix === "oui") {
            look_victime();
        }
    }else if(etape === 10){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "Te souviens-tu de leurs sangs sur tes mains ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 10.5
        }
    }else if(etape === 10.5){
            document.getElementById('scenario').innerText = "Te souviens-tu de leurs hurlements de douleurs ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 10.9;
    }else if(etape === 10.9){
            document.getElementById('scenario').innerText = "Qui est le véritable responsable de leurs morts ?";
            document.getElementsByTagName('button')[0].innerText = "Moi";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Moi";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 10.7;
    }else if(etape === 10.7){
            document.getElementById('scenario').innerText = "Es-tu le Red Killer ?";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 10.8;
    }else if(etape === 10.8){
        if (choix === "oui") {
            fin("3");
        }else if(choix === "non"){
            fin("1");
        }
    }else if(etape === 11){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "Si cette entité n'existe pas, pourrais tu vivre avec cette idée ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 12;
        }else if(choix === "non"){
            document.getElementById('scenario').innerText = "Penses-tu qu'elle te veux du mal ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 8;
        }
    }else if(etape === 12){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "Penses-tu être sous l'influence d'un complot gouvernemental ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 13;
        }else if(choix === "non"){
            document.getElementById('scenario').innerText = "As-tu une confiance aveugle envers l'Etat ?";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 14;
        }
    }else if (etape === 14){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "Reconnais-tu que cette entité supérieur est l'Etat ?";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 15;
        }else if(choix === "non"){
            fin("1");
        }
    }else if (etape === 15){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "L'Etat te protège, te nourrit, te loge, te soigne, te divertit, te forme, te guide, te surveille, te contrôl. Tu obeiras à l'Etat ? ";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            etape = 16;
        }else if(choix === "non"){
            fin("1");
        }
    }else if(etape == 13){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "Kdo je červený vrah ?";
            let input_fin = document.createElement('input');
            input_fin.setAttribute('type', 'password');
            input_fin.setAttribute('id', 'secret');
            document.getElementById('histoire').appendChild(input_fin);
            document.getElementsByTagName('button')[0].style.display = "none";
            document.getElementsByTagName('button')[1].style.display = "none";
            let boutonvalider = document.createElement('button');
            boutonvalider.innerText = "Valider";
            document.getElementById('histoire').appendChild(boutonvalider);
            boutonvalider.setAttribute('onclick', 'valider()'); 
        }else if(choix === "non"){
            fin("4");
        }
    }else if(etape === 16){
        if (choix === "non"){
            etape = 11;
        }else if(choix === "oui"){
            document.getElementById('scenario').innerText = "Fais-tu le serment de servir ton Etat jusqu'à la mort ?";
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline"; 
            etape = 18;
        }
    }else if(etape === 18){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "Serais-tu prêt à sacrifier la vie de tes proches pour ton Etat ?";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 19;
        }else if(choix === "non"){
            fin("1");
        }
    }else if(etape === 19){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "Tu t'engageras à simuler ta mort pour le bien de l'Etat ?";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 21;
        }else if(choix === "non"){
            fin("1");
        }
    }else if(etape === 21){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "Tu t'engageras à accomplir les missions qui te seront confiées sans broncher ?";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 22;
        }else if(choix === "non"){
            fin("1");
        }
    }else if(etape === 22){
        if (choix === "oui"){
            document.getElementById('scenario').innerText = "Tu t'engageras à ne jamais réfuter les ordres de l'Etat même si certain peuvent être immoraux ?";
            document.getElementsByTagName('button')[0].innerText = "Oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 23;
        }else if(choix === "non"){
            fin("1");
        }
    }else if(etape === 23){
        if (choix === "oui"){
            fin("2");
        }else if(choix === "non"){
            fin("1");
        }
    }
}

function fin(resultat) {
    if(resultat === "1"){
        window.location.href = "fin/fin1/fin1.html"
    }else if (resultat === "2") {
        document.getElementById('scenario').innerText = "Recruté";
    }else if (resultat === "3") {
        document.getElementById('scenario').innerText = "Veritable identité de l'assasin ";
    }else if (resultat === "4") {
        document.getElementById('scenario').innerText = "Secret d'Etat";
    }
    const boutons = document.getElementsByTagName('button');
    for (let i = boutons.length - 1; i >= 0; i--) {
        boutons[i].parentNode.removeChild(boutons[i]);
    }
}

function valider(){
    var input = document.getElementById("secret").value;
    if(input === "gouvernement" || input === "Gouvernement" || input === "GOUVERNEMENT"){
        fin("4");
    }else if(input == "moi" || input == "Moi" || input == "MOI" || input == "Christophe Giovanna" || input == "christophe giovanna" || input == "Christophe giovanna" || input == "christophe Giovanna" || input == "CHRISTOPHE GIOVANNA" || input == "CHRISTOPHE GIOVANNA" ){
        fin("3");

    }else{
        fin("1");
    }
}