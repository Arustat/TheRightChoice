var audio = new Audio('access/audio/ambiance.mp3');

type("Vous allez débuter le test.", "scenario");

let etape = 0;

function animation_victime(){
    etape = 9;
}

let currentIndex = 1;
const image = document.createElement('img');


function type(text, elementId){
    let i = 0;
    const intervalId = setInterval(function(){
        if (text[i] === " "){
            document.getElementById(elementId).innerHTML += "&nbsp;";
        } else {
            document.getElementById(elementId).innerHTML += text[i];
        }
        i++;
        if(i === text.length ){
            clearInterval(intervalId);
        }
    }, 20);
}




function look_victime() {
    document.getElementById('scenario').innerText = "";
    type("Reconnais-tu cette personne ?", 'scenario');

    //supression des boutons
    let button1 = document.getElementsByTagName('button')[0];
    let button2 = document.getElementsByTagName('button')[1];
    button1.parentNode.removeChild(button1);
    button2.parentNode.removeChild(button2);

    //ajout de l'image
    image.setAttribute('src', 'access/victime/' + currentIndex + '.jpeg');
    image.setAttribute('width', '200');
    image.setAttribute('height', '200');
    image.setAttribute('id', 'victimImg');
    document.getElementById('histoire').appendChild(image);

    //remet les boutons
    button1.innerText = "oui";
    button1.setAttribute('onclick', 'next("oui")');
    button1.style.display = 'inline-block';
    button1.style.marginTop = '15px';
    document.getElementById('histoire').appendChild(button1);

    button2.innerText = "non";
    button2.setAttribute('onclick', 'next("non")');
    button2.style.display = 'inline-block';
    button2.style.marginTop = '15px';
    document.getElementById('histoire').appendChild(button2);

}

button

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
    document.getElementById('scenario').innerText ="";
    type("Serais-tu prêt à consacrer ta vie pour une cause qui coûterait la vie de nombreux innocent ?","scenario");
    
    document.getElementsByTagName('button')[0].innerText = "oui";
    document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
    const boutonDroite = document.createElement('button');
    boutonDroite.innerText = "non";
    boutonDroite.setAttribute('onclick', 'choisirChemin("non")');
    document.getElementById('histoire').appendChild(boutonDroite);
}

function choisirChemin(choix) {
    if (etape === 1) {
        document.getElementById('scenario').innerText = "";
        type("Chaque vies ont-elles la même valeur ?","scenario")
        document.getElementsByTagName('button')[0].innerText = "oui";
        document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
        document.getElementsByTagName('button')[1].innerText = "non";
        document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
        document.getElementsByTagName('button')[0].style.display = "inline-block";
        document.getElementsByTagName('button')[1].style.display = "inline-block";
        etape = 2; 
    } else if (etape === 2) {
        if(choix === "non"){
            document.getElementById('scenario').innerText = "";
            type("As-tu déjà ôter la vie à quelqu'un ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
            etape = 4;
        }else if (choix === "oui"){
            document.getElementById('scenario').innerText = "";
            type("Crois-tu en une entité supérieur ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
            etape = 3;
        }
    }else if (etape === 3) {
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "";
            type("Penses-tu que cette entité est bienveillante ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
            etape = 11;
        } else if (choix === "non") {       
            document.getElementById('scenario').innerText = "";
            type("Penses-tu que l'humanité a un but précis ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "Servir l'Etat";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Servir le peuple";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
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
            document.getElementById('scenario').innerText = "";
            type("As-tu ressentis de la culpabilité ?","scenario");
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
            etape = 5;
        }
    }else if(etape === 5){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "";
            type("Regrette-tu tes actes ?","scenario");
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
            etape = 6;
        }else if (choix === "non") {
            document.getElementById('scenario').innerText = "";
            type("As-tu ressentis de la satisfaction ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
            etape = 7;
        }
    }else if(etape === 6){
        if (choix === "oui") {
            fin("1");
        }else if(choix ==="non"){
            document.getElementById('scenario').innerText = "";
            type("As-tu ressentis de la satisfaction ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline-block";
            etape = 7;
        }
    }else if(etape === 7){
        if (choix === "oui") {
            animation_victime();
        }else if(choix === "non"){
            document.getElementById('scenario').innerText = "";
            type("Les âmes que tu as fauché sont-elles vraiment innocente ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline-block";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 9;
        }
    }else if(etape === 8){
        if (choix === "oui") {
            document.getElementById('scenario').innerText = "";
            type("Es-ce que c'est cette entité supérieur qui t'as ordonné de tuer ?","scenario");
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
            document.getElementById('scenario').innerText = "";
            type("Te souviens-tu de leurs sangs sur tes mains ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 10.5
        }
    }else if(etape === 10.5){
            document.getElementById('scenario').innerText = "";
            type("Te souviens-tu de leurs hurlements de douleurs ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "oui";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 10.9;
    }else if(etape === 10.9){
            document.getElementById('scenario').innerText = "";
            type("Qui est le véritable responsable de leurs morts ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "Moi";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "Moi";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 10.7;
    }else if(etape === 10.7){
            document.getElementById('scenario').innerText = "";
            type("Es-tu le Red Killer ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Si cette entité n'existe pas, pourrais tu vivre avec cette idée ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 16;
        }else if(choix === "non"){
            document.getElementById('scenario').innerText = "";
            type("Penses-tu qu'elle te veux du mal ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Penses-tu être sous l'influence d'un complot gouvernemental ?","scenario")
            document.getElementsByTagName('button')[0].innerText = "oui";
            document.getElementsByTagName('button')[0].setAttribute('onclick', 'choisirChemin("oui")');
            document.getElementsByTagName('button')[1].innerText = "non";
            document.getElementsByTagName('button')[1].setAttribute('onclick', 'choisirChemin("non")');
            document.getElementsByTagName('button')[0].style.display = "inline";
            document.getElementsByTagName('button')[1].style.display = "inline";
            etape = 13;
        }else if(choix === "non"){
            document.getElementById('scenario').innerText = "";
            type("As-tu une confiance aveugle envers l'Etat ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Reconnais-tu que cette entité supérieur est l'Etat ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("L'Etat te protège, te nourrit, te loge, te soigne, te divertit, te forme, te guide, te surveille, te contrôl. Tu obeiras à l'Etat ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Kdo je červený vrah ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Fais-tu le serment de servir ton Etat jusqu'à la mort ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Serais-tu prêt à sacrifier la vie de tes proches pour ton Etat ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Tu t'engageras à simuler ta mort pour le bien de l'Etat ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Tu t'engageras à accomplir les missions qui te seront confiées sans broncher ?","scenario")
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
            document.getElementById('scenario').innerText = "";
            type("Tu t'engageras à ne jamais réfuter les ordres de l'Etat même si certain peuvent être immoraux ?","scenario")
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
        document.getElementById('scenario').innerText = "";
        type("Bravo tu as réussi le test, tu vas recevoir des instructions par mail pour ta validation.", "scenario");
        setTimeout(function(){
            window.location.href = "fin/fin2/fin2.html"
        }, 10000);
    }else if (resultat === "3") {
        document.getElementById('scenario').innerText = "";
        type("...", "scenario");
        setTimeout(function(){
            window.location.href = "fin/fin3/fin3.html"
        }, 2000);
    }else if (resultat === "4") {
        document.getElementById('scenario').innerText = "";
        type("CITIZEN IS NO LONGER UNDER THE CONTROL OF THE STATE. ELIMINATION REQUESTED.", "scenario");
        setTimeout(function(){
            window.location.href = "fin/fin4/fin4.html"
        }, 5000);
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
