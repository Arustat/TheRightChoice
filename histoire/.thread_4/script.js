document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.getElementById('story-text');
    const nextButton = document.getElementById('next-button');

    const stories = [
        "Ceci est le deuxième texte de l'histoire.",
        "Voici le troisième texte de l'histoire.",
        "C'est le dernier texte de l'histoire."
    ];

    let currentStoryIndex = 0;

    function typeWriterEffect(text, callback) {
        let charIndex = 0;
        const typingInterval = 50; // Ajustez la vitesse de frappe ici (plus petit = plus rapide)

        function type() {
            if (charIndex < text.length) {
                storyText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingInterval);
            } else {
                callback(); // Appel de la fonction de rappel une fois que l'effet est terminé
            }
        }

        type(); // Lancer l'effet de machine à écrire
    }

    function showNextStory() {
        if (currentStoryIndex < stories.length) {
            // Ajout de la classe fade-out pour déclencher l'animation de fondu
            storyText.classList.add('fade-out');
            
            // Utilisation d'un délai pour laisser le temps à l'animation de fondu
            setTimeout(() => {
                storyText.textContent = ''; // Effacer le texte actuel
                storyText.classList.remove('fade-out');
                storyText.classList.add('fade-in'); // Ajout de la classe pour l'animation d'apparition

                // Appeler l'effet de machine à écrire avec le prochain texte
                typeWriterEffect(stories[currentStoryIndex], () => {
                    storyText.classList.remove('fade-in');
                    currentStoryIndex++;
                });
            }, 1000); // Le délai doit correspondre à la durée de l'animation de fondu
        } else {
            // Toutes les histoires ont été affichées
            storyText.textContent = "Fin de l'histoire.";
            nextButton.disabled = true;
        }
    }

    nextButton.addEventListener('click', showNextStory);
});
