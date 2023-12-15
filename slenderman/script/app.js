
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var prompt = document.getElementById("prompt");

btn.addEventListener("click", game);

let script = {
  desc1 :"la brise glacial de l'hiver faisait danser les feuilles et crisser les branches. Une épaisse brume avait prit place, bloquant la vue a quiconque voulait retrouver son chemin. Les reflet argenter de la lune était la seule source de lumière des environ. Cette forêt a quelques chose de bizarre, d'opressant. Comme si dieu nous laisser a l'auré du bois, laissant les âme perdu au mains d'un mal bien plus grands.",
  desc2 : " c'est seul que vous avancer dans se décors morbide d'un pas incertain. Rien, aucun panneau pour retrouver votre route, aucun sentier, juste des arbre et du brouillard a perte de vue. ",
  dial1Mc : " [   ] : HHHHEEEYYY OOOOOH ! Y A QUELQU'UN ?! ",
  desc3 : " ... ",
  dial2Mc : " [   ] : A L'AIDE ?! ",
  dial2Inc : " [ inconnue ] : En voila un autre, suit moi vite je t'expliquerait tout plus tard. La il faut courir ! ",
  choix1Act1 : " le suivre ",
  desc4 : " alors vous courez. vous courez plus vite que vous ne l'auriez imaginé pour fuire ce qui semble vous poursuivre. Vous regardez de plus près celui qui vous a sauvé de se mauvais pas et un sentiment étange vous envahie. la course sembla duré une éternité, avant d'arrivé dans une petite cabane de bois au mur pourri.",
  dial1Act1Inc : " [ inconnue ] : le temps nous manque car ils sont a nos trousse c'est tout ce que tu dois savoir. Cours pour ta vie, ne crois personne et surtout fuit la musique. Sous aucun pretexte tu nne dois la suivre ou y préter attention. ",
  desc5 : " les mots de l'homme raisonèrent avant qu'il ne disparaisse aussi vite qu'il était apparu. Qu'est ce qui vous paraissez bizarre lors de votre course éfréné ? SA MAIN !! POURQUOI EST CE QUE VOUS NE SENTIEZ PAS SA MAIN SUR VOTRE BRAS ? ",
  desc6 : " la cabane elle aussi se volatilise vous laissat seul dans le froid glacial de la nuit. Soudain vous les entendez. Ces bruits, enfin plutôt ces rire que vous aviez fuit il n'y a pas si longtemps.",
  choix1Act2 : "aller voir en direction des rires",
  choix2Act2 : "partir à l'opposé ",
  desc7Act2Ch1 : " Vous faite quelques pas hésitant en direction de se brouhaha lointain quand vous commencer a entendre le son entrainant du boite à musique qui se rajoute au rire des fillette. Vous vous raprochez encore et encore bien qu'une voix dans votre esprit vous rappel les paroles de votre sauveur cela n'a plus d'importance. Après quelques minute de marche vous apercevait 2 enfants qui joue avec ce qui s'apparente a des cailloux d'un blanc nacré et de forme differente." ,
  desc8Act2Ch1 : " Vous réduisez peu à peu la distance qui vous sépars d'elles quand les deux se retourne comme un seul homme, vous fixant de leurs yeux noir et vide. ",
  dial1Act2Ch1 : " [ fille 1 ] : tu es venu jouer avec nous ? ",
  dial2Act2Ch1 : " [ fille 2 ] : ça faisait longtemps qu nous n'avons pas eu de visite Papa va être content ! ",
  choix1Act3Ch1 : " [  ] : ça suffit bande de mioche ! dites moi comment sortir d'ici ! ",
  choix2Act3Ch2 : " [  ] : ah je vois, dites moi ou se trouve votre papa ? ",
  dial2Act2Ch1 : " [ fille 1 ] : pourquoi vous êtes méchant ? ",
  dial3Act2Ch1 : " [ fille 2 ] : Papa va être très en colère ... ",
  dial4Act2Ch1 : " [ ????? ] : FUYEZ ! ",
  desc9Act2Ch1 :  " il ne fallut pas plus que cette hurlement pour que la brume de votre esprit laisser par la musique se dissipe et que vous preniez vos jambes a votre cou. Les branches vous fouette le visage mais cela n'a pas d'importance. les poumons en feu vous vous arrêter quelques instants",
  choix1Act2Ch1fin1 : " continuer de courir ",
  choix2Act2Ch1fin2 : " se cacher dans une souche d'arbre a proximité ",
  desc10Act2Ch1fin1 : " la musique se fit plus forte et la peur vous redonna le courage de fuir a toute jambe, oubliant la douleur et la fatigue pour sauvé votre vie. c'est alors qu'au loin, la douce lueur orangé de l'aube pointe le bout de ses rayons. le salut est a porté. Vous redoublez d'effort et arrivé enfin a la limite de cette forêt maudite. ",
  desc11Act2Ch1fin1 : " mais... ",
  dial1Act2Ch2 : " [ fille 1 ] : il est tout là bas au fond des bois. ",
  dial2Act2Ch2 : " [ fille 2 ] : la musique c'est lui, il fait ça pour qu'on le retrouve toujours. Et puis il nous donne plein de jouets aussi c'est le meilleur des papa ! ",
  dial3Act2Ch2 : " [ fille 1 ] : suis nous on va t'amener a lui. ",
  desc9Act2Ch2 : " les deux fillettes attrapent vos poignet et vous entraine dans le bois. La musique prends de plus en plus de place dans votre esprit, l'embrumant de plus en plus. RAPPEL TOI ! LES JOUETS ! ILS NE TE DISE RIEN ?! DES OS ! CE SONT DES OS ! ",
  choix1Act2Ch2fin : " essayer de resister ",
  desc10Act2Ch2fin : " vous vous débattait de toute vos force mais les fillettes sont bien plus forte que vous. Elles vous entraine de plus en plus profondément dans la forêt. La musique est de plus en plus forte et vous ne pouvez plus penser a rien d'autre. Après une dizaine de minute de marche vous vous retouver devant ce que ces enfant appelle papa et se ce que vouyez vous glace le sang. Une créature sans visage au teint fantomatique se tient devant vous. Il est grand. Trop grand. son corps dispropostioner et squelétique ne ressemble à rien qui puisse être humain sauf peut être le costume noir et la cravate rouge qu'il porte.",
  dial1Act2Ch2fin : " [ fille 1 ] : on t'as ramené de quoi manger papa ! ",
  dial2Act2Ch2fin : " [ fille 2 ] : on sais que ça fait longtemps que tu as faim et puis on a toujours voulu un grand frère ! ",
  desc11Act2Ch2fin : " le monstre se penche lentement vers vous, détaillant chaque trait de votre visage. C'est alors qu'il sourit. Comment pouvait il sourire sans visage ?! c'est une question qui vous trotta dans la tête avant que la voix grave de votre bourreau ne brise le silence. ",
  dial3Act2Ch2fin : " [ ?????? ] : oh mais quel magnifqiue cadeau vous m'avez fait mes chéries. ",
  dial4Act2Ch2fin :  " [ ?????? ] : dit moi petit agneau, que fait tu seul dans cette forêt ? t'as mère ne t'a jamais appris que le grands méchant loup y rôde. ",
  dial5Act2Ch2fin :  " [    ] : Je... Je... Qui suis-je ? ",
  desc12Act2Ch2fin : " le monstre se mit a rire. Un rire grave et puissant qui vous glace le sang. Dans un elan de survie vous essayez de vous débattre de toute vos force.  ",
  choix1Act2Ch2fin : " vous débattre ",
  desc13Act2Ch2fin : "pris d'un élan vous vous retournez, vous arrachant de la poigne des deux enfants, et vous commencer a courir. le sol se dérobe alors sous vos pied et vous finissez face contre terre avant d'être soulever par une jambe et placé devant la tête du monstre sans visage. c'est la que vous réalisez que ce qui vous a attraper est une tantacule visquese qui sortaient du dos de la bête. ",
  dial6Act2Ch2fin : " [ ?????? ] : tu vas rejoindre la faimille petit agneau mais avant ça, je vais me délecter de se si bon repas. ",
  descAct2Chx2 : " les rires sont de trop, vous commencer a courir dans le sens opposer. peut importe ou ça vous meènerai ça serai toujours moins tériffiant que ces ricanement stridant. Vos poumons vous brûle et vos jambes vous porte difficilement lorsque vous appercevait au loin une maison qui semble éclairé. Voilà votre salut. vous vous hâtez pour rejoindre la maison. La lourde porte en bois s'ouvre en grinçant et donne sur une immense salle à manger qui n'avais visiblement pas servie depuis longtemps. Un grands escalier trônais au centre de la pièce pour rejoindre l'étage et de part et d'autre de celui ci se trouvais deux couloirs. Vous entre appercevait alors qu'une lumière plus vivace que les autre se trouve au premier. ",
  choix1Act2Chx1 : " monter à l'étage pour voir d'ou provient la lumière ",
  choix1Act2Chx2 : " continuer a inspecter le rez de chaussé ",
  descAct2Chx2Ch1 : " vous montez les marches. Chaque pas fait grincer les lattes du parquet sur lesquel vous marchez. l'étage est baigner de lumière, a votre grande surprise, alors vous commencez a vous avencer. Vous vous retrouvez devant un long couloir, des bruit sinistres résonne dans les murs, comme des grattement incessant  de souris qui serai bloqué. lentement vous vous rapprocher de la porte d'où semble s'échapper la lumière et vous fixer devant celle ci. ",
  choix1Act2Chx2Ch1 : " entrer dans la pièce ",
  choix2Act2Chx2Ch1 : " continuer d'avancer dans le couloir ",
  descAct2Chx2Ch1Ch1 : " Une boucherie. Voilà le mot le plus approprier pour décrire la scène qui s'offre a vous. partout dans la pièce, des cadavre humain mutilé sont suspendu a des crochets, comme on le fait pour les cochons. Sur le sol on peut trouver çà et là des vicères et des membre arraché. vous rentrez un peu plus dans la pièce pour mieux constater l'étendu de ce massacre. Tout au fond vous appercevez une cage en fer forger. Vous vous approchez pour voir ce qu'elle contient. une odeur encore plus nauséabonde se dégage de la prison et pour cause, les reste d'un tronc humain sont entrain de putréfier dans un coin. Ce qui attire votre attention cependant, c'est le bout de papier posé a l'exterieur des barreau. On dirai que le pauvre malheureux avait voulu écrire quelques chose.",
  choix1Act2Chx2Ch1Ch1 : " lire le papier ",
  choix2Act2Chx2Ch1Ch1 : " sortir de la pièce ",
  descAct2Chx2Ch1Ch1Ch1 : " vous vous approchez de la cage et vous baisser pour lire le papier écrit. ",
  dial1Act2Chx2Ch1Ch1fin : " [  prisonnier  ] : je ne sais pas qui est ce qui lira ceci et je pris dieu pour que personne n'ai a le faire. Mais si tu lis ces lignes tu est déjà condamner. je l'ai compris trop tard moi aussi, tu es dans un garde manger et la créature qui habite cette forêt fera sans doute de toi son repas. Tu sais qui elle est, on le sais tous car c'est ce que nous racontaint nos parents pour pas que l'on sorte tard la nuit. les vieilles légende possèdent toujours une part de vérité et le slenderman en fait partie. je suis profondément désolé. ",
  descAct2Chx2Ch1Ch1fin : " le cliquetie du loquet de la porte résonne dans la pièce. Des bruit lourds de pas se font entendre et se rapproche de plus en plus de vous. Pas après pas. Un silence assourdissant envait alors la pièce. Vous restez immobile, le dos raide, la peur vous retournant les tripes car vous savez se qu'il vous attends. Vous sentez un léger souffle caresser votre nuque. " ,
  choix1Act2Chx2Ch1Ch1fin : " se retourner ",
  descAct2Chx2Ch2fin : " c'en est trop pour vous, vous décider alors de sortir de cette pièce maudite qui vous donne des nausées. Vous essayer de pousser la porte mais celle si ne s'ouvre pas. Vous réessayer encore mais rien y fait. Alors pris de panique vous commencer a tambouriner sur la porte pour essayer de la défoncer mais l'effet reste toujours le même. Des craquements se font entendre et une voix grave et profonde s'elève dans la pièce. ",
  dial1Act2Chx2Ch2fin : " [ ????? ] : cours petit agneau. ",
  descAct2Chx2Ch1 : "vous avancer dans cette grande pièce. ça et là se trouve des meubles que l'on croirait sortie d'un autre temps. Vous vous approchez d'une grande armoire en bois massif et vous l'ouvrez. A l'intérieur se trouve des vêtements, des jouets et des livres. On aurait presque dis que des gens avait habiter ici. tout a coup un bruit sourd se fait entendre et la maison se retrouve plonger dans le noir. les bruit s'intensifièrent et une voix résona dans la maison. ",
  dial1Act2Chx2Ch1 : " [ ????? ] : j'aime voir la peur dans les yeux de mes proies alors cours. COURS POUR TA VIE PETIT AGNEAU ! ",
  choix1Act2Chx2Ch1 : " prendre le couloir de gauche  ",
  choix2Act2Chx2Ch1 : " prendre le couloir de droite ",
  descAct2Chx2Ch1Ch1 : " vous vous engager dans le couloir de gauche. Courrant pour échapper a cette chose que vous n'osez imaginer. Vous vous engouffrez dans les couloir, navigant à l'aveugle dans cette maison au allure de labirynthe avant de vous retrouver dans un cul ded sac. Les bruit de pas se rapproche de plus en plus avant de s'arrêter, laissant un silence de mort envahir l'endroit. ",
  dial1Act2Chx2Ch1Ch1 : " [ ????? ] : gagné ! ",
  descAct2Chx2Ch1Ch1 : " vous prenez le couloir de droite. Courrant pour échapper a cette chose que vous n'osez imaginer. Vous vous engouffrez dans les couloir, navigant à l'aveugle dans cette maison au allure de labirynthe avant de trouver une fenêtre donnant sur l'exterieur.Vous vous précipiter vers celle ci et avant ded vous jeter pour sortir de cette maison des enfer. Puis vous courrez, encore et encore, faisant fit des obstacles et de la douleur. Vous arrivez enfin a la limite de la forêt. en ragrdant au loin vous appercevez une voiture arrêter dans un champs. Vous vous extirper de se bois maudit, laissant derrière vous ce monstre qui hantera vos cauchemar jusqu'a la fin de vos jours. ",
  end : "fin",
  descAct2Chx1Ch1 : " cela semble trop bizarre pour prendre le risque. vous decidait alors de redécendre au rez de chaussez",
}

