// Function to play sound
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode || e.target.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode || e.target.dataset.key}"]`);
    if (!audio) return; // Stop if no audio element found

    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
}

// Add event listener for keydown events
window.addEventListener('keydown', playSound);

// Add event listener for click events on the buttons
document.querySelectorAll('.key').forEach(key => key.addEventListener('click', playSound));

// Remove the 'playing' class after transition ends
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
