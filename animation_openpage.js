function agrandir(nomdiv, thread) {
    let div = nomdiv + ' img';
    let img = document.querySelector(div);

    img.style.transition = 'transform 2s'; // Ajoute une transition de 2 secondes
    img.style.transform = 'scale(1.2)'; // Agrandit l'image

    setTimeout(function() {
        img.style.width = '100vw'; // Définit la largeur de l'image à la largeur de la fenêtre
        img.style.height = '100vh'; // Définit la hauteur de l'image à la hauteur de la fenêtre
    }, 2000); // Attend 2 secondes avant d'agrandir l'image à la taille de la fenêtre

    setTimeout(function() {
        window.location.href = thread; // Change de page
    }, 4000); // Attend 4 secondes avant de changer de page
}