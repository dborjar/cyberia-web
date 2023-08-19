module.exports = {
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {
      cascade: false
    }
  }
}

// script.js
const canvas = document.getElementById('bannerCanvas');
const ctx = canvas.getContext('2d');

const banner = {
  x: 0,
  y: canvas.height / 2,
  width: 200,
  height: 100,
  angle: 0,
  rotationSpeed: 0.01,
  moveSpeed: 2,
};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  banner.angle += banner.rotationSpeed;
  banner.x += banner.moveSpeed * Math.cos(banner.angle);

  if (banner.x > canvas.width - banner.width || banner.x < 0) {
    banner.rotationSpeed *= -1; // Reverse rotation direction
  }

  drawBanner();
}

function drawBanner() {
  ctx.save();
  ctx.translate(banner.x, banner.y);
  ctx.rotate(banner.angle);

  ctx.fillStyle = '#f39c12';
  ctx.fillRect(-banner.width / 2, -banner.height / 2, banner.width, banner.height);

  ctx.restore();
}

animate();
