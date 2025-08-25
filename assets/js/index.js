$(document).ready(function() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    letters.forEach(letter => {
        $('#letter-container').append(`<button onclick="startFlashcards('${letter}')">${letter}</button>`);
    });
});

function startFlashcards(letter) {
    window.location.href = `flashcards.html?letter=${letter}`;
}
