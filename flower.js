document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("flowerCanvas");
    const ctx = canvas.getContext("2d");

    // Adjust the canvas size for better fit on the webpage
    canvas.width = 300;  // Reduced width
    canvas.height = 300; // Reduced height

    const petals = 12;
    const petalRadius = 70;  // Smaller radius to fit the reduced canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const colors = ["#ff69b4", "#ff1493", "#ff6347", "#ffa07a", "#ff4500"];

    // Draw Petal Function
    function drawPetal(angle, radius, color) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(radius / 2, -radius / 1.5, 0, -radius);
        ctx.quadraticCurveTo(-radius / 2, -radius / 1.5, 0, 0);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    // Animate Flower Drawing
    let currentPetal = 0;
    function animateFlower() {
        if (currentPetal < petals) {
            const angle = (Math.PI * 2 / petals) * currentPetal;
            const colorIndex = currentPetal % colors.length;
            drawPetal(angle, petalRadius, colors[colorIndex]);
            currentPetal++;
            setTimeout(animateFlower, 400);
        } else {
            drawCenter();
            revealText();
        }
    }

    // Draw Center of the Flower
    function drawCenter() {
        const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 20);
        gradient.addColorStop(0, "#ffdf00");
        gradient.addColorStop(1, "#ffa500");
        ctx.beginPath();
        ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);  // Reduced center size
        ctx.fillStyle = gradient;
        ctx.fill();
    }

    // Text Typing Effect
    const text = "https://reabot6.github.io/snake.html";
    const textContainer = document.getElementById("textContainer");
    let charIndex = 0;
    function typeText() {
        if (charIndex < text.length) {
            textContainer.textContent += text[charIndex];
            charIndex++;
            setTimeout(typeText, 200);
        } else {
            textContainer.style.opacity = 1;
        }
    }

    function revealText() {
        setTimeout(typeText, 1000);
    }

    // Start the animation
    animateFlower();
});
