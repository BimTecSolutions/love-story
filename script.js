const startDate = new Date("2026-04-18T00:00:00");

/* =========================
   LOVE COUNTER
========================= */
function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.textContent = days;
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

/* =========================
   LOVE NOTES
========================= */
const notes = [
  "With you, life feels magical 💗",
  "You are my forever ❤️",
  "Every second with you matters ✨",
  "Our love is endless 💕",
  "You + Me = Always 💞"
];

const loveBtn = document.getElementById("loveBtn");
const loveNote = document.getElementById("loveNote");

if (loveBtn && loveNote) {
  loveBtn.addEventListener("click", () => {

    const random = notes[Math.floor(Math.random() * notes.length)];

    // smooth fade (no UI jump)
    loveNote.style.opacity = 0;

    setTimeout(() => {
      loveNote.textContent = random;
      loveNote.style.opacity = 1;
    }, 150);

    createHeartsOnCard();
  });
}

/* =========================
   HEART BURST (ON CARD)
========================= */
function createHeartsOnCard() {
  const card = document.querySelector(".card");
  if (!card) return;

  const rect = card.getBoundingClientRect();

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.textContent = "❤";

    heart.style.left = Math.random() * rect.width + "px";
    heart.style.top = Math.random() * rect.height + "px";

    const size = 10 + Math.random() * 12;
    heart.style.fontSize = size + "px";

    card.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

/* =========================
   THEME SWITCH (SAFE + RELIABLE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeToggle");

  if (!themeBtn) return;

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    themeBtn.textContent = isLight ? "☀️" : "🌙";
  });
});