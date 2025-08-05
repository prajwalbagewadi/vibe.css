// Select the element with the class 'tilt-card' and store it in a variable
const card = document.querySelector(".tilt-card");

// Add an event listener that runs when the mouse moves over the card
card.addEventListener("mousemove", (e) => {
  // Get the position and size of the card relative to the viewport
  const rect = card.getBoundingClientRect();

  // Calculate the mouse position inside the card
  const x = e.clientX - rect.left; // X position of mouse within the card
  const y = e.clientY - rect.top;  // Y position of mouse within the card

  // Get the center point of the card
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Set the maximum tilt angle in degrees
  const maxTilt = 15;

  // Calculate how far the mouse is from the center and apply tilt accordingly
  const rotateX = ((centerY - y) / centerY) * maxTilt; // Tilt up/down
  const rotateY = ((x - centerX) / centerX) * maxTilt; // Tilt left/right

  // Apply the 3D transform to the card to create a tilt effect
  card.style.transform = `
    perspective(1000px)          /* Adds 3D depth */
    rotateX(${rotateX}deg)       /* Tilt vertically based on mouse Y */
    rotateY(${rotateY}deg)       /* Tilt horizontally based on mouse X */
    scale(1.05)                  /* Slightly zoom in */
  `;
});

// When the mouse leaves the card, reset the transformation to default
card.addEventListener("mouseleave", () => {
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
});
