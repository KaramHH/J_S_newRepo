let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');

function updateDisplay() {
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

function incrementHome(amount) {
    homeScore += amount;
    updateDisplay();
}

function incrementGuest(amount) {
    guestScore += amount;
    updateDisplay();
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    updateDisplay();
}
// Initialize display
updateDisplay();
