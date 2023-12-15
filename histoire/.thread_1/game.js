const story_start = document.getElementById('story-text');
const next = document.getElementById('next-button');

const stories = [
    "Ça y est, c'est le grand jour ! Aujourd'hui, ",
    "Voici le deuxième texte de l'histoire.",
    "C'est le dernier texte de l'histoire."
];

let currentStoryIndex = 0; // Add this line

function displayStory() {
    const story = stories[currentStoryIndex];
    let index = 0;

    function addLetter() {
        if (index < story.length) {
            story_start.innerHTML += story[index];
            index++;
            setTimeout(addLetter, 100); // Adjust delay as needed
        }
    }

    addLetter();
}

displayStory();