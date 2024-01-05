document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.getElementById('story-text');
    const nextButton = document.getElementById('next-button');

    const stories = [
        "Ça y est, c'est le grand jour ! Vous entammez votre premier jour dans ce nouveau travail !",
        "Il faut dire que c'est le 3ème en 1 mois, donc pour celui-ci, vous n'aviez pas trop le choix que d'accepter.",
        "Il n'y avait que ça, un poste de nuit, mal payé, et dont vous n'avez trouvé aucun avis sur les précédents employés.",
        "Mais bon, après tout, ce ne devrait pas être trop compliqué, vous n'avez qu'à surveiller les caméras de sécurité.",
        "Et puis, l'endroit étant un vieille pizzeria abandonnée, il ne devrait pas y avoir grand chose à surveiller.",
        "Vous aurez peut-être même le temps de faire une petite sieste !",	
        "Aller, c'est parti !"
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

    startStory();
});
