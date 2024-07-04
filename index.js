let noCount = 0;

function handleResponse(response) {
    if (response) {
        // Show congratulations message
        document.getElementById('congratsMessage').style.display = 'block';
        // Start 1-minute countdown
        const countdown = setInterval(function() {
            const countdownElement = document.getElementById('countdown');
            let countdownTime = parseInt(countdownElement.innerText);
            if (isNaN(countdownTime)) countdownTime = 60;
            if (countdownTime <= 0) {
                clearInterval(countdown);
                countdownElement.innerText = "It's time for our date!";
            } else {
                countdownElement.innerText = countdownTime - 1;
            }
        }, 1000);
    } else {
        noCount++;
        document.getElementById('noBtn').style.fontSize = `${20 - noCount}px`;
        document.getElementById('yesBtn').style.fontSize = `${20 + noCount}px`;
    }
}