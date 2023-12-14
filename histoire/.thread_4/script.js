document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.getElementById('story-text');
    const nextButton = document.getElementById('next-button');

    const stories = [
        "Ceci est le deuxième texte de l'histoire.",
        "Voici le troisième texte de l'histoire.",
        "C'est le dernier texte de l'histoire."
    ];

    let currentStoryIndex = 0;

    function showNextStory() {
        if (currentStoryIndex < stories.length) {
            storyText.textContent = stories[currentStoryIndex];
            currentStoryIndex++;
        } else {
            // Toutes les histoires ont été affichées
            storyText.textContent = "Fin de l'histoire.";
            nextButton.disabled = true;
        }
    }

    nextButton.addEventListener('click', showNextStory);
});
