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
  "With you, life feels magical 💗",
  "You are my forever ❤️",
  "Every second with you matters ✨",
  "Our love is endless 💕",
  "You + Me = Always 💞"
];

const loveBtn = document.getElementById("loveBtn");
const loveNote = document.getElementById("loveNote");

loveBtn.addEventListener("click", () => {

  const random = notes[Math.floor(Math.random() * notes.length)];
  loveNote.textContent = random;

  createHeartsOnCard();
});

/* HEARTS ON CARD */
function createHeartsOnCard() {
  const card = document.querySelector(".card");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.textContent = "❤";

    const rect = card.getBoundingClientRect();

    heart.style.left = Math.random() * rect.width + "px";
    heart.style.top = Math.random() * rect.height + "px";

    heart.style.fontSize = (10 + Math.random() * 10) + "px";

    card.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

/* THEME SWITCH (FIXED) */
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeToggle");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
      document.body.classList.contains("light") ? "☀️" : "🌙";
  });
});