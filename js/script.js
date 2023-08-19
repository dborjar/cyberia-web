// script.js
const canvas = document.getElementById('bannerCanvas');
const ctx = canvas.getContext('2d');

const banner = {
  x: -300,
  y: canvas.height / 2,
  text: 'CLUB_CYBERIA',
  font: 'bold 20px Arial',
  textColor: 'WHITE',
  moveSpeed: 3,
};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  banner.x += banner.moveSpeed;

  if (banner.x > canvas.width) {
    banner.x = -banner.text.length * 24; // Reset position
  }

  drawBanner();
}

function drawBanner() {
  ctx.font = banner.font;
  ctx.fillStyle = banner.textColor;
  ctx.fillText(banner.text, banner.x, banner.y);
}

animate();
