const startDate = new Date("2025-05-11T00:00:00");

function updateCounter(){
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff/(1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60))%24);
  const minutes = Math.floor((diff/(1000*60))%60);
  const seconds = Math.floor((diff/1000)%60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}

updateCounter();
setInterval(updateCounter,1000);

const notes=[
"With you, ordinary days become magical.",
"You are my today and all my tomorrows.",
"Our love grows in every passing second.",
"Forever began on 11 May 2025."
];

document.getElementById('loveBtn').addEventListener('click',()=>{
const random=notes[Math.floor(Math.random()*notes.length)];
document.getElementById('loveNote').textContent=random;
});