const quotes = [
  "你并不孤单 💖",
  "一句温柔的话，能改变一整天。",
  "选择善意，让世界更温暖。",
  "你的微笑，是最美的力量。",
  "多一点理解，少一点伤害。",
  "温柔永远不会过时。",
  "你很重要，请别忘记。",
  "言语也有重量，请轻拿轻放。"
];

function generateCard() {
  const input = document.getElementById('inputText').value.trim();
  const text = input || "温柔是一种力量 💖";
  document.getElementById('cardText').textContent = text;
}

function randomQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('inputText').value = random;
  generateCard();
}

function downloadCard() {
  const card = document.getElementById('card');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'kindness-card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}

// 动态加载 html2canvas 库
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
document.head.appendChild(script);
