// Vars
const WHITE_KEYS = ['s', 'd', 'f', 'g', 'h', 'j', 'k'];
const BLACK_KEYS = ['e', 'r', 'y', 'u', 'i'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// select all keys
const keys = document.querySelectorAll('.key');

// Add an event listener to all keys
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));

});

// -- Handlers-- 
function playNote(key) {
    // get the notes letter value
    const noteAudio = document.getElementById(key.dataset.note);


// reset the notes current time to 0
noteAudio.currentTime = 0;

    // play the note
    noteAudio.play();

// add a class active for styling purposes
key.classList.add('active');

noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
});
}

document.addEventListener('keydown', (e) => {
    // check key that triggered event
    const key= e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

        if (e.repeat) {
        return;
    }

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
}

if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
    }

});
