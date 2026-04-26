const startDate = new Date("2026-04-18T00:00:00");

/* COUNTER */
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

/* LOVE NOTES */
const notes = [
  "With you, life feels softer 💗",
  "You are my forever person ❤️",
  "Every moment with you is magic ✨",
  "Our love story is my favorite 💕",
  "You + Me = Always 💞"
];

const loveBtn = document.getElementById("loveBtn");
const loveNote = document.getElementById("loveNote");

loveBtn.addEventListener("click", (e) => {

  const random = notes[Math.floor(Math.random() * notes.length)];

  loveNote.textContent = random;

  // 💖 HEARTS ON CARD (NOT BACKGROUND)
  createCardHearts(e);
});

/* HEARTS ON CARD */
function createCardHearts(e) {
  const card = document.querySelector(".card");

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.textContent = "❤";

    const rect = card.getBoundingClientRect();

    heart.style.left = (Math.random() * rect.width) + "px";
    heart.style.top = (Math.random() * rect.height) + "px";

    const size = Math.random() * 10 + 10;
    heart.style.fontSize = size + "px";

    card.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

/* THEME TOGGLE */
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  themeBtn.textContent = document.body.classList.contains("light")
    ? "☀️"
    : "🌙";
});