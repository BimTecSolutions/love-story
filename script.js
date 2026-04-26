const startDate = new Date("2025-05-11T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

/* 💌 LOVE NOTES */
const notes = [
  "With you, ordinary days become magical 💗",
  "You are my today and all my tomorrows ❤️",
  "Our love grows in every passing second 🌸",
  "Forever began on 11 May 2025 💞",
  "You are my favorite hello and hardest goodbye 💕"
];

const loveBtn = document.getElementById("loveBtn");
const loveNote = document.getElementById("loveNote");

loveBtn.addEventListener("click", () => {

  const random = notes[Math.floor(Math.random() * notes.length)];

  // smooth fade effect (no UI jump)
  loveNote.style.opacity = 0;

  setTimeout(() => {
    loveNote.textContent = random;
    loveNote.style.opacity = 1;
  }, 150);

  // 💖 HEART BURST EFFECT
  createHearts();
});

/* 💖 HEART BURST FUNCTION */
function createHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.textContent = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "70vh";

    const size = Math.random() * 10 + 12;
    heart.style.fontSize = size + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}