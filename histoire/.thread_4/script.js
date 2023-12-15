document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.getElementById('story-text');
    const nextButton = document.getElementById('next-button');

    const stories = [
        "Ceci est le premier texte de l'histoire.",
        "Voici le deuxième texte de l'histoire.",
        "C'est le dernier texte de l'histoire."
    ];

    let currentStoryIndex = 0;

    function typeWriterEffect(text, callback) {
        let charIndex = 0;
        const typingInterval = 50;

        function type() {
            if (charIndex < text.length) {
                storyText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingInterval);
            } else {
                callback();
            }
        }

        type();
    }

    function startStory() {
        document.body.classList.add('fade-in');
        typeWriterEffect(stories[currentStoryIndex], () => {
            currentStoryIndex++;
        });
    }

    function hideElements() {
        storyText.classList.add('fade-out');
        nextButton.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = 'game.html';
        }, 1000);
    }

    function showNextStory() {
        if (currentStoryIndex < stories.length) {
            storyText.textContent = '';
            typeWriterEffect(stories[currentStoryIndex], () => {
                currentStoryIndex++;
            });
        } else {
            hideElements();
        }
    }

    nextButton.addEventListener('click', showNextStory);

    // Début de l'histoire une fois que la page est chargée
    startStory();
});
