$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLetter = urlParams.get('letter');
    let words = [];
    let currentIndex = 0;

    $.getJSON('data/words.json', function(data) {
        words = data[selectedLetter] || [];
        showFlashcard();
    });

    $('#next-btn').click(function() {
        currentIndex = (currentIndex + 1) % words.length;
        showFlashcard();
    });

    $('#prev-btn').click(function() {
        currentIndex = (currentIndex - 1) % words.length;
        showFlashcard();
    });

    function showFlashcard() {
        const word = words[currentIndex];
        $('#flashcard').text(word);
        $('#flashcard').css('background-color', getRandomColor());
        playSound(word);
    }

    function getRandomColor() {
        const colors = ['#ff69b4', '#ff6347', '#ffa500', '#40e0d0', '#9370db'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function playSound(word) {
        const audio = document.getElementById('sound-player');
        audio.src = 'assets/sounds/${word.toLowerCase()}.mp3';
        audio.play();
    }
});
