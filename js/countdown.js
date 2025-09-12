// Set the birthday date (October 20, 2025)
const birthday = new Date('October 20, 2025 00:00:00');

// Countdown function
function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;
    
    // If countdown is complete
    if (diff <= 0) {
        // Redirect to main page if we're on the countdown page
        if (document.body.classList.contains('countdown-page')) {
            window.location.href = 'main.html';
            return;
        }
        
        // Otherwise, show the main content
        document.getElementById('main-content').classList.add('visible');
        createConfetti();
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update countdown display if elements exist
    if (document.getElementById('days')) {
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
}

// Initial call and set interval
updateCountdown();
setInterval(updateCountdown, 1000);

// Confetti function
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);
            
            // Remove confetti after animation completes
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 20);
    }
}