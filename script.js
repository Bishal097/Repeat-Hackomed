// Function to highlight the acupuncture point on the hand image
function highlightPoint() {
    const pointInput = document.getElementById('acupuncturePoint').value;

    // Get the canvas and its context
    const canvas = document.getElementById('handCanvas');
    const ctx = canvas.getContext('2d');

    // Load the hand image onto the canvas
    const handImage = new Image();
    handImage.src = 'path/to/your/hand_image.png'; // Replace 'path/to/your/hand_image.png' with the actual path
    handImage.onload = function() {
        ctx.drawImage(handImage, 0, 0, canvas.width, canvas.height);

        // Highlight the acupuncture point with a red dot
        ctx.fillStyle = 'red';
        const x = 100; // Replace with the X-coordinate of the acupuncture point
        const y = 200; // Replace with the Y-coordinate of the acupuncture point
        const radius = 5;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();

        // Update the download link with the canvas data URL
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = canvas.toDataURL();
    };
}