let index = 0;
let texte = "";


function affichage( text){
  texte = text;

  function writeType(){
    document.getElementById("prompt").innerHTML += texte[index];
    index++;
    if(index < texte.length){
      setTimeout(writeType, 40  );
    }
  }
  writeType();

}

function game(){
  let desc1 = script.desc1;
  let desc2 = script.desc2;
  let dial1Mc = script.dial1Mc;
  let desc3 = script.desc3;
  let dial2Mc = script.dial2Mc;
  let dial2Inc = script.dial2Inc;
  let choix1Act1 = script.choix1Act1;
  let desc4 = script.desc4;
  let dial1Act1Inc = script.dial1Act1Inc;
  let desc5 = script.desc5;
  let desc6 = script.desc6;
  let choix1Act2 = script.choix1Act2;
  let choix2Act2 = script.choix2Act2;
  let desc7Act2Ch1 = script.desc7Act2Ch1;
  let desc8Act2Ch1 = script.desc8Act2Ch1;
  let dial1Act2Ch1 = script.dial1Act2Ch1;
  let dial2Act2Ch1 = script.dial2Act2Ch1;
  let choix1Act3Ch1 = script.choix1Act3Ch1;
  let choix2Act3Ch2 = script.choix2Act3Ch2;
  let dial2Act2Ch1bis = script.dial2Act2Ch1;
  let dial3Act2Ch1 = script.dial3Act2Ch1;
  let dial4Act2Ch1 = script.dial4Act2Ch1;
  let desc9Act2Ch1 = script.desc9Act2Ch1;
  let choix1Act2Ch1fin1 = script.choix1Act2Ch1fin1;
  let choix2Act2Ch1fin2 = script.choix2Act2Ch1fin2;
  let desc10Act2Ch1fin1 = script.desc10Act2Ch1fin1;
  let desc11Act2Ch1fin1 = script.desc11Act2Ch1fin1;
  let dial1Act2Ch2 = script.dial1Act2Ch2;
  let dial2Act2Ch2 = script.dial2Act2Ch2;
  let dial3Act2Ch2 = script.dial3Act2Ch2;
  let desc9Act2Ch2 = script.desc9Act2Ch2;
  let choix1Act2Ch2finbis = script.choix1Act2Ch2fin;
  let desc10Act2Ch2fin = script.desc10Act2Ch2fin;
  let desc11Act2Ch2fin = script.desc11Act2Ch2fin;
  let dial3Act2Ch2fin = script.dial3Act2Ch2fin;
  let dial4Act2Ch2fin = script.dial4Act2Ch2fin;
  let dial5Act2Ch2fin = script.dial5Act2Ch2fin;
  let desc12Act2Ch2fin = script.desc12Act2Ch2fin;
  let choix1Act2Ch2fin = script.choix1Act2Ch2fin;
  let desc13Act2Ch2fin = script.desc13Act2Ch2fin;
  let dial6Act2Ch2fin = script.dial6Act2Ch2fin;
  let descAct2Chx2Ch1 = script.descAct2Chx2Ch1;
  let choix1Act2Chx2Ch1bis = script.choix1Act2Chx2Ch1;
  let choix2Act2Chx2Ch1bis = script.choix2Act2Chx2Ch1;
  let descAct2Chx2Ch1Ch1bis = script.descAct2Chx2Ch1Ch1;
  let choix1Act2Chx2Ch1Ch1 = script.choix1Act2Chx2Ch1Ch1;
  let choix2Act2Chx2Ch1Ch1 = script.choix2Act2Chx2Ch1Ch1;
  let descAct2Chx2Ch1Ch1Ch1bis = script.descAct2Chx2Ch1Ch1Ch1;
  let dial1Act2Chx2Ch1fin = script.dial1Act2Chx2Ch1fin;
  let descAct2Chx2Ch2finbis = script.descAct2Chx2Ch2fin;
  let dial1Act2Chx2Ch1 = script.dial1Act2Chx2Ch1;
  let choix1Act2Chx2Ch1 = script.choix1Act2Chx2Ch1;
  let choix2Act2Chx2Ch1 = script.choix2Act2Chx2Ch1;
  let descAct2Chx2Ch1Ch1 = script.descAct2Chx2Ch1Ch1;
  let dial1Act2Chx2Ch1Ch1finbis = script.dial1Act2Chx2Ch1Ch1fin;
  let descAct2Chx2Ch1fin = script.descAct2Chx2Ch1fin;
  let descAct2Chx2Ch2fin = script.descAct2Chx2Ch2fin;
  let dial1Act2Chx2Ch1Ch1 = script.dial1Act2Chx2Ch1Ch1;
  let descAct2Chx2Ch1Ch1fin = script.descAct2Chx2Ch1Ch1fin;
  let descAct2Chx2Ch1Ch1Ch1prime = script.descAct2Chx2Ch1Ch1Ch1;
  let dial1Act2Chx2Ch1Ch1fin = script.dial1Act2Chx2Ch1Ch1fin;
  let descAct2Chx2Ch1Ch1Ch1 = script.descAct2Chx2Ch1Ch1Ch1;
  let end = script.end;


  document.getElementById("btn").className = "button1 hide";
  document.getElementById("prompt").className = "";

    affichage(desc1);

  setTimeout(function(){
    prompt.innerHTML += "<br>";
    prompt.innerHTML += "<br>";
    index = 0;
    affichage(desc2)},desc1.length *60 + 100);

    document.getElementById("btn 3").className = "btn btn-primary button1";
    btn3.innerHTML = dial1Mc;

  
  btn3.addEventListener("click", function(){
    document.getElementById("btn 3").className = "button1 hide";
    prompt.innerHTML += "<br>";
    prompt.innerHTML += "<br>";
    index = 0;
    affichage(desc3);
  });

}