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
  "You + Me = Always 💞",

  "I still fall for you every single day ❤️",
  "You are my safe place 🌸",
  "Even forever is not enough with you 💖",
  "Your smile is my favorite thing 💕",
  "I choose you, always and again 💍",

  "You make my world brighter 🌞",
  "Loving you is my favorite habit 💗",
  "You are my dream come true ✨",
  "My heart belongs only to you ❤️",
  "Every moment with you is special 💞",

  "You are my today and all my tomorrows 💕",
  "I never want to stop loving you 💖",
  "You complete my heart ❤️",
  "You are my sweetest addiction 🍯",
  "Forever started when I met you 💍",

  "I love you more than words can say 💗",
  "You are my happiest thought 🌸",
  "You make my life beautiful 💕",
  "I’m better because of you ❤️",
  "You are my favorite hello 💞",

  "I found my home in you 🏡❤️",
  "You are my heartbeat 💓",
  "You are my dream I never want to wake from ✨",
  "I love loving you 💖",
  "You are my peace 🌙",

  "You are the reason I smile 😊❤️",
  "You are my universe 🌌",
  "My heart beats only for you 💓",
  "You are my forever person 💕",
  "I adore you endlessly 💖",

  "You are my sunshine on dark days ☀️",
  "I’m lost in your love ❤️",
  "You are my lucky charm 🍀",
  "You make life worth living 💞",
  "I choose you in every lifetime 💍",

  "You are my sweetest addiction 💗",
  "I love every version of you ❤️",
  "You are my favorite place to be 💕",
  "You are my calm in chaos 🌊",
  "My heart smiles for you 😊",

  "You are my perfect story 📖❤️",
  "I love you beyond forever 💞",
  "You are my missing piece 🧩",
  "You are my dream come true ✨",
  "I’m yours completely ❤️",

  "You make my soul happy 💖",
  "You are my forever happiness 🌸",
  "I never knew love until you 💕",
  "You are my greatest blessing 🙏",
  "I want all my tomorrows with you ❤️",

  "You are my heart’s home 🏡",
  "I love you deeper every day 💗",
  "You are my everything 💞",
  "You are my favorite feeling ❤️",
  "I’m addicted to your love 💖",

  "You are my forever dream ✨",
  "You make life worth every second 💕",
  "You are my eternal love ❤️",
  "I never want to lose you 💞",
  "You are my destiny 💍",

  "You are my sweetest memory 🌸",
  "I fall for you repeatedly ❤️",
  "You are my heart’s desire 💗",
  "You are my endless love story 💕",
  "You are my forever and always 💞",

  "You are my reason to believe in love ❤️",
  "You are my favorite thought 💖",
  "You are my safe heaven 🌙",
  "You are my soul connection ✨",
  "You are my perfect match 💍",

  "I love you more than yesterday 💗",
  "You are my beautiful chaos 💕",
  "You are my calm heart ❤️",
  "You are my dream reality ✨",
  "You are my forever magic 💞",

  "You are my love language ❤️",
  "You are my heart’s melody 🎶",
  "You are my endless happiness 💖",
  "You are my sweetest truth 💕",
  "You are my forever story 💍",

  "You are my everything in one person ❤️",
  "You are my light in darkness 🌟",
  "You are my soft place to fall 💗",
  "You are my heart’s rhythm 💓",
  "You are my forever home 🏡"
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

/*   
PWA Install access
*/
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(reg => console.log("SW registered"))
      .catch(err => console.log(err));
  });
}